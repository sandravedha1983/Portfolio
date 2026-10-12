'use client';

import { useEffect } from 'react';

const revealGroups = [
  { selector: '.section-label, .section h2, .section-heading-row h2, .about-text-col .section-label', className: 'reveal-heading' },
  {
    selector: '.section-content > .lead, .section-content > .body-copy, .section-heading-row .body-copy',
    className: 'reveal-description',
  },
  { selector: '.about-facts', className: 'reveal-description' },
  { selector: '.project-card', className: 'reveal-card' },
  { selector: '.project-card .tag-list li', className: 'reveal-tag' },
  { selector: '.skill-group', className: 'reveal-skill-group' },
  { selector: '.skill-group li', className: 'reveal-skill' },
  { selector: '.experience-card, .education-card', className: 'reveal-timeline' },
  { selector: '.contact-copy, .contact-footer', className: 'reveal-contact' },
];

export default function ScrollEffects() {
  useEffect(() => {
    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in window)
    ) {
      return;
    }

    const targets: HTMLElement[] = [];
    revealGroups.forEach(({ selector, className }) => {
      document.querySelectorAll<HTMLElement>(selector).forEach((element, index) => {
        element.classList.add('scroll-reveal', className);
        if (className === 'reveal-card' || className === 'reveal-skill') {
          element.style.setProperty('--reveal-delay', `${Math.min(index % 5, 4) * 85}ms`);
        } else if (className === 'reveal-tag') {
          const siblingIndex = Array.from(element.parentElement?.children ?? []).indexOf(element);
          element.style.setProperty('--reveal-delay', `${siblingIndex * 45}ms`);
        }
        targets.push(element);
      });
    });

    document.documentElement.classList.add('has-scroll-reveals');

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -7% 0px' },
    );
    targets.forEach((target) => revealObserver.observe(target));

    const navLinks = Array.from(
      document.querySelectorAll<HTMLAnchorElement>('.main-nav a[href^="#"]'),
    );
    const sections = navLinks
      .map((link) => document.querySelector<HTMLElement>(link.getAttribute('href') ?? ''))
      .filter((section): section is HTMLElement => section !== null);

    const navigationObserver = new IntersectionObserver(
      (entries) => {
        const activeEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];
        if (!activeEntry) return;

        navLinks.forEach((link) => {
          if (link.hash === `#${activeEntry.target.id}`) {
            link.setAttribute('aria-current', 'location');
          } else {
            link.removeAttribute('aria-current');
          }
        });
      },
      { threshold: [0, 0.15, 0.35], rootMargin: '-28% 0px -60% 0px' },
    );
    sections.forEach((section) => navigationObserver.observe(section));

    return () => {
      revealObserver.disconnect();
      navigationObserver.disconnect();
      document.documentElement.classList.remove('has-scroll-reveals');
      targets.forEach((target) => {
        target.classList.remove('scroll-reveal', 'is-visible');
        target.style.removeProperty('--reveal-delay');
      });
      navLinks.forEach((link) => link.removeAttribute('aria-current'));
    };
  }, []);

  return null;
}
