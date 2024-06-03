import { debounce } from "lodash";
import { useLayoutEffect, useState } from "react";

export default function useWindowWidth(
  delay = 50,
  onWidthChanged?: (windowWidth: number) => void
) {
  const [width, setWidth] = useState<null | number>(null);
  const hasWindow = typeof window !== "undefined";

  useLayoutEffect(() => {
    const handleResize = () => {
      if (onWidthChanged) {
        onWidthChanged(window.innerWidth);
      } else {
        setWidth(window.innerWidth);
      }
    };
    handleResize();

    const debouncedHandleResize = debounce(handleResize, delay);

    window.addEventListener("resize", debouncedHandleResize);
    return () => window.removeEventListener("resize", debouncedHandleResize);
  }, [delay, hasWindow, onWidthChanged]);

  return width;
}
