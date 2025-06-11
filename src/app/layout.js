import { Urbanist } from 'next/font/google';
import Script from 'next/script';
import '@/css/normalize.css';
import '@/css/base.css';

import Image from 'next/image';
import MenuClientWrapper from '@/components/Menu';
import Link from 'next/link';

const urbanist = Urbanist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-urbanist',
});

export const metadata = {
  title: 'RoboCode Ventures',
  description: 'RoboCode51',
  keywords: ['RoboCode51'],
  icons: {
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" className="">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"></meta>
        {/* CSS Variable support check script */}
        <Script id="css-vars-check" strategy="beforeInteractive">
          {`
            document.documentElement.className="js";
            var supportsCssVars=function(){var e,t=document.createElement("style");return t.innerHTML="root: { --tmp-var: bold; }",document.head.appendChild(t),e=!!(window.CSS&&window.CSS.supports&&window.CSS.supports("font-weight","var(--tmp-var)")),t.parentNode.removeChild(t),e};
            if (!supportsCssVars()) {
              alert("Please view this demo in a modern browser that supports CSS Variables.");
            }
          `}
        </Script>
      </head>
      <body className={`loading ${urbanist.className}`}>
       
        {/* SVG Symbols: Ensure they are hidden by default if CSS isn't loaded */}
        <svg className="hidden" style={{ display: 'none', position: 'absolute', width: 0, height: 0 }}>
          <symbol id="icon-arrow" viewBox="0 0 24 24">
            <title>arrow</title>
            <polygon points="6.3,12.8 20.9,12.8 20.9,11.2 6.3,11.2 10.2,7.2 9,6 3.1,12 9,18 10.2,16.8 " />
          </symbol>
          <symbol id="icon-menu" viewBox="0 0 24 13">
            <title>menu</title>
            <path d="M.75 1.515h22.498a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0 0 1.5zM23.248 5.265H8.168a.75.75 0 0 0 0 1.5h15.08a.75.75 0 0 0 0-1.5zM23.248 10.514H4.322a.75.75 0 0 0 0 1.5h18.926a.75.75 0 0 0 0-1.5z" />
          </symbol>
          <symbol id="icon-dot" viewBox="0 0 24 24">
            <title>dot</title>
            <path d="M11.5 9c-.69 0-1.28.244-1.768.732A2.41 2.41 0 0 0 9 11.5c0 .69.244 1.28.732 1.767A2.409 2.409 0 0 0 11.5 14c.69 0 1.28-.244 1.768-.733A2.408 2.408 0 0 0 14 11.5c0-.69-.244-1.28-.732-1.768A2.408 2.408 0 0 0 11.5 9z" />
          </symbol>
          <symbol id="icon-cross" viewBox="0 0 24 24">
            <title>cross</title>
            <path d="M11.449 11.962l-5.1 5.099a.363.363 0 1 0 .513.512L12 12.436l5.137 5.137a.361.361 0 0 0 .513 0 .363.363 0 0 0 0-.512l-5.099-5.1 5.102-5.102a.363.363 0 1 0-.512-.513L12 11.487l-5.141-5.14a.363.363 0 0 0-.513.512l5.103 5.103z" />
          </symbol>
          <symbol id="icon-arrowlong" viewBox="0 0 32 11">
            <title>arrow-long</title>
            <path d="M27.166.183a.619.619 0 0 0-.878 0 .619.619 0 0 0 0 .878l2.735 2.735H.768a.624.624 0 0 0 0 1.248h28.254L26.287 7.77a.619.619 0 0 0 0 .878.617.617 0 0 0 .441.183c.163 0 .32-.061.442-.183l3.796-3.796a.623.623 0 0 0-.005-.878L27.166.183z" />
          </symbol>
          <symbol id="icon-close" viewBox="0 0 24 24">
            <title>close</title>
            <path d="M21 4.565L19.435 3 12 10.435 4.565 3 3 4.565 10.435 12 3 19.435 4.565 21 12 13.565 19.435 21 21 19.435 13.565 12z" />
          </symbol>
          <symbol id="icon-navup" viewBox="0 0 50 50">
            <title>navup</title>
            <path d="M20.259 28.211l5.07-5.03 5.075 5.034a.36.36 0 0 0 .51 0 .356.356 0 0 0 0-.506l-5.323-5.28a.404.404 0 0 0-.135-.084.364.364 0 0 0-.384.08l-5.324 5.28a.356.356 0 0 0 0 .506c.141.14.37.14.51 0z" />
          </symbol>
          <symbol id="icon-navdown" viewBox="0 0 50 50">
            <title>navdown</title>
            <path d="M20.259 22.43l5.07 5.03 5.075-5.034a.36.36 0 0 1 .51 0c.14.14.14.366 0 .506l-5.323 5.28a.404.404 0 0 1-.135.084.364.364 0 0 1-.384-.081l-5.324-5.28a.356.356 0 0 1 0-.505c.141-.14.37-.14.51 0z" />
          </symbol>
          <symbol id="icon-grid" viewBox="0 0 24 24">
            <title>grid</title>
            <path d="M8.982 8.982h5.988v5.988H8.982zM0 0h5.988v5.988H0zM8.982 17.965h5.988v5.988H8.982zM0 8.982h5.988v5.988H0zM0 17.965h5.988v5.988H0zM17.965 0h5.988v5.988h-5.988zM8.982 0h5.988v5.988H8.982zM17.965 8.982h5.988v5.988h-5.988zM17.965 17.965h5.988v5.988h-5.988z" />
          </symbol>
          <symbol id="icon-right" viewBox="0 0 24 24">
            <title>right</title>
          <path d="M6 9h6V5l7 7-7 7v-4H6V9z"/>
          </symbol>
          <symbol id="icon-call" viewBox="0 0 24 24">
            <title>call</title>
            <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/>
          </symbol>
        </svg>
        <header className="sections__header">
          <a href="/" className="title">
            <Image
              src="/img/logoRC51.png"
              alt="RoboCode Ventures Logo"
              width={180}
              height={60}
              style={{ width: 'auto', height: '60px' }}
              priority
            />
          </a>
          <MenuClientWrapper />
        </header>
        <a href="tel: +91-8600306965" className='floating-contact'> <svg className="icon icon--call"><use xlinkHref="#icon-call"></use></svg></a>
        {children}
      </body>
    </html>
  );
}