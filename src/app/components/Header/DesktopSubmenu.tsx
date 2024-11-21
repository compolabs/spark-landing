import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

interface SubmenuProps {
  isDark: boolean;
  isOpen: boolean;
  items: Array<{
    icon: React.ReactNode;
    text: string;
    href: string;
    badge?: string;
    onClick?: () => void;
  }>;
  onClick?: () => void;
}

const SubMenuContainer = styled.div<{ isDark: boolean; isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) scaleY(${({ isOpen }) => (isOpen ? "1" : "0")});
  min-width: 200px;
  background-color: ${({ isDark }) =>
    isDark ? "rgba(20, 20, 20, 0.2)" : "rgba(255, 255, 255, 0.2)"};
  transform-origin: top;
  transition: transform 0.2s ease, opacity 0.2s ease;
  z-index: 1000;
  border-radius: 8px;
  overflow: hidden;
  backdrop-filter: blur(30px);
  box-shadow: ${({ isDark }) =>
    isDark ? "0 4px 12px rgba(0, 0, 0, 0.5)" : "0 4px 12px rgba(0, 0, 0, 0.1)"};
  margin-top: 8px;
`;

const MenuWrapper = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Badge = styled.span<{ isDark: boolean }>`
  background-color: ${({ isDark }) =>
    isDark ? "rgba(20, 1, 30, 1)" : "rgba(246, 246, 246, 1)"};
  width: 34px;
  height: 18px;
  padding: 2px 4px 2px 4px;
  gap: 10px;
  border-radius: 2px;
  font-size: 12px;
  font-weight: 400;
  color: rgba(177, 177, 177, 1);
  backdrop-filter: blur(30px);
`;

const MenuItem = styled(Link)<{ isDark: boolean; isHome: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  width: 100%;
  background: transparent;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s ease;
  text-decoration: none;
  color: inherit;
  background: ${({ isDark }) =>
    isDark ? "rgba(20, 20, 20, 0.8)" : "rgba(247, 247, 247, 1)"};
  cursor: ${({ isHome }) => (isHome ? "default" : "pointer")};
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
`;

const MenuText = styled.span`
  font-size: 14px;
  font-weight: 500;
  text-align: left;
`;

const DesktopSubmenu: React.FC<SubmenuProps> = ({ isDark, isOpen, items }) => {
  return (
    <SubMenuContainer isDark={isDark} isOpen={isOpen}>
      <MenuWrapper>
        {items.map((item, index) => (
          <div
            onClick={(e) => {
              if (item.href === "/") {
                e.stopPropagation();
                e.preventDefault();
              }
              item.onClick?.();
            }}
            key={index}
          >
            <MenuItem
              isDark={isDark}
              href={item.href}
              target={item.href === "/" ? "_self" : "_blank"}
              isHome={item.href === "/"}
            >
              <IconWrapper>{item.icon}</IconWrapper>
              <MenuText>{item.text}</MenuText>
              {item.badge && <Badge isDark={isDark}>{item.badge}</Badge>}
            </MenuItem>
          </div>
        ))}
      </MenuWrapper>
    </SubMenuContainer>
  );
};

export default DesktopSubmenu;
