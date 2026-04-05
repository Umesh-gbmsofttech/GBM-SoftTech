// @ts-nocheck
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // This moves the window to the top-left corner (0,0)
    window.scrollTo(0, 0);
  }, [pathname]); // This triggers every time the URL path changes

  return null; // This component doesn't render anything visual
};
