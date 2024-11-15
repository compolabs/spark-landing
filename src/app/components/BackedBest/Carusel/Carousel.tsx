import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { WrapperList, List } from "./Carousel.styles";
import { logoList } from "@/shared";
import { useTheme } from "next-themes";

export const Carousel: React.FC = () => {
  const { theme } = useTheme();
  const isDark = useMemo(() => theme !== "light", [theme]);

  const logoKeys = Object.keys(logoList) as (keyof typeof logoList)[];

  const listRef = useRef<HTMLDivElement | null>(null);
  const [listWidth, setListWidth] = useState<number>(0);
  const [innerWidth, setInnerWidth] = useState<number>(0);

  const handleResize = useCallback(() => {
    setInnerWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    if (listRef.current) {
      setListWidth(listRef.current.scrollWidth);
    }
  }, [logoKeys]);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <section>
      <WrapperList isDark={isDark}>
        <List ref={listRef} transform={listWidth - innerWidth}>
          {logoKeys.map((key) => {
            const LogoComponent = logoList[key];
            return (
              <div key={key}>
                <LogoComponent color={isDark ? "#ffffff" : "#1C012A"} />
              </div>
            );
          })}
        </List>
      </WrapperList>
    </section>
  );
};
