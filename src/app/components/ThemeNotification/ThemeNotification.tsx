"use client";
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useTheme } from "next-themes";

const NotificationWrapper = styled.div<{ isVisible: boolean }>`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${({ theme }) => (theme === "dark" ? "#1A1A1A" : "#F6F6F6")};
  padding: 16px;
  transform: translateY(${({ isVisible }) => (isVisible ? "0" : "100%")});
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
  border-top: 1px solid
    ${({ theme }) => (theme === "dark" ? "#2E2E2E" : "#E0E0E0")};
`;

const NotificationContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media (max-width: 680px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Text = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${({ theme }) => (theme === "dark" ? "#FFFFFF" : "#000000")};
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
`;

const Button = styled.button<{ variant: "confirm" | "deny" }>`
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;

  ${({ variant, theme }) =>
    variant === "confirm"
      ? `
        background: ${theme === "dark" ? "#FFFFFF" : "#000000"};
        color: ${theme === "dark" ? "#000000" : "#FFFFFF"};
        &:hover {
          background: ${theme === "dark" ? "#E0E0E0" : "#2E2E2E"};
        }
      `
      : `
        background: transparent;
        color: ${theme === "dark" ? "#FFFFFF" : "#000000"};
        border: 1px solid ${theme === "dark" ? "#FFFFFF" : "#000000"};
        &:hover {
          background: ${theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"};
        }
      `}
`;

export const ThemeNotification: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const hasSeenNotification = localStorage.getItem(
      "hasSeenThemeNotification",
    );
    if (!hasSeenNotification) {
      setIsVisible(true);
    }
  }, []);

  const handleConfirm = () => {
    setTheme("dark");
    setIsVisible(false);
    localStorage.setItem("hasSeenThemeNotification", "true");
    localStorage.setItem("theme", "dark");
  };

  const handleDeny = () => {
    setTheme("light");
    setIsVisible(false);
    localStorage.setItem("hasSeenThemeNotification", "true");
    localStorage.setItem("theme", "light");
  };

  if (!isVisible) return null;

  return (
    <NotificationWrapper isVisible={isVisible} theme={theme}>
      <NotificationContent>
        <Text theme={theme}>
          Would you like to use dark theme for better experience?
        </Text>
        <ButtonGroup>
          <Button variant="confirm" onClick={handleConfirm} theme={theme}>
            Confirm
          </Button>
          <Button variant="deny" onClick={handleDeny} theme={theme}>
            Deny
          </Button>
        </ButtonGroup>
      </NotificationContent>
    </NotificationWrapper>
  );
};
