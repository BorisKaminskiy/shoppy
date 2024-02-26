'use client'

import { useState, useEffect } from 'react'

interface IWindowSize {
  isDesktop: boolean
  isMobile: boolean
  width: number
  
}

export const useWindowSize = (): IWindowSize => {
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = (e: any) => {
      setWindowSize(e.target.innerWidth)
    }
        
    window.addEventListener("resize", handleResize);
       
    return () => window.removeEventListener("resize", handleResize);
  }, [])
 
  
  return {
    isDesktop: windowSize > 1000,
    isMobile: windowSize <= 1000,
    width: windowSize
  };
}