// File: ProjectOverlay.jsx
'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '@/css/overlay.css';
import '@/css/emblaSlider.css'
import EmblaCarousel from './Slider/EmblaCarousel'

export default function ProjectOverlay({ isOpen, onClose, title, description, image, position }) {
  const overlayRef = useRef();
  const OPTIONS = { loop: true }
  const SLIDES = ["/img/portfolio/amor.jpg","/img/portfolio/ono.jpg","/img/portfolio/wdigital.jpg"]
  useEffect(() => {
    if (!isOpen || !position || !overlayRef.current) return;

    const { x, y } = position;
    const overlay = overlayRef.current;

    // Reset style before animating in
    gsap.set(overlay, {
      clipPath: `circle(0% at ${x}px ${y}px)`,
      opacity: 1,
      pointerEvents: 'auto'
    });

    gsap.to(overlay, {
      clipPath: `circle(200% at ${x}px ${y}px)`,
      duration: 2,
      ease: 'power3.out',
    });

    // Optional: Fade in content after expansion
    gsap.fromTo(
      overlay.querySelector('.overlay-content'),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        delay: 0.4,
        ease: 'power3.out'
      }
    );
  }, [isOpen, position]);

  const handleClose = () => {
    const { x, y } = position;
    const overlay = overlayRef.current;

    gsap.to(overlay, {
      clipPath: `circle(0% at ${x}px ${y}px)`,
      duration: 0.5,
      ease: 'power2.in',
      onComplete: () => {
        gsap.set(overlay, { opacity: 0, pointerEvents: 'none' });
        onClose();
      }
    });
  };

  return (
    <div className="project-overlay" ref={overlayRef}>
      <button className="close-overlay" onClick={handleClose}><svg className="icon icon--close"><use xlinkHref="#icon-close"></use></svg></button>
      <div className="overlay-content">
        <div className="overlay-text">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="overlay-image">
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
      </div>
    </div>
  );
}