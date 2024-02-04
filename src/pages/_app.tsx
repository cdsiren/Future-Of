import { AppProps } from 'next/app';
import '../styles/index.css';
import { Analytics } from "@vercel/analytics/react";
import { ScreenSizeProvider } from '../lib/contexts/useScreenSizeContext';

import localFont from "next/font/local";
// export const favoritBoldItalic = localFont({
//   src: "../../public/font/ABCFavoritMono-BoldItalic-Trial.woff2",
//   variable: "--font-favorit-bold-italic",
// });
// export const favoritBook = localFont({
//   src: "/font/ABCFavoritMono-Book-Trial.woff2",
//   variable: "--font-monument",
// });
// export const favoritBookItalic = localFont({
//   src: "/font/ABCFavoritMono-BookItalic-Trial.woff2",
//   variable: "--font-monument",
// });
// export const favoritLightItalic = localFont({
//   src: "/font/ABCFavoritMono-LightItalic-Trial.woff2",
//   variable: "--font-monument",
// });
// export const favoritMediumItalic = localFont({
//   src: "/font/ABCFavoritMono-MediumItalic-Trial.woff2",
//   variable: "--font-monument",
// });

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
// export const favoritRegularItalic = localFont({
//   src: "/font/ABCFavoritMono-RegularItalic-Trial.woff2",
//   variable: "--font-monument",
// });

export default function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <ScreenSizeProvider>
      <div className={`${favorit.variable} font-mono ${monument.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
      <Analytics />
    </ScreenSizeProvider>
  </>
}