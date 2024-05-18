import { css } from "@emotion/react";
import { Syne } from "next/font/google";
import theme from "@/core/styles/theme";
import LinkButton from "./LinkButton";
import Navigation from "./Navigation";
import Logo from "./Logo";
import { externalLinks } from "@/core/constants/externalLinks";
import SimpleTradeButton from "../LandingPage/components/SimpleTradeButton";
import SectionWrapper from "./SectionWrapper";

const syne = Syne({ subsets: ["latin"] });

export const Header = () => {
  return (
    <header css={cssStyles.header} className={syne.className}>
      <SectionWrapper styles={cssStyles.wrapper}>
        <Logo />
        <Navigation />
        <SimpleTradeButton />
      </SectionWrapper>
    </header>
  );
};

const cssStyles = {
  header: css`
    position: absolute;
    top: 20px;
    width: 100%;
    transition: top 0.25s linear;
  `,
  wrapper: css`
    align-items: center;
    justify-content: space-between;
  `,
};
