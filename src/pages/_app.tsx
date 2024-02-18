import { AppProps } from 'next/app';
import '../styles/index.css';
import { Analytics } from "@vercel/analytics/react";
import { ScreenSizeProvider } from '../lib/contexts/useScreenSizeContext';
import Meta from '../components/meta';
import Footer from '../components/footer';
import { getLinks } from '../lib/sanity/getLinks';

import localFont from "next/font/local";
import { useState, useMemo } from 'react';
const favorit = localFont({
  src: [
    {
      path: '../../fonts/ABCFavoritMono-Light-Trial.woff2',
      weight: '200',
    },
    {
      path: '../../fonts/ABCFavoritMono-Regular-Trial.woff2',
      weight: '400'
    },
    {
      path: '../../fonts/ABCFavoritMono-Medium-Trial.woff2',
      weight: '600'
    },
    {
      path: '../../fonts/ABCFavoritMono-Bold-Trial.woff2',
      weight: '800'
    }
  ],
  variable: '--font-favorit'
})
export const monument = localFont({
  src: "../../fonts/EduMonumentGroteskVariable.woff2",
  variable: "--font-monument",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  const [links, setLinks] = useState([]);
  useMemo(() => {
    async function load(){
      const urls = await getLinks();
      setLinks(urls)
    }
    load();
  }, []);

  return <>
  <Meta />
  <ScreenSizeProvider>
    <div className={`${favorit.variable} font-mono ${monument.variable} font-sans`}>
      <Component {...pageProps} />
      <Footer links={links} />
    </div>
    <Analytics />
  </ScreenSizeProvider>
  </>
}