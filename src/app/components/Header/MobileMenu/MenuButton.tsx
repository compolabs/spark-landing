import React from "react";
import { StyledMenuButton, MenuText } from "./styles";
import styled from "@emotion/styled";

interface MenuButtonProps {
  icon: React.ReactNode;
  text: string;
  isDark: boolean;
  href: string;
  badge?: string;
}

const Badge = styled.span<{ isDark: boolean }>`
  background: ${({ isDark }) =>
    isDark ? "rgba(20, 1, 30, 1)" : "rgba(246, 246, 246, 1)"};
  width: 34px;
  height: 18px;
  padding: 2px 4px 2px 4px;
  gap: 10px;
  border-radius: 2px;
  opacity: 0px;
  font-size: 12px;
  font-weight: 400;
  color: rgba(177, 177, 177, 1);
`;

const MenuButton: React.FC<MenuButtonProps> = ({
  icon,
  text,
  isDark,
  href,
  badge,
}) => (
  <StyledMenuButton
    isDark={isDark}
    href={href}
    target="_blank"
    isHome={href === "/"}
  >
    {icon}
    <MenuText isDark={isDark}>{text}</MenuText>
    {badge && <Badge isDark={isDark}>{badge}</Badge>}
  </StyledMenuButton>
);

export default MenuButton;
