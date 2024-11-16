import { logoList } from "@/app/shared";
import { useTheme } from "next-themes";
import { useMemo } from "react";
import { WrapperList, List, ListItem } from "./Carousel.styles";

export const Carousel: React.FC = () => {
  const { theme } = useTheme();
  const isDark = useMemo(() => theme !== "light", [theme]);

  const logoKeys = Object.keys(logoList) as (keyof typeof logoList)[];

  return (
    <section>
      <WrapperList isDark={isDark}>
        <List>
          {[...logoKeys, ...logoKeys].map((key, index) => {
            const LogoComponent = logoList[key];
            return (
              <ListItem key={`${key}-${index}`}>
                <LogoComponent color={isDark ? "#ffffff" : "#1C012A"} />
              </ListItem>
            );
          })}
        </List>
      </WrapperList>
    </section>
  );
};