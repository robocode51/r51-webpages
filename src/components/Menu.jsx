'use client';

import { useEffect } from 'react';
import { initMenu } from '../utils/menu';
import Link from 'next/link';
import Cursor from '../utils/cursor';

export default function MenuClientWrapper() {
  useEffect(() => {
    const menuToggle = document.querySelector('.menu__toggle');
    const menuOpen = document.querySelector('.menu__toggle-inner--open');
    const menuClose = document.querySelector('.menu__toggle-inner--close');
    const menuWrapper = document.querySelector('.menu');
    const menuItems = document.querySelectorAll('.menu__item');

    initMenu({
      menuToggle,
      menuOpen,
      menuClose,
      menuWrapper,
      menuItems
    });

    // Initialize custom cursor
    const cursor = new Cursor(document.querySelector('.cursor'));

    // Mouse effects on all links and others
    [...document.querySelectorAll('a')].forEach(link => {
      link.addEventListener('mouseenter', () => cursor.enter());
      link.addEventListener('mouseleave', () => cursor.leave());
    });

  }, []);

  return (
    <>
      <svg className="cursor" width="20" height="20" viewBox="0 0 20 20">
        <circle className="cursor__inner" cx="10" cy="10" r="5" />
      </svg>

      <nav className="menu">
        <ul className="menu__inner">
          <li className="menu__item"><a className="menu__item-link" href="/">Home</a></li>
          <li className="menu__item"><Link className="menu__item-link" href="/portfolio">Portfolio</Link></li>
          {/* <li className="menu__item"><a className="menu__item-link" href="#">Team</a></li> */}
          <li className="menu__item"><a className="menu__item-link" href="/contact">Contact Us</a></li>
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
    </>
  );
}