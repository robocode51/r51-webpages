'use client';
import { useEffect } from 'react';
import { gsap } from 'gsap';

export default function Loader() {
    useEffect(() => {
        const rc51BlockIds = ['#tri', '#box1', '#box2', '#box3', '#semi'];
        const rc51Elements = rc51BlockIds.map(id => document.querySelector(id)).filter(Boolean);

        // Prevent animation if loader already removed
        if (!document.body.classList.contains('loading')) return;

        // Set initial state (before visibility)
        gsap.set(rc51Elements, {
            autoAlpha: 0, // handles opacity + visibility
            x: (i) => (Math.random() - 0.5) * 1000,
            y: (i) => (Math.random() - 0.5) * 1000,
            scale: 0.1,
            rotation: 20,
            transformOrigin: '50% 50%',
        });

        // Animate in
        gsap.to(rc51Elements, {
            autoAlpha: 1,
            x: 0,
            y: 0,
            scale: 1,
            rotation: 0,
            duration: 1.2,
            ease: 'elastic.out(1, 0.75)',
            stagger: 0.15,
        });
    }, []);

    return (
        <div className="loader-wrapper">
            <div className="loader-inner">
                <svg viewBox="0 0 500 500" className='loader-svg'>
                    <polygon className="block" id="tri" points="32,165.64 181.16,27.75 32,27" />
                    <rect className="block" id="box1" x="32" y="166.4" width="151.21" height="139.4" />
                    <rect className="block" id="box2" x="32" y="322.24" width="152.03" height="158.36" />
                    <rect className="block" id="box3" x="311.41" y="27" width="151.21" height="139.4" />
                    <path className="block" id="semi" d="M312.07,184.47c212.83,4.45,212.2,294.71-.88,297.37,2.44-.09.1-296.34.88-297.37Z" />
                </svg>
            </div>
        </div>
    );
}