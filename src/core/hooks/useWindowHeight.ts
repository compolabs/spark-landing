import { debounce } from "lodash";
import { useLayoutEffect, useState } from "react";

export default function useWindowHeight(
  delay = 5,
  onWidthChanged?: (windowWidth: number) => void
) {
  const [height, setHeight] = useState<null | number>(null);
  const hasWindow = typeof window !== "undefined";

  useLayoutEffect(() => {
    const handleResize = () => {
      if (onWidthChanged) {
        onWidthChanged(window.innerWidth);
      } else {
        setHeight(window.innerHeight);
      }
    };
    handleResize();

    const debouncedHandleResize = debounce(handleResize, delay);

    window.addEventListener("resize", debouncedHandleResize);
    return () => window.removeEventListener("resize", debouncedHandleResize);
  }, [delay, hasWindow, onWidthChanged]);

  return height ?? 0;
}
