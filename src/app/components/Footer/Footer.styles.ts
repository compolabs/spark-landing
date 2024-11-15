import styled from "@emotion/styled";
import Link from "next/link";

export const FooterContainer = styled.footer<{ isDark: boolean }>`
  width: 100%;
  background: ${({ isDark }) =>
    isDark
      ? "linear-gradient(135deg, #6b0d97 0%, #000 33%, rgba(107, 13, 151, 0.96) 66%, #000 100%)"
      : "linear-gradient(135deg, #fac8ff 0%, #c8ffee 33%, #e9ff44 66%, #35ebff 100%)"};
  background-size: 200%;
  padding-top: 4px;
  animation: spark-grad 10s ease infinite;

  @keyframes spark-grad {
    0% {
      background-position: 0% 51%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 51%;
    }
  }
`;

export const Wrapper = styled.div<{ isDark: boolean }>`
  padding: 48px 32px;
  background: ${({ isDark }) => (isDark ? "#171717" : "#f7f7f7")};
  display: flex;
  flex-direction: column;
  row-gap: 48px;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 680px) {
    flex-direction: column;
    row-gap: 16px;
  }
`;

export const List = styled.div`
  display: flex;
`;

export const ListItem = styled(Link)<{ isDark: boolean }>`
  text-decoration: none;
  width: 70px;
  font-weight: 400;
  font-size: 16px;
  color: ${({ isDark }) => (isDark ? "#ffffff" : "#171717")};
  position: relative;
  text-align: center;

  &:nth-of-type(2) {
    margin: 0 16px;
  }
  &:before {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 1px;
    background: ${({ isDark }) => (isDark ? "#ffffff" : "#171717")};
    opacity: 0;
    transition: 0.3s ease;
  }

  &:hover {
    &:before {
      opacity: 1;
    }
  }
`;

export const Social = styled.div`
  display: flex;
  column-gap: 20px;
`;

export const SocialItem = styled.div<{ isDark: boolean; isHovered: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  width: 40px;
  min-width: 40px;
  height: 40px;
  min-height: 40px;
  background: ${({ isDark, isHovered }) =>
    isHovered
      ? isDark
        ? "#000000"
        : "#FFFFFF"
      : isDark
        ? "#FFFFFF"
        : "transparent"};
`;

export const SocialItemWrapper = styled(Link)<{ isDark: boolean }>`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-size: 100%;
  padding: 8px;
  transition: 0.3s ease;
  text-decoration: none;
  &:hover {
    transition: 0.3s ease;
    background: ${({ isDark }) =>
      isDark
        ? "linear-gradient(135deg, #6b0d97 0%, #000 33%, rgba(107, 13, 151, 0.96) 66%, #000 100%)"
        : "linear-gradient(135deg, #fac8ff 0%, #c8ffee 33%, #e9ff44 66%, #35ebff 100%)"};
  }
`;
export const Texts = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 400;
  font-size: 16px;

  @media screen and (max-width: 680px) {
    flex-direction: column;
    row-gap: 16px;
    align-items: center;
  }
`;
