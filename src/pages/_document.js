import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        {/* Fixing the Script component */}
        <Script id="theme-switcher" strategy="beforeInteractive">
          {`
            // Apply dark mode based on localStorage or system preference
            if (
              localStorage.theme === 'dark' || 
              (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
            ) {
              document.documentElement.classList.add('dark');
            } else {
              document.documentElement.classList.remove('dark');
            }
          `}
        </Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
