import styled from "@emotion/styled";
import Link from "next/link";

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  column-gap: 48px;
  margin-bottom: 64px;

  @media screen and (max-width: 680px) {
    flex-direction: column;
    row-gap: 32px;
  }
`;

export const AuditBlock = styled.div<{ isDark: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 4px solid ${({ isDark }) => (isDark ? "#171717" : "#f7f7f7")};
  background: ${({ isDark }) => (isDark ? "#000000" : "#f6f6f6")};
  border-radius: 16px;
  padding: 32px;
  width: 344px;
  min-width: 344px;
  height: 320px;

  @media screen and (max-width: 680px) {
    width: 100%;
    min-width: auto;
  }
`;

export const Title = styled.p`
  margin-top: 26px;
  font-weight: 400;
  font-size: 24px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  width: 100%;
  max-width: 952px;
`;

export const IconArrow = styled.div<{ isDark: boolean }>`
  position: absolute;
  height: 52px;
  width: 52px;
  top: 8px;
  left: 8px;
  background: ${({ isDark }) => (isDark ? "#000000" : "#ffffff")};
  border-radius: 8px;
  transition: width 0.3s ease;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 14px;

  @media screen and (max-width: 680px) {
    height: 39px;
    width: 39px;
    top: 3px;
    left: 4px;
  }
`;

export const MainIcon = styled.div<{ isDark: boolean }>`
  position: relative;
  z-index: 2;
`;

export const Item = styled(Link)<{ isDark: boolean }>`
  position: relative;
  border-radius: 8px;
  padding: 8px;
  width: 100%;
  height: 68px;
  background: ${({ isDark }) => (isDark ? "#171717" : "#f7f7f7")};
  display: flex;
  align-items: center;
  column-gap: 12px;
  text-decoration: none;

  @media screen and (max-width: 680px) {
    height: 44px;
    padding: 4px;
  }
`;

export const IconWrapper = styled.div<{ isDark: boolean }>`
  border-radius: 4px;
  padding: 8px;
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ isDark }) => (isDark ? "#000000" : "#ffffff")};
  position: relative;
  z-index: 2;

  @media screen and (max-width: 680px) {
    height: 39px;
    width: 39px;
    padding: 4px;

    svg:last-child {
      transform: scale(0.7); /* Уменьшает размер в 2 раза */
      transform-origin: center;
    }
  }
`;

export const SocialTitle = styled.p<{ isDark: boolean }>`
  font-weight: 400;
  font-size: 24px;
  position: relative;
  z-index: 2;
  color: ${({ isDark }) => (isDark ? "#ffffff" : "#000000")};
`;
