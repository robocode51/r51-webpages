"use client";
import Link from 'next/link';
import { useEffect } from 'react';
import { initHome } from '@/utils/home';
import Image from 'next/image';
import content from '@/config/contact.json';

export default function Contact() {
  const contactContent = content.contact;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Assuming initHome can handle different page types based on passed argument
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
                {/* Access common facts toggle text from JSON */}
                <span className="facts__toggle-text">{contactContent.factsToggle.moreDomains}</span>
              </span>
              <span className="facts__toggle-inner facts__toggle-inner--less">
                <svg className="icon icon--cross"><use xlinkHref="#icon-cross"></use></svg>
                <span className="facts__toggle-text">{contactContent.factsToggle.lessDomains}</span>
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
              <h2 className="section__title">{contactContent.title}</h2>
              <p className="section__description">
                {/* Loop through description array if it has multiple paragraphs/spans */}
                {contactContent.description.map((paragraph, index) => (
                  <span key={index} className="section__description-inner">
                    {paragraph}
                  </span>
                ))}
              </p>
            </div>
            <div className="section__img">
              {contactContent.image?.url && (
                <div
                  className="section__img-inner"
                  style={{ backgroundImage: `url('${contactContent.image.url}')` }}
                ></div>
              )}
            </div>
            {contactContent.callToAction && (
              <Link href={contactContent.callToAction.href} className="section__more">
                <div className="section__more-inner section__more-inner--bg1">
                  <span className="section__more-text">{contactContent.callToAction.text}</span>
                  <div className="section__more-link">
                    <span className="section__more-linktext">{contactContent.callToAction.linkText}</span>
                    <svg className="icon icon--arrowlong">
                      <use xlinkHref="#icon-arrowlong"></use>
                    </svg>
                  </div>
                </div>
              </Link>
            )}
            <div className="section__expander"></div>
            <ul className="section__facts">
              {contactContent.facts.map((fact, index) => (
                <li key={index} className="section__facts-item">
                  <h3 className="section__facts-title normalcase">
                    {fact.title}
                    {fact.email && (
                      <>
                        <br/><a href={`mailto: ${fact.email}`}>E: {fact.email}</a>
                      </>
                    )}
                    {fact.phone && (
                      <>
                        <br/><a href={`tel: ${fact.phone}`}>M: {fact.phone}</a>
                      </>
                    )}
                    {fact.qrText && (
                      <><br/>{fact.qrText}</>
                    )}
                  </h3>
                  {fact.qrImage && (
                    <Image
                      src={fact.qrImage.src}
                      className='contact-qr'
                      alt={fact.qrImage.alt}
                      width={fact.qrImage.width}
                      height={fact.qrImage.height}
                    />
                  )}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}