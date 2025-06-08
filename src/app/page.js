"use client"; // Required for components with event handlers or client-side hooks/scripts
import { useEffect } from 'react';
import Image from 'next/image'; // For Next.js optimized images
import { initHome } from '@/app/utils/home';

export default function HomePage() {
  useEffect(() => {
      initHome();
  }, []);

  return (
    <>
      <main>
        <div className="sections">
          <header className="sections__header">
            <h1 className="title">
              {/* Use Next/Image for optimized image loading */}
              <Image 
                src="/img/logoRC51.png" 
                alt="RoboCode Ventures Logo" 
                width={180} // Provide appropriate width
                height={60} // Provide appropriate height
                style={{ width: 'auto', height: '60px' }} // Maintain original styling if needed
                priority // If it's LCP
              />
            </h1>
          </header>
          <nav className="menu">
            <ul className="menu__inner">
              <li className="menu__item"><a className="menu__item-link" href="#">Home</a></li>
              <li className="menu__item"><a className="menu__item-link" href="#">Portfolio</a></li>
              <li className="menu__item"><a className="menu__item-link" href="#">Team</a></li>
              <li className="menu__item"><a className="menu__item-link" href="#">Contact Us</a></li>
            </ul>
            <div className="menu__toggle">
              <span className="menu__toggle-inner menu__toggle-inner--open">
                <svg className="icon icon--menu"><use xlinkHref="#icon-menu"></use></svg>
              </span>
              <span className="menu__toggle-inner menu__toggle-inner--close">
                <svg className="icon icon--close"><use xlinkHref="#icon-close"></use></svg>
              </span>
            </div>
          </nav>
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
            <span className="sections__index-total">07</span>
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
            <div className="section__more">
              <div className="section__more-inner section__more-inner--bg1">
                <span className="section__more-text">Want to know more?</span>
                <a href="#" className="section__more-link">
                  <span className="section__more-linktext">Explore projects</span>
                  <svg className="icon icon--arrowlong"><use xlinkHref="#icon-arrowlong"></use></svg>
                </a>
              </div>
            </div>
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
            <div className="section__more">
              <div className="section__more-inner section__more-inner--bg2">
                <span className="section__more-text">Want to know more?</span>
                <a href="#" className="section__more-link">
                  <span className="section__more-linktext">Explore projects</span>
                  <svg className="icon icon--arrowlong"><use xlinkHref="#icon-arrowlong"></use></svg>
                </a>
              </div>
            </div>
            <div className="section__expander"></div>
            <ul className="section__facts">
              <li className="section__facts-item">
                <h3 className="section__facts-title">Legal</h3>
                <span className="section__facts-detail">Lorem ipsum dolor sit amet</span>
              </li>
              <li className="section__facts-item">
                <h3 className="section__facts-title">Healthcare</h3>
                <span className="section__facts-detail">Lorem ipsum dolor sit amet</span>
              </li>
              <li className="section__facts-item">
                <h3 className="section__facts-title">Manufacturing</h3>
                <span className="section__facts-detail">Lorem ipsum dolor sit amet</span>
              </li>
              <li className="section__facts-item section__facts-item--clickable" data-gallery="gallery2">
                <div className="section__facts-img">
                  <img src="/img/thumb2.jpg" alt="Some image"/> {/* Consider Next/Image here too */}
                  <svg className="icon icon--grid"><use xlinkHref="#icon-grid"></use></svg>
                </div>
                <h3 className="section__facts-title">Our best projects</h3>
                <span className="section__facts-detail">A collection of Projects</span>
              </li>
            </ul>
            <div className="section__gallery" id="gallery2">
              <h3 className="section__gallery-item section__gallery-item--title">Our best projects</h3>
              <a className="section__gallery-item" href="#"><img src="/img/thumb5.jpg" alt="Some image"/></a>
              <a className="section__gallery-item" href="#"><img src="/img/thumb6.jpg" alt="Some image"/></a>
              <a className="section__gallery-item" href="#"><img src="/img/thumb1.jpg" alt="Some image"/></a>
              <a className="section__gallery-item" href="#"><img src="/img/thumb2.jpg" alt="Some image"/></a>
              <a className="section__gallery-item" href="#"><img src="/img/thumb3.jpg" alt="Some image"/></a>
              <a className="section__gallery-item" href="#"><img src="/img/thumb4.jpg" alt="Some image"/></a>
            </div>
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
            <div className="section__more">
              <div className="section__more-inner section__more-inner--bg3">
                <span className="section__more-text">Want to know more?</span>
                <a href="#" className="section__more-link">
                  <span className="section__more-linktext">Explore projects</span>
                  <svg className="icon icon--arrowlong"><use xlinkHref="#icon-arrowlong"></use></svg>
                </a>
              </div>
            </div>
            <div className="section__expander"></div>
            <ul className="section__facts">
              <li className="section__facts-item"><h3 className="section__facts-title">Legal</h3><span className="section__facts-detail">Lorem ipsum dolor sit amet</span></li>
              <li className="section__facts-item"><h3 className="section__facts-title">Healthcare</h3><span className="section__facts-detail">Lorem ipsum dolor sit amet</span></li>
              <li className="section__facts-item"><h3 className="section__facts-title">Manufacturing</h3><span className="section__facts-detail">Lorem ipsum dolor sit amet</span></li>
            </ul>
          </section>

          {/* Section 4: IOT */}
          <section className="section">
            <div className="section__content">
              <h2 className="section__title">IOT</h2>
              <p className="section__description"><span className="section__description-inner">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></p>
            </div>
            <div className="section__img">
              <div className="section__img-inner" style={{backgroundImage: 'url(/img/ai.webp)'}}></div> {/* Assuming this is a placeholder and should be a unique IOT image */}
            </div>
            <div className="section__more">
              <div className="section__more-inner section__more-inner--bg4">
                <span className="section__more-text">Want to know more?</span>
                <a href="#" className="section__more-link">
                  <span className="section__more-linktext">Explore projects</span>
                  <svg className="icon icon--arrowlong"><use xlinkHref="#icon-arrowlong"></use></svg>
                </a>
              </div>
            </div>
            <div className="section__expander"></div>
            <ul className="section__facts">
              <li className="section__facts-item"><h3 className="section__facts-title">Legal</h3><span className="section__facts-detail">Lorem ipsum dolor sit amet</span></li>
              <li className="section__facts-item"><h3 className="section__facts-title">Healthcare</h3><span className="section__facts-detail">Lorem ipsum dolor sit amet</span></li>
              <li className="section__facts-item"><h3 className="section__facts-title">Manufacturing</h3><span className="section__facts-detail">Lorem ipsum dolor sit amet</span></li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}