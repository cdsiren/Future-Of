import { AppProps } from 'next/app';
import '../styles/index.css';
import { Analytics } from "@vercel/analytics/react";
import { ScreenSizeProvider } from '../lib/contexts/useScreenSizeContext';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <ScreenSizeProvider>
      <Component {...pageProps} />
      <Analytics />
    </ScreenSizeProvider>
  </>
}