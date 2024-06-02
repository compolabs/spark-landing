import useWindowWidth from "./useWindowWidth";
import theme from "../styles/theme";

export const useMobileWindowWidth = () => {
  const width = useWindowWidth() ?? 0;
  return theme.media.breakpoints.tabletBreakPoint > width;
};
