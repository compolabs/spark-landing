"use client";
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useTheme } from "next-themes";
import { MIXPANEL_EVENTS, trackEvent } from "@/app/utils/mixPanel";

const ToggleContainer = styled.div<{ isActive: boolean; isDark: boolean }>`
  width: 64px;
  height: 40px;
  border-radius: 40px;
  border: 2px solid ${({ isDark }) => (isDark ? "#2E2E2E" : "#F0F0F0")};
  box-sizing: border-box;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: ${({ isDark }) => (isDark ? "#000000" : "#F6F6F6")};

  @media screen and (max-width: 680px) {
    width: 64px;
    height: 40px;
  }
`;

const ToggleCircle = styled.div<{ isActive: boolean }>`
  width: 36px;
  height: 36px;
  background-color: ${({ isActive }) =>
    isActive ? "rgba(23, 23, 23, 1)" : "white"};
  border-radius: 50%;
  position: absolute;
  left: ${({ isActive }) => (isActive ? "24px" : "0px")};
  transition: left 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
`;

export const ThemeToggle: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      trackEvent(MIXPANEL_EVENTS.HEADER_CLICK_DARK);
    } else {
      trackEvent(MIXPANEL_EVENTS.HEADER_CLICK_LIGHT);
    }
  };

  return (
    <ToggleContainer
      onClick={toggleTheme}
      isActive={theme !== "light"}
      isDark={theme !== "light"}
    >
      <ToggleCircle isActive={theme !== "light"}>
        <DarkModeSwitch
          checked={theme !== "light"}
          size={24}
          onChange={toggleTheme}
        />
      </ToggleCircle>
    </ToggleContainer>
  );
};
