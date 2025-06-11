"use client"; 
import Link from 'next/link';
import { useEffect } from 'react';
import { initHome } from '@/utils/home';
import Image from 'next/image';
export default function Contact() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      initHome('contact');
    }
  }, []);
  return (
    <>
      <main className='contact'>
        <div className="sections sections-contact">
          			<div className="facts hidden">
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
				<nav className="sections__nav hidden">
					<button className="sections__nav-item sections__nav-item--prev">
						<svg className="icon icon--navup"><use xlinkHref="#icon-navup"></use></svg>
					</button>
					<button className="sections__nav-item sections__nav-item--next">
						<svg className="icon icon--navdown"><use xlinkHref="#icon-navdown"></use></svg>
					</button>
				</nav>
          <section className="section section-contact section--current">
            <div className="section__content">
              <h2 className="section__title">Contact&nbsp;&nbsp;Us</h2>
              <p className="section__description">
                <span className="section__description-inner">We’re always excited to hear from visionaries, innovators, and change-makers. Whether you’re looking to build a smart system, explore AI integration, or collaborate on cutting-edge robotics, our team at RoboCode51 is here to help you bring bold ideas to life.
                </span>
                <span className="section__description-inner">Reach out to us to start a meaningful conversation — whether it’s a product inquiry, strategic partnership, or just exploring possibilities. Every great solution begins with a simple hello.
                </span>
              </p>
            </div>
            <div className="section__img">
              <div className="section__img-inner" style={{backgroundImage: `url('/img/contact.jpg')`}}></div>
            </div>
            <Link href="mailto: hi@robocode51.com" className="section__more">
              <div className="section__more-inner section__more-inner--bg1">
                <span className="section__more-text">Let’s build something great</span>
                <div className="section__more-link">
                  <span className="section__more-linktext">Drop a mail</span>
                  <svg className="icon icon--arrowlong">
                    <use xlinkHref="#icon-arrowlong"></use>
                  </svg>
                </div>
              </div>
            </Link>
            <div className="section__expander"></div>
            <ul className="section__facts">
              <li className="section__facts-item">
                <h3 className="section__facts-title normalcase">Get in touch with us at<br/><a href="mailto: business@robocode51.com">E: business@robocode51.com</a><br/><a href="tel: +91-8600306965">M: +91-8600306965</a><br/>or SCAN QR:</h3>
                <Image src="/img/QR.png" className='contact-qr' alt="RoboCode51" width="150" height="150" />
              </li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}