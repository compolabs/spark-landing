import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const moveList = (
  transform: number,
  mainTransform: string,
  calculate: number,
) => keyframes`
  0% {
    transform: translateX(${mainTransform}px);
  }
  25% {
    transform: translateX(-${transform + calculate}px);
  }
  50% {
    transform: translateX(-${transform + calculate}px);
  }
  75% {
    transform: translateX(${mainTransform}px);
  }
  100% {
    transform: translateX(${mainTransform}px);
  }
  }
`;

export const WrapperList = styled.div<{ isDark: boolean }>`
  position: relative;
  overflow: hidden;

  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    height: 100%;
    z-index: 2;
    width: 188px;
    background: ${({ isDark }) =>
      isDark
        ? "linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0) 100%)"
        : "linear-gradient(90deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%)"};
  }

  &::after {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    height: 100%;
    z-index: 2;
    width: 188px;
    background: ${({ isDark }) =>
      isDark
        ? "linear-gradient(270deg, #000000 0%, rgba(0, 0, 0, 0) 100%)"
        : "linear-gradient(270deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%)"};
  }

  @media screen and (max-width: 1024px) {
    &::before,
    &::after {
      width: 138px;
    }
  }

  @media screen and (max-width: 680px) {
    &::before,
    &::after {
      width: 98px;
    }
  }
`;

export const List = styled.div<{ transform: number }>`
  position: relative;
  display: flex;
  align-items: center;
  column-gap: 24px;
  width: calc(100% + 24px);
  max-width: 3198px;
  z-index: 1;
  animation: ${(props) => moveList(props.transform, "187", 200)} 80s
    cubic-bezier(0.65, 0.1, 0.65, 1) infinite;

  @media screen and (max-width: 1620px) {
    animation: ${(props) => moveList(props.transform, "120", 120)} 80s
      cubic-bezier(0.65, 0.1, 0.65, 1) infinite;
  }

  @media screen and (max-width: 1440px) {
    animation: ${(props) => moveList(props.transform, "87", 100)} 80s
      cubic-bezier(0.65, 0.1, 0.65, 1) infinite;
  }

  @media screen and (max-width: 1280px) {
    animation: ${(props) => moveList(props.transform, "67", 100)} 80s
      cubic-bezier(0.65, 0.1, 0.65, 1) infinite;
  }

  @media screen and (max-width: 1024px) {
    animation: ${(props) => moveList(props.transform, "57", 70)} 80s
      cubic-bezier(0.65, 0.1, 0.65, 1) infinite;
  }

  @media screen and (max-width: 680px) {
    animation: ${(props) => moveList(props.transform, "20", 40)} 80s
      cubic-bezier(0.65, 0.1, 0.65, 1) infinite;
  }
`;
