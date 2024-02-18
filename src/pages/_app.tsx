import { AppProps } from 'next/app';
import '../styles/index.css';
import { Analytics } from "@vercel/analytics/react";
import { ScreenSizeProvider } from '../lib/contexts/useScreenSizeContext';
import Meta from '../components/meta';
import Footer from '../components/footer';
import { useState, useEffect } from 'react';

import localFont from "next/font/local";
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
  const [currentDateTime, setCurrentDateTime] = useState('');
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const month = (now.getMonth() + 1).toString().padStart(2, '0');
      const day = now.getDate().toString().padStart(2, '0');
      const year = now.getFullYear().toString().substr(-2);
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      setCurrentDateTime(`${month}.${day}.${year} ${hours}.${minutes}.${seconds}`);
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <>
  <Meta />
  <ScreenSizeProvider>
    <div className={`${favorit.variable} font-mono ${monument.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
    <Analytics />
  </ScreenSizeProvider>
  </>
}