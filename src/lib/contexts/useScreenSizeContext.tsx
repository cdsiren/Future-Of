import { createContext, useContext, useState, useEffect } from 'react';
import { ScreenSizeContext } from '../../utils/types';
import { SCREEN_SIZE_TRIGGER } from '../../utils/constants';

const ScreenContext = createContext<ScreenSizeContext>({
  width: undefined,
  height: undefined,
  type: 'desktop'
});

export function ScreenSizeProvider({ children }) {
  const [screenSize, setScreenSize] = useState({
    width: undefined,
    height: undefined,
    type: 'desktop'
  });

  useEffect(() => {
    function handleResize() {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
        type: window.innerWidth <= SCREEN_SIZE_TRIGGER ? 'mobile' : 'desktop'
      });
    }

    window.addEventListener('resize', handleResize);
    
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ScreenContext.Provider value={screenSize}>
      {children}
    </ScreenContext.Provider>
  );
}

export const useScreenSize = () => useContext(ScreenContext);