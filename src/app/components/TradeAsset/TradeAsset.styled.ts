import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

// Обновленная анимация для вертикального движения контейнера
const slideVertical = keyframes`
  0%, 25% { transform: translateY(0); }
  50%, 75% { transform: translateY(-50%); }
  100% { transform: translateY(0); }
`;

const slideVerticalMobile = keyframes`
  0%, 25% { transform: translateY(0); }
  50%, 75% { transform: translateY(-50%); }
  100% { transform: translateY(0); }
`;
// Анимация для горизонтального движения
const slideHorizontal = keyframes`
  0%, 25% { transform: translateX(0); }
  50%, 75% { transform: translateX(-80px); }
  100% { transform: translateX(0); }
`;

const slideHorizontalMobile = keyframes`
  0%, 25% { transform: translateX(0); }
  50%, 75% { transform: translateX(-35px); }
  100% { transform: translateX(0); }
`;

const slideHorizontal2 = keyframes`
  0%, 25% { transform: translateX(0); }
  50%, 75% { transform: translateX(15px); }
  100% { transform: translateX(0); }
`;

const slideHorizontal3 = keyframes`
  0%, 25% { transform: translateX(0); }
  50%, 75% { transform: translateX(40px); }
  100% { transform: translateX(0); }
`;

export const AnimatedContainer = styled.div`
  overflow: hidden;
  height: 48px;
  display: inline-block;
  @media screen and (max-width: 680px) {
    height: 22px;
  }
`;

export const Wrapper = styled.div`
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const AnimatedTitleWrapper = styled.div`
  animation: ${slideVertical} 4s infinite;
  display: flex;
  flex-direction: column;
  will-change: transform;
  @media screen and (max-width: 680px) {
    animation: ${slideVerticalMobile} 4s infinite;
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  margin: 0;
  text-transform: uppercase;
  line-height: 48px;

  @media screen and (max-width: 680px) {
    font-size: 22px;
    line-height: 22px;
  }
`;

export const StaticTitle = styled.h1`
  font-size: 48px;
  font-weight: bold;
  margin: 0 0 0 20px;
  text-transform: uppercase;
  display: inline-block;
  animation: ${slideHorizontal} 4s infinite;
  will-change: transform;

  @media screen and (max-width: 680px) {
    font-size: 22px;
    line-height: 22px;
    margin: 0 0 0 10px;
    animation: ${slideHorizontalMobile} 4s infinite;
  }
`;

export const TradeAssetContainer = styled.div<{ isDark: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 100px;
  gap: 24px;
  overflow: hidden;

  @media screen and (min-width: 680px) and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    height: 752px;
  }

  @media screen and (max-width: 680px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ContentWrapper = styled.div`
  // max-width: 0px;
  text-align: left;
  gap: 16px;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    gap: 16px;
    max-width: unset;
  }
`;

export const Description = styled.div<{ isDark: boolean }>`
  font-size: 16px;
  font-weight: 400;
  color: ${({ isDark }) =>
    isDark ? "rgba(177, 177, 177, 1)" : "rgba(177, 177, 177, 1)"};
  background-color: ${({ isDark }) =>
    isDark ? "rgba(23, 23, 23, 1)" : "rgba(247, 247, 247, 1)"};
  border-radius: 16px;
  padding: 8px 16px;
  width: fit-content;
  @media screen and (max-width: 680px) {
    font-size: 12px;
  }
`;

export const Title2 = styled.h1`
  font-size: clamp(76px, 6vw, 86px);
  margin: 0;
  font-family: "Syne", sans-serif;
  font-weight: 800;

  @media screen and (max-width: 680px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  font-size: 18px;
  margin: 10px 0 32px;

  @media screen and (max-width: 1024px) {
    text-align: center;
  }
  @media screen and (max-width: 680px) {
    margin: 0 0 26px;
    font-size: 16px;
  }
`;

export const TradeButton = styled.button<{ isDark: boolean }>`
  background-color: rgba(103, 67, 238, 1);
  color: white;
  padding: 10px 24px;
  border: none;
  border-radius: 100px;
  font-weight: normal;
  cursor: pointer;
  transition: background-color 0.3s;
  width: fit-content;
  font-size: 28px;
  line-height: 33.6px;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 48px;

  @media screen and (max-width: 1024px) {
  }
  &:hover {
    background-color: #7a6aff;
  }
`;

export const ImagesContainer = styled.div`
  display: flex;
  gap: 20px;

  @media screen and (min-width: 1024px) and (max-width: 1280px) {
    > :first-child {
      display: none;
    }
  }
  @media screen and (min-width: 680px) and (max-width: 1024px) {
    height: 340px;
  }
  @media screen and (max-width: 680px) {
    height: 240px;
    > :first-child {
      display: none;
    }
  }
`;

export const AnimatedWrapper = styled.div`
  display: flex;
  align-items: center;
  will-change: transform;

  @media screen and (min-width: 680px) and (max-width: 1024px) {
    animation: ${slideHorizontal3} 4s infinite;
  }
  @media screen and (max-width: 680px) {
    animation: ${slideHorizontal2} 4s infinite;
  }
`;
