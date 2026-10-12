"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./CharacterHero.module.css";

const FRAME_COUNT = 64;
const CANVAS_WIDTH = 640;
const CANVAS_HEIGHT = 360;
const FRAME_OFFSET_X = 56;
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const DIRECTION_FRAMES = {
  center: 60,
  up: 56,
  upperRight: 8,
  right: 16,
  lowerRight: 22,
  down: 28,
  lowerLeft: 36,
  left: 48,
  upperLeft: 52,
} as const;

type Direction = keyof typeof DIRECTION_FRAMES;

const POINTER_DIRECTIONS: readonly Exclude<Direction, "center">[] = [
  "right",
  "lowerRight",
  "down",
  "lowerLeft",
  "left",
  "upperLeft",
  "up",
  "upperRight",
];

const DIRECTION_ANGLES: Record<Exclude<Direction, "center">, number> = {
  right: 0,
  lowerRight: 45,
  down: 90,
  lowerLeft: 135,
  left: 180,
  upperLeft: 225,
  up: 270,
  upperRight: 315,
};

function angleDifference(angle: number, reference: number) {
  return ((angle - reference + 540) % 360) - 180;
}

export default function CharacterHero() {
  const stageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const targetIndex = useRef<number>(DIRECTION_FRAMES.center);
  const currentIndex = useRef<number>(DIRECTION_FRAMES.center);
  const images = useRef<HTMLImageElement[]>([]);
  const [loadFailed, setLoadFailed] = useState(false);

  useEffect(() => {
    let active = true;
    let animationId = 0;
    let lastDrawn = -1;
    let loadedCount = 0;
    let settledCount = 0;
    let currentDirection: Direction = "center";

    const stage = stageRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d", { willReadFrequently: true });
    const hero = stage?.closest(".hero");
    const interactionArea = hero instanceof HTMLElement ? hero : stage;

    if (!stage || !canvas || !ctx || !interactionArea) {
      setLoadFailed(true);
      return;
    }

    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;
    setLoadFailed(false);

    const getFrameIndex = () =>
      ((Math.round(currentIndex.current) % FRAME_COUNT) + FRAME_COUNT) %
      FRAME_COUNT;

    const drawFrame = (image: HTMLImageElement, index: number) => {
      const cropWidth = Math.min(
        image.naturalWidth,
        (image.naturalHeight * CANVAS_WIDTH) / CANVAS_HEIGHT,
      );
      const cropHeight = Math.min(
        image.naturalHeight,
        (image.naturalWidth * CANVAS_HEIGHT) / CANVAS_WIDTH,
      );
      const cropX = (image.naturalWidth - cropWidth) / 2;
      const cropY = (image.naturalHeight - cropHeight) / 2;

      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      ctx.drawImage(
        image,
        cropX,
        cropY,
        cropWidth,
        cropHeight,
        FRAME_OFFSET_X,
        0,
        CANVAS_WIDTH,
        CANVAS_HEIGHT,
      );

      const frame = ctx.getImageData(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      for (let pixel = 0; pixel < frame.data.length; pixel += 4) {
        const red = frame.data[pixel];
        const green = frame.data[pixel + 1];
        const blue = frame.data[pixel + 2];

        if (blue > red * 1.02 && red > green * 1.015 && blue > 90) {
          frame.data[pixel + 3] = 0;
        }
      }
      ctx.putImageData(frame, 0, 0);
      lastDrawn = index;
    };

    const render = () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        currentIndex.current = targetIndex.current;
      } else {
        const delta =
          ((targetIndex.current - currentIndex.current + FRAME_COUNT * 1.5) %
            FRAME_COUNT) -
          FRAME_COUNT / 2;
        currentIndex.current += delta * 0.16;
      }

      const index = getFrameIndex();
      let drawIndex = index;
      let image = images.current[drawIndex];

      if (!image?.complete || !image.naturalWidth) {
        for (let offset = 1; offset < FRAME_COUNT; offset += 1) {
          const nextIndex = (index + offset) % FRAME_COUNT;
          const previousIndex = (index - offset + FRAME_COUNT) % FRAME_COUNT;
          const nextImage = images.current[nextIndex];
          const previousImage = images.current[previousIndex];

          if (nextImage?.complete && nextImage.naturalWidth) {
            drawIndex = nextIndex;
            image = nextImage;
            break;
          }
          if (previousImage?.complete && previousImage.naturalWidth) {
            drawIndex = previousIndex;
            image = previousImage;
            break;
          }
        }
      }

      if (image?.complete && image.naturalWidth && drawIndex !== lastDrawn) {
        drawFrame(image, drawIndex);
      }
    };

    images.current = Array.from({ length: FRAME_COUNT }, (_, index) => {
      const image = new Image();
      image.onload = () => {
        if (!active) return;
        loadedCount += 1;
        settledCount += 1;
        if (lastDrawn === -1 || index === getFrameIndex()) render();
      };
      image.onerror = () => {
        if (!active) return;
        settledCount += 1;
        if (settledCount === FRAME_COUNT && loadedCount === 0) {
          setLoadFailed(true);
        }
      };
      image.src = `${BASE_PATH}/frames/extracted/frame_${String(index).padStart(2, "0")}.webp`;
      return image;
    });

    const setDirectionFromPointer = (clientX: number, clientY: number) => {
      const bounds = interactionArea.getBoundingClientRect();
      if (!bounds.width || !bounds.height) return;

      const dx = clientX - (bounds.left + bounds.width / 2);
      const dy = clientY - (bounds.top + bounds.height / 2);
      const distance = Math.hypot(dx, dy);

      if (distance < Math.min(bounds.width, bounds.height) * 0.12) {
        currentDirection = "center";
        targetIndex.current = DIRECTION_FRAMES.center;
        render();
        return;
      }

      const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
      const normalizedAngle = (angle + 360) % 360;
      const candidate =
        POINTER_DIRECTIONS[Math.round(normalizedAngle / 45) % POINTER_DIRECTIONS.length];

      if (
        currentDirection !== "center" &&
        candidate !== currentDirection &&
        Math.abs(angleDifference(normalizedAngle, DIRECTION_ANGLES[currentDirection])) < 27
      ) {
        return;
      }

      currentDirection = candidate;
      targetIndex.current = DIRECTION_FRAMES[candidate];
      render();
    };

    const onPointerMove = (event: PointerEvent) => {
      setDirectionFromPointer(event.clientX, event.clientY);
    };

    const onPointerLeave = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      currentDirection = "center";
      targetIndex.current = DIRECTION_FRAMES.center;
      render();
    };

    const draw = () => {
      render();
      if (active) animationId = requestAnimationFrame(draw);
    };

    interactionArea.addEventListener("pointermove", onPointerMove);
    interactionArea.addEventListener("pointerdown", onPointerMove);
    interactionArea.addEventListener("pointerleave", onPointerLeave);
    draw();

    return () => {
      active = false;
      interactionArea.removeEventListener("pointermove", onPointerMove);
      interactionArea.removeEventListener("pointerdown", onPointerMove);
      interactionArea.removeEventListener("pointerleave", onPointerLeave);
      cancelAnimationFrame(animationId);
      images.current.forEach((image) => {
        image.onload = null;
        image.onerror = null;
      });
    };
  }, []);

  return (
    <div ref={stageRef} className={styles.stage}>
      <canvas
        ref={canvasRef}
        className={styles.canvas}
        aria-label="Interactive character portrait; move the pointer to change its gaze"
      />
      {loadFailed && (
        <div className={styles.fallback} role="img" aria-label="Character preview unavailable">
          Character preview unavailable
        </div>
      )}
    </div>
  );
}
