"use client"; // Required for components with event handlers or client-side hooks/scripts
import { useEffect } from 'react';
import { initHome } from '@/utils/home';
import Link from 'next/link';

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
                <span className="facts__toggle-text">See more domains</span>
              </span>
              <span className="facts__toggle-inner facts__toggle-inner--less">
                <svg className="icon icon--cross"><use xlinkHref="#icon-cross"></use></svg>
                <span className="facts__toggle-text">See less domains</span>
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
            <span className="sections__index-total">05</span>
          </div>
          <nav className="sections__nav">
            <button className="sections__nav-item sections__nav-item--prev">
              <svg className="icon icon--navup"><use xlinkHref="#icon-navup"></use></svg>
            </button>
            <button className="sections__nav-item sections__nav-item--next">
              <svg className="icon icon--navdown"><use xlinkHref="#icon-navdown"></use></svg>
            </button>
          </nav>
          
          {/* Section 1: AI-Solutions */}
          <section className="section section--current">
            <div className="section__content">
              <h2 className="section__title">AI-Solutions</h2>
              <p className="section__description"><span className="section__description-inner">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></p>
            </div>
            <div className="section__img">
              <div className="section__img-inner" style={{backgroundImage: 'url(/img/ai.webp)'}}></div>
            </div>
            <Link href="/portfolio" className="section__more">
              <div className="section__more-inner section__more-inner--bg1">
                <span className="section__more-text">Want to know more?</span>
                <span className="section__more-link">
                  <span className="section__more-linktext">Explore projects</span>
                  <svg className="icon icon--arrowlong"><use xlinkHref="#icon-arrowlong"></use></svg>
                </span>
              </div>
            </Link>
            <div className="section__expander"></div>
            
            <ul className="section__facts">
              <li className="section__facts-item">
                <h3 className="section__facts-title">Manufacturing</h3>
                <span className="section__facts-detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
              </li>
              <li className="section__facts-item">
                <h3 className="section__facts-title">Healthcare</h3>
                <span className="section__facts-detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
              </li>
              <li className="section__facts-item">
                <h3 className="section__facts-title">Legal</h3>
                <span className="section__facts-detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
              </li>
              <li className="section__facts-item">
                <h3 className="section__facts-title">Fintech</h3>
                <span className="section__facts-detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
              </li>
              <li className="section__facts-item">
                <h3 className="section__facts-title">EdTech</h3>
                <span className="section__facts-detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
              </li>
              <li className="section__facts-item">
                <h3 className="section__facts-title">Heritage</h3>
                <span className="section__facts-detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
              </li>
            </ul>
          </section>

          {/* Section 2: Robotics */}
          <section className="section">
            <div className="section__content">
              <h2 className="section__title">Robotics</h2>
              <p className="section__description"><span className="section__description-inner">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></p>
            </div>
            <div className="section__img">
              <div className="section__img-inner" style={{backgroundImage: 'url(/img/roboticarm.jpg)'}}></div>
            </div>
            <Link href="/portfolio" className="section__more">
              <div className="section__more-inner section__more-inner--bg1">
                <span className="section__more-text">Want to know more?</span>
                <span className="section__more-link">
                  <span className="section__more-linktext">Explore projects</span>
                  <svg className="icon icon--arrowlong"><use xlinkHref="#icon-arrowlong"></use></svg>
                </span>
              </div>
            </Link>
            <div className="section__expander"></div>
            
            <ul className="section__facts">
              <li className="section__facts-item">
                <h3 className="section__facts-title">Manufacturing</h3>
                <span className="section__facts-detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
              </li>
              <li className="section__facts-item">
                <h3 className="section__facts-title">Healthcare</h3>
                <span className="section__facts-detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
              </li>
              <li className="section__facts-item">
                <h3 className="section__facts-title">Legal</h3>
                <span className="section__facts-detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
              </li>
              <li className="section__facts-item">
                <h3 className="section__facts-title">Fintech</h3>
                <span className="section__facts-detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
              </li>
              <li className="section__facts-item">
                <h3 className="section__facts-title">EdTech</h3>
                <span className="section__facts-detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
              </li>
              <li className="section__facts-item">
                <h3 className="section__facts-title">Heritage</h3>
                <span className="section__facts-detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
              </li>
            </ul>
          </section>

          {/* Section 3: SAAS */}
          <section className="section">
            <div className="section__content">
              <h2 className="section__title">SAAS</h2>
              <p className="section__description"><span className="section__description-inner">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></p>
            </div>
            <div className="section__img">
              <div className="section__img-inner" style={{backgroundImage: 'url(/img/saas.webp)'}}></div>
            </div>
            <Link href="/portfolio" className="section__more">
              <div className="section__more-inner section__more-inner--bg1">
                <span className="section__more-text">Want to know more?</span>
                <span className="section__more-link">
                  <span className="section__more-linktext">Explore projects</span>
                  <svg className="icon icon--arrowlong"><use xlinkHref="#icon-arrowlong"></use></svg>
                </span>
              </div>
            </Link>
            <div className="section__expander"></div>
            
            <ul className="section__facts">
              <li className="section__facts-item">
                <h3 className="section__facts-title">Manufacturing</h3>
                <span className="section__facts-detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
              </li>
              <li className="section__facts-item">
                <h3 className="section__facts-title">Healthcare</h3>
                <span className="section__facts-detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
              </li>
              <li className="section__facts-item">
                <h3 className="section__facts-title">Legal</h3>
                <span className="section__facts-detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
              </li>
              <li className="section__facts-item">
                <h3 className="section__facts-title">Fintech</h3>
                <span className="section__facts-detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
              </li>
              <li className="section__facts-item">
                <h3 className="section__facts-title">EdTech</h3>
                <span className="section__facts-detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
              </li>
              <li className="section__facts-item">
                <h3 className="section__facts-title">Heritage</h3>
                <span className="section__facts-detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
              </li>
            </ul>
          </section>

          {/* Section 4: Branding */}
          <section className="section">
            <div className="section__content">
              <h2 className="section__title">Branding</h2>
              <p className="section__description"><span className="section__description-inner">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></p>
            </div>
            <div className="section__img">
              <div className="section__img-inner" style={{backgroundImage: 'url(/img/branding.jpg)'}}></div> {/* Assuming this is a placeholder and should be a unique IOT image */}
            </div>
                       <Link href="/portfolio" className="section__more">
              <div className="section__more-inner section__more-inner--bg1">
                <span className="section__more-text">Want to know more?</span>
                <span className="section__more-link">
                  <span className="section__more-linktext">Explore projects</span>
                  <svg className="icon icon--arrowlong"><use xlinkHref="#icon-arrowlong"></use></svg>
                </span>
              </div>
            </Link>
            <div className="section__expander"></div>
            
            <ul className="section__facts">
              <li className="section__facts-item">
                <h3 className="section__facts-title">Manufacturing</h3>
                <span className="section__facts-detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
              </li>
              <li className="section__facts-item">
                <h3 className="section__facts-title">Healthcare</h3>
                <span className="section__facts-detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
              </li>
              <li className="section__facts-item">
                <h3 className="section__facts-title">Legal</h3>
                <span className="section__facts-detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
              </li>
              <li className="section__facts-item">
                <h3 className="section__facts-title">Fintech</h3>
                <span className="section__facts-detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
              </li>
              <li className="section__facts-item">
                <h3 className="section__facts-title">EdTech</h3>
                <span className="section__facts-detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
              </li>
              <li className="section__facts-item">
                <h3 className="section__facts-title">Heritage</h3>
                <span className="section__facts-detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
              </li>
            </ul>
          </section>

            {/* Section 5: HealthCare */}
          <section className="section">
            <div className="section__content">
              <h2 className="section__title">HealthCare</h2>
              <p className="section__description"><span className="section__description-inner">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></p>
            </div>
            <div className="section__img">
              <div className="section__img-inner" style={{backgroundImage: 'url(/img/ai.webp)'}}></div> {/* Assuming this is a placeholder and should be a unique IOT image */}
            </div>
                       <Link href="/portfolio" className="section__more">
              <div className="section__more-inner section__more-inner--bg1">
                <span className="section__more-text">Want to know more?</span>
                <span className="section__more-link">
                  <span className="section__more-linktext">Explore projects</span>
                  <svg className="icon icon--arrowlong"><use xlinkHref="#icon-arrowlong"></use></svg>
                </span>
              </div>
            </Link>
            <div className="section__expander"></div>
            
            <ul className="section__facts">
              <li className="section__facts-item">
                <h3 className="section__facts-title">Manufacturing</h3>
                <span className="section__facts-detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
              </li>
              <li className="section__facts-item">
                <h3 className="section__facts-title">Healthcare</h3>
                <span className="section__facts-detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
              </li>
              <li className="section__facts-item">
                <h3 className="section__facts-title">Legal</h3>
                <span className="section__facts-detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
              </li>
              <li className="section__facts-item">
                <h3 className="section__facts-title">Fintech</h3>
                <span className="section__facts-detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
              </li>
              <li className="section__facts-item">
                <h3 className="section__facts-title">EdTech</h3>
                <span className="section__facts-detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
              </li>
              <li className="section__facts-item">
                <h3 className="section__facts-title">Heritage</h3>
                <span className="section__facts-detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}