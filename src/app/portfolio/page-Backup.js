"use client"; // Required for components with event handlers or client-side hooks/scripts
import imagesLoaded from 'imagesloaded';
import { useEffect } from 'react';
import '@/css/portfolioBase.css';
import '@/css/portfolio.css';
import LocomotiveScroll from 'locomotive-scroll';
import projects from '@/config/projects.json';

export default function Portfolio() {
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Initialize Locomotive Scroll (horizontal direction)
      const lscroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        
        direction: 'horizontal'
      });
      imagesLoaded(document.querySelectorAll('img'), () => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            document.body.classList.remove('loading');
          });
        });
      });
    }
  }, []);
  
// Group by domain
  const domainGroups = {};
  console.log('Loaded projects:', projects);
  projects.forEach(project => {
    project.domains.forEach(domain => {
      if (!domainGroups[domain]) domainGroups[domain] = [];
      domainGroups[domain].push(project);
    });
  });

  // Ensure 'Manufacturing' comes first
  const orderedDomains = ['Manufacturing', ...Object.keys(domainGroups).filter(d => d !== 'Manufacturing').sort()];

  let counter = 1;
  return (
    <>
      <main data-scroll-container>
        
        <div className="content">
          <div className="gallery">
            <div className="gallery__text">
              <span className="gallery__text-title" data-scroll data-scroll-speed="3">Some of our works across domains</span>
              <span className="gallery__text-inner capitalize" data-scroll data-scroll-speed="3">Manufacturing:</span></div>

            <figure className="gallery__item">
              <div className="gallery__item-img"><div className="gallery__item-imginner" style={{ backgroundImage: `url('/img/portfolio/KA.jpg')` }}></div></div>
              <figcaption className="gallery__item-caption">
                <h2 className="gallery__item-title" data-scroll data-scroll-speed="1">
                  Knowledge Assistant</h2>
                <span className="gallery__item-number">01</span>
                <p className="gallery__item-tags">
                  <span>#ai-solutions</span>
                </p>
                <a className="gallery__item-link">explore</a>
              </figcaption>
            </figure>
            <figure className="gallery__item">
              <div className="gallery__item-img"><div className="gallery__item-imginner" style={{ backgroundImage: `url('/img/portfolio/ERP.jpg')` }}></div></div>
              <figcaption className="gallery__item-caption">
                <h2 className="gallery__item-title" data-scroll data-scroll-speed="1">ERP</h2>
                <span className="gallery__item-number">02</span>
                <p className="gallery__item-tags">
                  <span>#healthcare</span>
                  <span>#legal</span>
                  <span>#education</span>
                </p>
                <a className="gallery__item-link">explore</a>
              </figcaption>
            </figure>
            <figure className="gallery__item">
              <div className="gallery__item-img"><div className="gallery__item-imginner" style={{ backgroundImage: `url('/img/portfolio/Section1.jpg')` }}></div></div>
              <figcaption className="gallery__item-caption">
                <h2 className="gallery__item-title" data-scroll data-scroll-speed="1">VMM</h2>
                <span className="gallery__item-number">03</span>
                <p className="gallery__item-tags">
                  <span>#manufacturing</span>
                </p>
                <a className="gallery__item-link">explore</a>
              </figcaption>
            </figure>
            <div className="gallery__text"><span className="gallery__text-inner capitalize" data-scroll data-scroll-speed="2">Health<br/>care</span></div>
            <figure className="gallery__item">
              <div className="gallery__item-img"><div className="gallery__item-imginner" style={{ backgroundImage: `url('/img/portfolio/KA.jpg')` }}></div></div>
              <figcaption className="gallery__item-caption">
                <h2 className="gallery__item-title" data-scroll data-scroll-speed="1">Knowledge Assistant</h2>
                <span className="gallery__item-number">01</span>
                <p className="gallery__item-tags">
                  <span>#healthcare</span>
                  <span>#legal</span>
                  <span>#education</span>
                </p>
                <a className="gallery__item-link">explore</a>
              </figcaption>
            </figure>
            <figure className="gallery__item">
              <div className="gallery__item-img"><div className="gallery__item-imginner" style={{ backgroundImage: `url('/img/portfolio/ERP.jpg')` }}></div></div>
              <figcaption className="gallery__item-caption">
                <h2 className="gallery__item-title" data-scroll data-scroll-speed="1">ERP</h2>
                <span className="gallery__item-number">02</span>
                <p className="gallery__item-tags">
                  <span>#healthcare</span>
                  <span>#legal</span>
                  <span>#education</span>
                </p>
                <a className="gallery__item-link">explore</a>
              </figcaption>
            </figure>
            <figure className="gallery__item">
              <div className="gallery__item-img"><div className="gallery__item-imginner" style={{ backgroundImage: `url('/img/portfolio/Section1.jpg')` }}></div></div>
              <figcaption className="gallery__item-caption">
                <h2 className="gallery__item-title" data-scroll data-scroll-speed="1">Section 1</h2>
                <span className="gallery__item-number">03</span>
                <p className="gallery__item-tags">
                  <span>#manufacturing</span>
                  <span>#robotics</span>
                </p>
                <a className="gallery__item-link">explore</a>
              </figcaption>
            </figure>
            <div className="gallery__text"><span data-scroll data-scroll-speed="3" className="gallery__text-inner capitalize">SAAS</span></div>
            <figure className="gallery__item">
              <div className="gallery__item-img"><div className="gallery__item-imginner" style={{ backgroundImage: `url('/img/portfolio/Section1.jpg')` }}></div></div>
              <figcaption className="gallery__item-caption">
                <h2 className="gallery__item-title" data-scroll data-scroll-speed="1">Section 1</h2>
                <span className="gallery__item-number">03</span>
                <p className="gallery__item-tags">
                  <span>#manufacturing</span>
                  <span>#robotics</span>
                </p>
                <a className="gallery__item-link">explore</a>
              </figcaption>
            </figure>
            <div className="gallery__text"><span className="gallery__text-inner" data-scroll data-scroll-speed="4">and many</span><span data-scroll data-scroll-speed="1" className="gallery__text-inner">more ....</span></div>
          </div>
        </div>
      </main>
    </>
  );
}