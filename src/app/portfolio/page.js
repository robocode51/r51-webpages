"use client";
import React, { useEffect, useState } from 'react';
import imagesLoaded from 'imagesloaded';
import '@/css/portfolioBase.css';
import '@/css/portfolio.css';
import projects from '@/config/projects.json';
import ProjectOverlay from '@/components/ProjectOverlay';

export default function Portfolio() {
useEffect(() => {
  if (typeof window !== 'undefined') {
    const init = async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;

      const isMobile = window.innerWidth <= 768;

      if (!isMobile) {
        new LocomotiveScroll({
          el: document.querySelector('[data-scroll-container]'),
          smooth: true,
          direction: 'horizontal',
        });
      }

      imagesLoaded(document.querySelectorAll('img'), () => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            document.body.classList.remove('loading');
          });
        });
      });
    };

    init();
  }
}, []);

  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 }); // default to 0

const handleExplore = (project, e) => {
  const rect = e.target.getBoundingClientRect();
  const scrollY = window.scrollY || document.documentElement.scrollTop;
  const scrollX = window.scrollX || document.documentElement.scrollLeft;

  const isMobile = window.innerWidth <= 768;

  const x = rect.left + rect.width / 2 + (isMobile ? 0 : scrollX);
  const y = rect.top + rect.height / 2 + (isMobile ? 0 : scrollY);

  setButtonPosition({ x, y });
  setActiveProject(project);
  setIsOverlayOpen(true);
};

  // Group by domain
  const domainGroups = {};
  projects.forEach(project => {
    project.domains.forEach(domain => {
      if (!domainGroups[domain]) domainGroups[domain] = [];
      domainGroups[domain].push(project);
    });
  });

  const orderedDomains = ['Manufacturing', ...Object.keys(domainGroups).filter(d => d !== 'Manufacturing').sort()];
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
                      {domain} <svg className="icon icon--right"><use xlinkHref="#icon-right" /></svg>
                    </span>
                  </div>
                ) : (
                  <div className="gallery__text">
                    <span className="gallery__text-title" data-scroll data-scroll-speed="3">
                      Some of our works across domains:
                    </span>
                    <span className="gallery__text-inner capitalize" data-scroll data-scroll-speed="2">
                      {domain} <svg className="icon icon--right"><use xlinkHref="#icon-right" /></svg>
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
                      <span className="gallery__item-number">
                        {String(counter++).padStart(2, '0')}
                      </span>
                      <h2 className="gallery__item-title" data-scroll data-scroll-speed="1">
                        {project.project_title}
                      </h2>
                      <p className="gallery__item-tags">
                        {project.capabilities.map(cap => (
                          <span key={cap}>#{cap.toLowerCase().replace(/\s+/g, '-')}</span>
                        ))}
                      </p>
                      <a
                        className="gallery__item-link"
                        onClick={(e) => handleExplore(project, e)}
                      >
                        explore
                      </a>
                    </figcaption>
                  </figure>
                ))}
              </React.Fragment>
            ))}

            <div className="gallery__text more">
              <span className="gallery__text-inner" data-scroll data-scroll-speed="4">and many</span>
              <span data-scroll data-scroll-speed="1" className="gallery__text-inner">more ....</span>
            </div>
          </div>
        </div>
      </main>

      <ProjectOverlay
        isOpen={isOverlayOpen}
        onClose={() => setIsOverlayOpen(false)}
        title={activeProject?.project_title || ''}
        description={activeProject?.detailed_description || ''}
        image={activeProject?.project_image || ''}
        position={buttonPosition}
      />
    </>
  );
}