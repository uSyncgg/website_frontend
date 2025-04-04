// useNavHeight.js or useNavHeight.ts
import { useEffect, useState } from "react";

export default function useNavHeight() {
  const [navHeight, setNavHeight] = useState(4); // Default to 4rem

  useEffect(() => {
    const updateNavHeight = () => {
      const navbar = document.querySelector(".navbar");
      if (navbar) {
        const navHeightInPx = navbar.offsetHeight;
        const rootFontSize = parseFloat(
          getComputedStyle(document.documentElement).fontSize
        );
        const navHeightInRem = navHeightInPx / rootFontSize;
        setNavHeight(navHeightInRem);
        document.documentElement.style.setProperty(
          "--nav-height",
          `${navHeightInRem}rem`
        );
      }
    };

    updateNavHeight();
    window.addEventListener("resize", updateNavHeight);
    return () => window.removeEventListener("resize", updateNavHeight);
  }, []);

  return navHeight;
}
