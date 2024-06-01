import { debounce } from "lodash";
import { useEffect, useState } from "react";

export default function useWindowWidth(
  delay = 300,
  onWidthChanged?: (windowWidth: number) => void
) {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      if (onWidthChanged) {
        onWidthChanged(window.innerWidth);
      } else {
        setWidth(window.innerWidth);
      }
    };
    const debouncedHandleResize = debounce(handleResize, delay);
    window.addEventListener("resize", debouncedHandleResize);

    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, [delay, onWidthChanged]);

  return width;
}
