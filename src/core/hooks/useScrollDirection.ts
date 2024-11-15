import { useState, useEffect } from "react";

export default function useScrollDirection() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<boolean | null>(null);

  const handleScroll = () => {
    const currentPosition = window.scrollY;
    if (currentPosition > scrollPosition) {
      setScrollDirection(false);
    } else if (currentPosition < scrollPosition) {
      setScrollDirection(true);
    }
    setScrollPosition(currentPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollPosition]);

  return { scrollPosition, scrollDirection };
}
