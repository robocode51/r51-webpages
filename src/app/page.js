"use client";
import { useEffect } from 'react';
import { initHome } from '@/utils/home';
import Link from 'next/link';
import content from '@/config/home.json';

export default function HomePage() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      initHome();
    }
  }, []);

  return (
    <>
      <main>
        <div className="sections">
          <div className="facts">
            <div className="facts__toggle">
              <span className="facts__toggle-inner facts__toggle-inner--more">
                <svg className="icon icon--dot"><use xlinkHref="#icon-dot"></use></svg>
                <span className="facts__toggle-text">{content.common.factsToggle.moreDomains}</span>
              </span>
              <span className="facts__toggle-inner facts__toggle-inner--less">
                <svg className="icon icon--cross"><use xlinkHref="#icon-cross"></use></svg>
                <span className="facts__toggle-text">{content.common.factsToggle.lessDomains}</span>
              </span>
            </div>
            <button className="button-contentclose">
              <svg className="icon icon--close"><use xlinkHref="#icon-close"></use></svg>
            </button>
          </div>
          <div className="sections__index">
            <span className="sections__index-current">
              <span className="sections__index-inner">01</span>
            </span>
            <span className="sections__index-total">{"0" + Object.keys(content.home).length}</span>
            
          </div>
          <nav className="sections__nav">
            <button className="sections__nav-item sections__nav-item--prev">
              <svg className="icon icon--navup"><use xlinkHref="#icon-navup"></use></svg>
            </button>
            <button className="sections__nav-item sections__nav-item--next">
              <svg className="icon icon--navdown"><use xlinkHref="#icon-navdown"></use></svg>
            </button>
          </nav>
          
          {Object.entries(content.home).map(([key, value]) => {
            const sectionContent = value;
            if (!sectionContent) return null; // Handle cases where data might be missing

            const isCurrent = key === 0 ? " section--current" : ""; // Only first section is 'current'
            const moreLinkData = content.common.moreLink; // Use common link data

            return (
              <section key={sectionContent.id || key} className={`section${isCurrent}`}>
                <div className="section__content">
                  <h2 className="section__title">{sectionContent.title}</h2>
                  <p className="section__description">
                    <span className="section__description-inner">{sectionContent.description}</span>
                  </p>
                </div>

                <div className="section__img">
                  {sectionContent.image?.url && (
                    <div
                      className="section__img-inner"
                      style={{ backgroundImage: `url(${sectionContent.image.url})` }}
                    ></div>
                  )}
                </div>

                {moreLinkData && (
                  <Link href={moreLinkData.href} className="section__more">
                    <div className="section__more-inner section__more-inner--bg1">
                      <span className="section__more-text">{moreLinkData.text}</span>
                      <span className="section__more-link">
                        <span className="section__more-linktext">{moreLinkData.exploreText}</span>
                        <svg className="icon icon--arrowlong">
                          <use xlinkHref="#icon-arrowlong"></use>
                        </svg>
                      </span>
                    </div>
                  </Link>
                )}

                <div className="section__expander"></div>
                
                {sectionContent.facts?.length > 0 && (
                  <ul className="section__facts">
                    {sectionContent.facts.map((fact, factIndex) => (
                      <li key={`${sectionContent.id}-${factIndex}`} className="section__facts-item">
                        <h3 className="section__facts-title">{fact.title}</h3>
                        <span className="section__facts-detail">{fact.detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            );
          })}
        </div>
      </main>
    </>
  );
}