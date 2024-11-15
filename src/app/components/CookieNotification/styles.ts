"use client";

import styled from "@emotion/styled";

export const NotificationContainer = styled.div<{ isDark?: boolean }>`
  position: fixed;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 480px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  border: ${({ isDark }) =>
    isDark ? "none" : "1px solid rgba(177, 177, 177, 1)"};
  z-index: 1000;
  border-radius: 8px;
  margin: 0 auto;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(30px);

  @media (max-width: 680px) {
    bottom: 8px;
    width: calc(100% - 16px);
    padding: 8px;
    flex-direction: column;
    text-align: center;
    gap: 16px;
    align-items: end;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
`;

export const Icon = styled.div`
  width: 32px;
  height: 32px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 12px;

  @media (max-width: 680px) {
    width: fit-content;
  }
`;

const BaseButton = styled.button`
  padding: 8px 16px;
  border-radius: 999px;
  cursor: pointer;
  font-weight: 500;
  height: 35px;
  width: fit-content;
  font-size: 16px;
  transition: all 0.2s;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 680px) {
    height: 27px;
    padding: 4px 8px;
    font-size: 16px;
    width: fit-content;
  }
`;

export const ConfirmButton = styled(BaseButton)`
  background-color: #7c3aed;
  color: white;
  border: none;

  &:hover {
    background-color: #6d28d9;
  }
`;

export const DenyButton = styled(BaseButton)<{ isDark?: boolean }>`
  border: 1px solid rgba(177, 177, 177, 1);
  background-color: ${({ isDark }) =>
    isDark ? "rgba(255, 255, 255, 0)" : "rgba(255, 255, 255, 0)"};
  color: rgba(177, 177, 177, 1);
  &:hover {
    background-color: rgba(177, 177, 177, 0.3);
  }
`;
