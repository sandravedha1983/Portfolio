
import cv2
from pathlib import Path

video_path = Path(
    "vedhavathi-portfolio/public/frames/"
    "Character_looking_around_animation_20261010223346.mp4"
)
frames_dir = Path("vedhavathi-portfolio/public/frames/extracted")
frames_dir.mkdir(parents=True, exist_ok=True)

if not video_path.exists():
    print(f"Video not found: {video_path}")
    print("Check the video filename inside the public folder.")
    raise SystemExit(1)

cap = cv2.VideoCapture(str(video_path))

if not cap.isOpened():
    print("Could not open the video.")
    raise SystemExit(1)

total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
fps = cap.get(cv2.CAP_PROP_FPS)
duration = total_frames / fps if fps else 0

print(f"Video duration: {duration:.2f} seconds")
print(f"Original frames: {total_frames}")

# Extract 64 evenly spaced frames.
count = 64

for i in range(count):
    timestamp = i * duration / count
    cap.set(cv2.CAP_PROP_POS_MSEC, timestamp * 1000)
    success, frame = cap.read()

    if not success:
        print(f"Could not extract frame {i:02d}")
        continue

    # Resize for a smaller, web-friendly frame.
    frame = cv2.resize(frame, (640, 360))
    output_path = frames_dir / f"frame_{i:02d}.webp"

    saved = cv2.imwrite(
        str(output_path),
        frame,
        [cv2.IMWRITE_WEBP_QUALITY, 85]
    )

    if saved:
        print(f"Saved {output_path}")

cap.release()
print("Frame extraction finished!")
