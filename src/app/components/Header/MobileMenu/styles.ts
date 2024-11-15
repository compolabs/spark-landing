import styled from "@emotion/styled";
import Link from "next/link";

interface ThemeProps {
  isDark: boolean;
}

export const RootContainer = styled.div<{ isDark: boolean }>`
  display: flex;
  width: 100%;
  height: fit-content;
  background: ${({ isDark }) =>
    isDark
      ? "var(--Landing-Gradients-holo-dark, linear-gradient(128.85deg, #6B0D97 0%, #000000 33%, rgba(107, 13, 151, 0.956863) 66%, #000000 100%))"
      : "var(--Landing-Gradients-holo, linear-gradient(129deg, #fac8ff 0%, #c8ffee 33%, #e9ff44 66%, #35ebff 100%))"};
  animation: gradientAnimation 3s infinite alternate;
  background-size: 200% 200%;
`;

export const Container = styled.nav<ThemeProps>`
  margin-top: 4px;
  display: flex;
  width: 100%;
  height: fit-content;
  flex-direction: column;
  padding: 8px;
  background: ${({ isDark }) =>
    isDark ? "rgba(20, 20, 20, 1)" : "rgba(255, 255, 255, 1)"};
  color: ${({ isDark }) => (isDark ? "#FFFFFF" : "#1C012A")};
  font-family: "Syne", sans-serif;
  * {
    border: unset;
    font-family: inherit;
  }
`;

export const MenuSection = styled.div<ThemeProps>`
  display: flex;
  width: 100%;
  flex-direction: column;
  color: ${({ isDark }) => (isDark ? "#FFFFFF" : "#1C012A")};
  font-weight: 500;
  font-size: 16px;
  position: relative;
`;

export const StyledMenuButton = styled(Link)<ThemeProps & { isHome: boolean }>`
  border-radius: 4px;
  display: flex;
  height: 43px;
  width: 100%;
  align-items: center;
  gap: 12px;
  justify-content: flex-start;
  padding: 12px;
  margin-top: 8px;
  background: ${({ isDark }) =>
    isDark ? "rgba(20, 20, 20, 0.8)" : "rgba(247, 247, 247, 1)"};
  color: ${({ isDark }) => (isDark ? "#FFFFFF" : "#1C012A")};
  transition: background-color 0.2s ease;
  text-decoration: none;
  cursor: ${({ isHome }) => (isHome ? "default" : "pointer")};
  &:hover {
    background: ${({ isDark }) => (isDark ? "#333333" : "#EFEFEF")};
  }

  &:first-of-type {
    margin-top: 0;
  }
`;

export const MenuIcon = styled.img<ThemeProps>`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 18px;
  align-self: stretch;
  margin: auto 0;
  filter: ${({ isDark }) => (isDark ? "invert(1)" : "none")};
`;

export const MenuText = styled.span<ThemeProps>`
  align-self: stretch;
  margin: auto 0;
  color: ${({ isDark }) => (isDark ? "#FFFFFF" : "#1C012A")};
  margin: 0;
  height: 19px;
  font-size: 16px;
`;

export const StyledMobileMenuButton = styled.button<{
  isDark: boolean;
  isOpen?: boolean;
}>`
  display: flex;
  margin-top: 8px;
  width: 100%;
  padding: 0 8px;
  justify-content: space-between;
  color: ${({ isDark }) => (isDark ? "#FFFFFF" : "#1C012A")};
  white-space: nowrap;
  background: transparent;
  border-radius: 8px;
  transition: all 0.4s ease;
  cursor: pointer;
  align-items: center;

  svg {
    transition: transform 0.4s ease;
    transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0)")};
  }

  &:hover {
    background: ${({ isDark }) =>
      isDark ? "rgba(20, 20, 20, 0.8)" : "rgba(247, 247, 247, 1)"};
  }
`;

export const MobileMenuContent = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
`;

export const CallToActionSection = styled.div`
  display: flex;
  margin-top: 24px;
  width: 100%;
  flex-direction: column;
`;

export const StyledCallToAction = styled.button`
  border-radius: 8px;
  display: flex;
  width: 100%;
  align-items: center;
  gap: 8px;
  background: #6743ee;
  color: #ffffff;
  font-weight: 400;
  padding: 12px;
  transition: background-color 0.2s ease;

  &:hover {
    background: #5a3bd4;
  }
`;

export const CallToActionIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 36px;
  align-self: stretch;
  margin: auto 0;
`;

export const CallToActionContent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

export const CallToActionTitle = styled.div`
  font-size: 16px;
  color: #ffffff;
`;

export const CallToActionSubtitle = styled.div`
  font-size: 12px;
  margin-top: 4px;
  color: #ffffff;
  opacity: 0.8;
`;

export const FooterSection = styled.footer<ThemeProps>`
  display: flex;
  margin-top: auto;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding-top: 8px;
  border-top: 1px solid
    ${({ isDark }) =>
      isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"};
`;

export const FooterLogo = styled.img<ThemeProps>`
  aspect-ratio: 4;
  object-fit: contain;
  object-position: center;
  width: 192px;
  filter: ${({ isDark }) => (isDark ? "invert(1)" : "none")};
`;

export const FooterIcon = styled.img`
  aspect-ratio: 1.6;
  object-fit: contain;
  object-position: center;
  width: 64px;
  border-radius: 40px;
`;

export const Social = styled.div`
  display: flex;
`;

export const MenuContainer = styled.div<{ isOpen: boolean }>`
  position: relative;
  left: 0;
  right: 0;
  bottom: auto;
  height: auto;
  transform: translateY(0);
  transition: margin-top 0.6s ease;
  z-index: 1000;
  overflow-y: auto;
  will-change: transform;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  cursor: pointer;
  margin-top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const MenuItemContainer = styled.div`
  position: relative;
  margin-top: 8px;
  transition: all 0.4s ease;
`;

export const SubMenuContainer = styled.div<{ isOpen: boolean }>`
  max-height: ${({ isOpen }) => (isOpen ? "500px" : "0")};
  overflow: hidden;
  transition: all 0.4s ease;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  transform-origin: top;
  transform: ${({ isOpen }) => (isOpen ? "scaleY(1)" : "scaleY(0)")};
  margin-bottom: ${({ isOpen }) => (isOpen ? "8px" : "0")};
`;

export const SubMenuContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px 0 0 16px;
  transform-origin: top;
  transition: transform 0.4s ease;
`;

export const MobileMenuContainer = styled.div<{
  isDark: boolean;
  isOpen: boolean;
}>`
  position: fixed;
  background-color: ${({ isDark }) =>
    isDark ? "rgba(20, 20, 20, 0.8)" : "rgba(255, 255, 255, 0.8)"};
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
  transform: translateZ(0);
  will-change: backdrop-filter;
  isolation: isolate;
`;
