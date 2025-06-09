"use client";
import React from 'react';
import imagesLoaded from 'imagesloaded';
import { useEffect } from 'react';
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
  projects.forEach(project => {
    project.domains.forEach(domain => {
      if (!domainGroups[domain]) domainGroups[domain] = [];
      domainGroups[domain].push(project);
    });
  });

  // Ensure 'Manufacturing' comes first
  const orderedDomains = ['Manufacturing', ...Object.keys(domainGroups).filter(d => d !== 'Manufacturing').sort()];
  console.log('orderedDomains:', orderedDomains);
  let counter = 1;
  return (
    <>
      <main data-scroll-container>
        
        <div className="content">
       <div className="gallery">
  {orderedDomains.map((domain, i) => (
    <React.Fragment key={domain}>
      {i !== 0 ? (
        <div className="gallery__text">
          <span className="gallery__text-inner capitalize" data-scroll data-scroll-speed="2">
            {domain} <svg className="icon icon--arrowlong"><use xlinkHref="#icon-arrowlong"></use></svg>
          </span>
        </div>
      ) : (
        <div className="gallery__text">
          <span className="gallery__text-title" data-scroll data-scroll-speed="3">
            Some of our works across domains:
          </span>
          <span className="gallery__text-inner capitalize" data-scroll data-scroll-speed="2">
            {domain} <svg className="icon icon--arrowlong"><use xlinkHref="#icon-arrowlong"></use></svg>
          </span>
        </div>
      )}

      {domainGroups[domain].map((project, j) => (
        <figure className="gallery__item" key={`${project.project_title}-${j}`}>
          <div className="gallery__item-img">
            <div
              className="gallery__item-imginner"
              style={{ backgroundImage: `url('${project.project_image}')` }}
            ></div>
          </div>
          <figcaption className="gallery__item-caption">
            <h2 className="gallery__item-title" data-scroll data-scroll-speed="1">
              {project.project_title}
            </h2>
            <span className="gallery__item-number">
              {String(counter++).padStart(2, '0')}
            </span>
            <p className="gallery__item-tags">
              {project.capabilities.map(cap => (
                <span key={cap}>#{cap.toLowerCase().replace(/\s+/g, '-')}</span>
              ))}
            </p>
            <a className="gallery__item-link">explore</a>
          </figcaption>
        </figure>
      ))}
    </React.Fragment>
  ))}

  <div className="gallery__text">
    <span className="gallery__text-inner" data-scroll data-scroll-speed="4">and many</span>
    <span data-scroll data-scroll-speed="1" className="gallery__text-inner">more ....</span>
  </div>
</div>
        </div>
      </main>
    </>
  );
}