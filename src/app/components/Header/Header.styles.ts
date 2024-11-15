import styled from "@emotion/styled";
import Link from "next/link";

export const HeaderWrapper = styled.header<{ isDark: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 72px;
  width: 100vw;
  z-index: 100;
`;

export const Backdrop = styled.div<{ isDark: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  height: 72px;
  width: 100vw;
  backdrop-filter: blur(30px);
  z-index: 101;
`;

export const Container = styled.div<{ isDark: boolean }>`
  position: relative;
  z-index: 102;

  //max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 680px) {
    padding: 0 8px;
  }
`;

export const LeftSection = styled.div<{ size: "large" | "small" }>`
  display: flex;
  align-items: center;
  height: 32px;
  gap: 40px;

  @media screen and (max-width: 680px) {
    gap: 20px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 10px;

  @media screen and (max-width: 680px) {
    display: none;
  }
`;

export const NavItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;

export const NavButton = styled.button<{ isActive?: boolean }>`
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  transition: color 0.3s;
  line-height: 20px;
  padding: 6px 12px;
  color: inherit;
  display: flex;
  align-items: center;
  gap: 4px;
  background: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    color: #8a7cff;
  }

  ${({ isActive }) =>
    isActive &&
    `
    color: #8a7cff;
  `}
`;

export const NavLink = styled(Link)<{ isActive?: boolean }>`
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  transition: color 0.3s;
  line-height: 20px;
  padding: 6px 12px;
  color: inherit;
  display: flex;
  align-items: center;
  gap: 4px;
  background: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    color: #8a7cff;
  }

  ${({ isActive }) =>
    isActive &&
    `
    color: #8a7cff;
  `}
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media screen and (max-width: 680px) {
    .theme-toggle {
      display: none;
    }
  }
`;

export const ThemeToggle = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2ch;
  flex-direction: column;
`;

export const TradeNowButton = styled(Link)`
  background: #8a7cff;
  color: white;
  padding: 10px 20px;
  border-radius: 20px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #7a6aff;
  }
`;

export const BurgerButton = styled.button<{ isDark: boolean }>`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  height: 36px;
  width: 36px;
  border: 1px solid ${({ isDark }) => (!isDark ? "#1C012A" : "#FFFFFF")};
  background: ${({ isDark }) => (!isDark ? "#FFFFFF" : "rgba(23, 23, 23, 1)")};
  position: relative;
  z-index: 1001;

  @media screen and (max-width: 680px) {
    display: flex;
    align-items: center;
    justify-content: center;
    order: 2;
  }
`;
