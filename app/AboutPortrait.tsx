'use client';

import { useEffect, useRef } from 'react';

export default function AboutPortrait() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    // Respect prefers-reduced-motion
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      wrapper.classList.add('portrait-visible');
      return;
    }

    if (!('IntersectionObserver' in window)) {
      wrapper.classList.add('portrait-visible');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            wrapper.classList.add('portrait-visible');
            observer.unobserve(wrapper);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -5% 0px' },
    );

    observer.observe(wrapper);
    return () => observer.disconnect();
  }, []);

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

  return (
    <div className="about-portrait-outer" ref={wrapperRef} aria-hidden="true">
      {/* Decorative glow orbs */}
      <span className="portrait-orb portrait-orb-1" />
      <span className="portrait-orb portrait-orb-2" />
      <span className="portrait-orb portrait-orb-3" />

      {/* Corner accent lines */}
      <span className="portrait-corner portrait-corner-tl" />
      <span className="portrait-corner portrait-corner-br" />

      {/* Subtle ring */}
      <span className="portrait-ring" />

      <div className="about-portrait-frame">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${basePath}/portrait.png`}
          alt="Vedhavathi — full-length professional portrait"
          className="about-portrait-img"
          width={480}
          height={640}
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  );
}
