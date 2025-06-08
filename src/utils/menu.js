// utils/menu.js
import anime from 'animejs';

export function initMenu({ menuToggle, menuOpen, menuClose, menuWrapper, menuItems }) {
  let isMenuOpen = false;
  let isMenuAnimating = false;

  if (!menuToggle) return;

  menuToggle.addEventListener('click', () => {
    if (isMenuAnimating) return;
    isMenuAnimating = true;

    const willBeOpen = !isMenuOpen;
    menuWrapper.classList.toggle('menu--open', willBeOpen);

    const toggleMenuCtrlFn = () => {
      anime.remove([menuOpen, menuClose]);
      return anime({
        targets: [menuOpen, menuClose],
        duration: 300,
        easing: 'cubicBezier(0.2, 1, 0.3, 1)',
        opacity: (target, index) => index ? (willBeOpen ? 1 : 0) : (willBeOpen ? 0 : 1),
        translateX: (target, index) => index ? (willBeOpen ? ['50%', '0%'] : '50%') : (willBeOpen ? ['0%', '-50%'] : '0%'),
      }).finished;
    };

    const toggleMenuItemsFn = () => {
      anime.remove(menuItems);
      return anime({
        targets: menuItems,
        duration: 300,
        easing: 'cubicBezier(0.2, 1, 0.3, 1)',
        delay: (target, index) => willBeOpen ? index * 80 : 0,
        translateX: willBeOpen ? ['5%', '0%'] : '0%',
        opacity: {
          value: willBeOpen ? [0, 1] : 0,
          easing: 'linear',
          delay: (target, index) => willBeOpen ? index * 80 : 0,
        },
      }).finished;
    };

    Promise.all([toggleMenuCtrlFn(), toggleMenuItemsFn()]).then(() => {
      isMenuOpen = willBeOpen;
      isMenuAnimating = false;
    });
  });
}