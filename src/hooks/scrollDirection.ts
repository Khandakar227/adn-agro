import { useEffect, useState } from "react";

export enum ScrollDirection {
  STILL = "still",
  UP = "up",
  DOWN = "down",
}
export type DirectionProps = {
  direction: ScrollDirection;
  postion: { y: number };
};
function useScrollDirection() {
  const [scrollDir, setScrollDir] = useState(ScrollDirection.STILL);
  const [posY, setPosY] = useState(0);

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.scrollY;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(
        scrollY > lastScrollY ? ScrollDirection.DOWN : ScrollDirection.UP
      );
      setPosY(scrollY);
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);

  return { data: {direction: scrollDir, postion: { y: posY } } as DirectionProps, setScrollDir};
}

export default useScrollDirection;
