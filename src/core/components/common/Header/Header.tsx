/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";

import theme from "@/core/styles/theme";
import { useMobileWindowWidth } from "@/core/hooks/useMobileWindowWidth";
import useMainFont from "@/core/hooks/useMainFont";
import useScrollDirection from "@/core/hooks/useScrollDirection";
import { convertPxToRem } from "@/core/utils/convertPxToRem";
import useWindowHeight from "@/core/hooks/useWindowHeight";

import Navigation from "./Navigation";
import Logo from "../Logo";
import SimpleTradeButton from "../../LandingPage/components/SimpleTradeButton";
import SectionWrapper from "../SectionWrapper";
import MenuButton from "./MenuButton";
import Container from "../Container";

function Header() {
  const syne = useMainFont();
  const isMobile = useMobileWindowWidth();
  const windowHeight = useWindowHeight();
  const [isOpenMenu, setOpenMenu] = useState<boolean>(!isMobile);
  const { scrollDirection, scrollPosition } = useScrollDirection();
  const isPreviewEnded =
    (isMobile ? windowHeight / 2 : windowHeight / 1.4) < scrollPosition;
  const isHeaderTransparent =
    (isOpenMenu && !isPreviewEnded) || !!scrollPosition;
  const isHeaderHidden = isPreviewEnded && !scrollDirection;

  const toggleMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  useEffect(() => {
    setOpenMenu(false);
  }, [scrollDirection, isMobile, scrollPosition]);

  return (
    <header
      css={cssStyles.header(isOpenMenu, isHeaderTransparent, isHeaderHidden)}
      className={syne}
    >
      <SectionWrapper disableMaxWidth styles={cssStyles.wrapper(isOpenMenu)}>
        <Logo isMobile={isMobile} />
        <Navigation styles={cssStyles.nav} disableOnMobile />
        <Container>
          <SimpleTradeButton title="Trade" />
          <MenuButton isOpenMenu={isOpenMenu} setOpenMenu={toggleMenu} />
        </Container>
      </SectionWrapper>
      {isOpenMenu && <Navigation styles={cssStyles.mobileNav} />}
    </header>
  );
}

const cssStyles = {
  header: (
    isOpenMenu: boolean,
    isHeaderTransparent: boolean,
    isHeaderHidden: boolean
  ) => css`
    z-index: 100;
    width: 100%;
    min-height: 3.75rem;
    position: fixed;
    top: 0;
    padding: ${theme.spacing.normal} 0;
    transition:
      transform 0.15s linear,
      background 0.15s linear,
      backdrop-filter 0.15s linear;

    ${isOpenMenu
      ? `border-radius: 0 0 ${theme.borderRadius.default} ${theme.borderRadius.default};`
      : null}

    ${isHeaderTransparent || isOpenMenu
      ? `background:${theme.colors.white.default}15; 
         backdrop-filter: blur(${theme.spacing.medium});`
      : null};

    transform: translateY(${isHeaderHidden ? convertPxToRem(-130) : "0"});

    ${theme.media.tabletBreakPoint} {
      padding: ${theme.spacing.huge} 0;
    }
  `,
  nav: css`
    & > button {
      transform: translateY(${theme.spacing.small});
      margin-right: calc(${theme.spacing.large} + ${theme.spacing.small});
      font-size: ${theme.text.size.tiny};

      &:last-child {
        margin-right: 0;
      }
    }

    &> button: after  {
      content: "";
      background: ${theme.colors.green[50]};
      display: block;
      width: ${theme.spacing.custom[10]};
      height: ${theme.spacing.custom[10]};
      white-space: nowrap;
      transition: opacity 0.2s ease-out;
      opacity: 0;
      margin: 0 auto;
      transform: translateY(${theme.spacing.default});
      border-radius: ${theme.borderRadius.default};
      box-shadow: 0px 0px 8px ${theme.colors.green[50]};
    }

    &> button: hover: after  {
      opacity: 1;
    }
  `,
  mobileNav: css`
    display: flex;
    flex-direction: column;
    align-items: center;

    & > button {
      font-size: ${theme.text.size.tiny};
      font-weight: ${theme.text.weight.regular};
      line-height: ${theme.spacing.large};
      background: ${theme.colors.black.default};
      background: none;
      color: ${theme.colors.white.default};
      padding: ${theme.spacing.unit};
      font-size: ${theme.text.size.body};
      border: none;
      cursor: pointer;
      margin-bottom: ${theme.spacing.custom[20]};
    }
  `,

  wrapper: (isOpenMenu: boolean) => css`
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${isOpenMenu ? theme.spacing.custom[40] : null};
  `,
};

export default Header;
