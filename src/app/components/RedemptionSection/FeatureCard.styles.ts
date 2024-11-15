import styled from "@emotion/styled";
import Link from "next/link";

export const FeatureCardContainer = styled.div<{
  isDark: boolean;
  backgroundColor: string;
  backgroundColorDark: string;
  borderColor: string;
  borderColorDark: string;
  isDisabled: boolean;
}>`
  min-width: 240px;
  border-radius: 16px;
  padding: 36px 16px;
  display: flex;
  gap: 16px;
  overflow: hidden;
  background-color: ${({ isDark, backgroundColor, backgroundColorDark }) =>
    isDark ? backgroundColorDark : backgroundColor};
  border: 4px solid
    ${({ isDark, borderColor, borderColorDark }) =>
      isDark ? borderColorDark : borderColor};
  :hover {
    background: ${({ isDark, isDisabled, borderColor, borderColorDark }) =>
      isDisabled ? "" : isDark ? borderColorDark : borderColor};
    #btns-content-wrapper {
      > a {
        transform: translateX(-30px);
        transition: transform 0.5s ease;
        > svg:first-child {
          opacity: 0;
          transition: opacity ease-out 0.5s;
        }
        > svg:last-child {
          opacity: 1;
          transition: opacity ease-out 0.5s;
        }
      }
    }
  }
  transition: background 0.5s ease;
  @media screen and (max-width: 1024px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-between;
    padding: 24px 24px 0 24px;
  }

  @media screen and (max-width: 680px) {
    gap: 7px;
    height: 416px;
    position: relative;
    justify-content: flex-end;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

export const DisabledBtnsContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: inherit;
  text-decoration: none;
  color: inherit;
  cursor: default;
`;

export const ActionButton = styled.button<{
  isDark: boolean;
  buttonColor: string;
  buttonColorDark: string;
  isHome: boolean;
}>`
  border-radius: 100px;
  background-color: ${({ isDark }) => (isDark ? "black" : "white")};
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  padding: 8px 18px;
  font-size: 24px;
  font-weight: 400;
  border: none;
  width: fit-content;
  color: ${({ isDark, buttonColor, buttonColorDark }) =>
    isDark ? buttonColorDark : buttonColor};
  position: relative;
  overflow: hidden;
`;

export const CardTitle = styled.h2`
  font-size: 38px;
  font-weight: 700;

  @media screen and (max-width: 680px) {
    font-size: 32px;
  }
`;

export const FeatureImage = styled.img`
  width: 100%;
  max-width: 260px;
  object-fit: contain;

  @media screen and (max-width: 1440px) {
    max-width: 200px;
  }

  @media screen and (max-width: 1280px) {
    max-width: 220px;
  }

  @media screen and (max-width: 1024px) {
    max-width: 260px;
  }

  @media screen and (max-width: 680px) {
    position: absolute;
    bottom: -52px;
  }
`;

export const BtnsContentWrapper = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: inherit;
  text-decoration: none;
  color: inherit;
  position: relative;
`;
