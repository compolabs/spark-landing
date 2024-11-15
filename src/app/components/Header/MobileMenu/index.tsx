import React, { useEffect, useRef, useMemo } from "react";
import { createPortal } from "react-dom";
import styled from "@emotion/styled";
import SparkMenu from "./SparkMenu";
import { useTheme } from "next-themes";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const Background = styled.div<{ isOpen: boolean; isDark: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ isDark }) =>
    isDark ? "rgba(180, 180, 180, 0.7)" : "rgba(70, 70, 70, 0.7)"};
  opacity: ${({ isOpen }) => (isOpen ? 0.7 : 0)};
  transition: opacity 0.6s ease;
  z-index: 999;
  pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
  cursor: pointer;
`;

const MenuContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: calc(100vh - 72px);
  transform: translateY(${({ isOpen }) => (isOpen ? "0" : "100%")});
  transition: transform 0.6s ease;
  z-index: 1000;
  overflow-y: auto;
  will-change: transform;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  cursor: pointer;
`;

const SparkMenuWrapper = styled.div`
  cursor: default;
`;

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const sparkMenuRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const isDark = useMemo(() => theme !== "light", [theme]);
  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen, onClose]);

  const handleMenuContainerClick = (e: React.MouseEvent) => {
    if (
      sparkMenuRef.current &&
      !sparkMenuRef.current.contains(e.target as Node)
    ) {
      onClose();
    }
  };

  const menuContent = (
    <>
      <Background isOpen={isOpen} isDark={isDark} onClick={onClose} />
      <MenuContainer
        ref={menuRef}
        isOpen={isOpen}
        onClick={handleMenuContainerClick}
      >
        <SparkMenuWrapper ref={sparkMenuRef}>
          <SparkMenu isDark={isDark} isOpen={isOpen} />
        </SparkMenuWrapper>
      </MenuContainer>
    </>
  );

  if (!mounted) return null;

  const portalElement = document.getElementById("portal-root");
  if (!portalElement) return null;

  return createPortal(menuContent, portalElement);
};

export default MobileMenu;
