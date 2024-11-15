import styled from "@emotion/styled";
import Image from "next/image";

export const SecureTradingContainer = styled.div<{ isDark: boolean }>`
  margin-top: 52px;
  width: 100%;
  border-radius: 20px;
  background: ${({ isDark }) =>
    isDark
      ? "var(--Landing-Gradients-holo-dark, linear-gradient(128.85deg, #6B0D97 0%, #000000 33%, rgba(107, 13, 151, 0.956863) 66%, #000000 100%))"
      : "var(--Landing-Gradients-holo, linear-gradient(129deg, #fac8ff 0%, #c8ffee 33%, #e9ff44 66%, #35ebff 100%))"};
  padding: 4px;
  animation: gradientAnimation 3s infinite alternate;

  @media (max-width: 1280px) {
    margin-top: 48px;
  }

  @media (max-width: 991px) {
    margin-top: 40px;
  }

  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 100% 50%;
    }
  }
  background-size: 200% 200%;
`;

export const TradingContent = styled.div<{ isDark: boolean }>`
  border-radius: 16px;
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 16px;
  flex-wrap: wrap;
  overflow: hidden;
  background-color: ${({ isDark }) => (isDark ? "black" : "white")};
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const TradingVisual = styled.div<{ isDark: boolean }>`
  width: 100%;
  max-width: 412px;
  height: 300px;
  border-radius: 8px;
  background-color: ${({ isDark }) =>
    isDark ? "rgba(23, 23, 23, 1)" : "rgba(246, 246, 246, 1)"};
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  @media (max-width: 1280px) {
    max-width: 340px;
  }
  @media (max-width: 1024px) {
    max-width: none;
  }
`;

export const DekstopImage = styled(Image)`
  @media (max-width: 680px) {
    display: none;
  }
`;

export const MobileImage = styled(Image)`
  display: none;
  @media (max-width: 680px) {
    display: block;
  }
`;

export const TradingInfo = styled.div`
  flex: 1;
  min-width: 240px;
  display: flex;
  flex-direction: column;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const TradingTitle = styled.h2`
  font-size: 38px;
  font-weight: 700;

  @media (max-width: 680px) {
    font-size: 32px;
    text-align: center;
  }
`;

export const TradingDescription = styled.p`
  margin-top: 32px;
  font-size: 24px;
  font-weight: 400;

  @media (max-width: 1024px) {
    margin-top: 24px;
  }

  @media (max-width: 680px) {
    font-size: 16px;
    text-align: center;
  }
`;

export const ActionArea = styled.div`
  display: flex;
  margin-top: 32px;
  gap: 16px;

  @media (max-width: 1024px) {
    margin-top: 24px;
    justify-content: center;
  }

  @media (max-width: 680px) {
    justify-content: center;
  }
`;

export const TradeButton = styled.button`
  border-radius: 100px;
  background-color: rgba(103, 67, 238, 1);
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--light, #fff);
  padding: 8px 16px;
  font-size: 24px;
  font-weight: 400;
  border: none;
  cursor: pointer;
`;

export const MobileOptimized = styled.div<{ isDark: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 32px;
  border: 1px dashed
    ${({ isDark }) => (isDark ? "rgba(255, 255, 255, 1)" : "rgba(0, 0, 0, 1)")};
  border-radius: 8px;
  box-sizing: border-box;

  @media (max-width: 680px) {
    span {
      display: none;
    }
    height: 36px;
    padding: 8px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;
