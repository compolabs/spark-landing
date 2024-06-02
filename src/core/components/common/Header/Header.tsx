/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";

import theme from "@/core/styles/theme";
import { useMobileWindowWidth } from "@/core/hooks/useMobileWindowWidth";
import useMainFont from "@/core/hooks/useMainFont";
import useScrollDirection from "@/core/hooks/useScrollDirection";

import Navigation from "./Navigation";
import Logo from "../Logo";
import SimpleTradeButton from "../../LandingPage/components/SimpleTradeButton";
import SectionWrapper from "../SectionWrapper";
import MenuButton from "./MenuButton";
import Container from "../Container";

function Header() {
  const syne = useMainFont();
  const isMobile = useMobileWindowWidth();
  const [isOpenMenu, setOpenMenu] = useState<boolean>(!isMobile);
  const { scrollDirection, scrollPosition } = useScrollDirection();

  const toggleMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  useEffect(() => {
    setOpenMenu(false);
  }, [scrollDirection, isMobile]);

  return (
    <header
      css={cssStyles.header(isOpenMenu, scrollPosition !== 0, scrollDirection)}
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
    scrollPosition: boolean,
    scrollDirection: boolean | null
  ) => css`
    z-index: 1;
    width: 100%;
    min-height: 60px;
    position: fixed;
    top: 0;
    padding: ${theme.spacing.normal} 0;
    -webkit-transition:
      background 0.3s ease,
      transform 0.15s ease;
    transition:
      background 0.3s ease,
      transform 0.15s ease;

    ${isOpenMenu
      ? `border-radius: 0 0 ${theme.borderRadius.default} ${theme.borderRadius.default};`
      : null}

    ${(scrollPosition && scrollDirection) || isOpenMenu
      ? `background:${theme.colors.white.default}15; 
         backdrop-filter: blur(${theme.spacing.default});`
      : null};

    transform: translateY(
      ${scrollPosition && !scrollDirection ? "-80px" : "0"}
    );

    ${theme.media.tabletBreakPoint} {
      padding: ${theme.spacing.huge} 0;
    }
  `,
  nav: css`
    & > button {
      margin-right: calc(${theme.spacing.large} + ${theme.spacing.small});
      font-size: ${theme.text.size.tiny};

      &:last-child {
        margin-right: 0;
      }
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
