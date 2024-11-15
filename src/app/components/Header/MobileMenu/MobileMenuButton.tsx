import React from "react";
import { StyledMobileMenuButton, MobileMenuContent, MenuText } from "./styles";
import { IconChevronDown } from "@/app/shared";

interface MobileMenuButtonProps {
  text: string;
  isDark: boolean;
  onClick?: () => void;
  isOpen?: boolean;
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({
  text,
  isDark,
  onClick,
  isOpen,
}) => (
  <StyledMobileMenuButton isDark={isDark} onClick={onClick} isOpen={isOpen}>
    <MobileMenuContent>
      <MenuText isDark={isDark}>{text}</MenuText>
    </MobileMenuContent>
    <IconChevronDown width={16} height={16} />
  </StyledMobileMenuButton>
);

export default MobileMenuButton;
