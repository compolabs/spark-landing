import styled from "@emotion/styled";
import { IconArrowRight } from "@/app/shared/icons";
import Link from "next/link";

export const TradeButtonContainer = styled(Link)<{
  isDark: boolean;
  size: "large" | "small";
  backgroundColor?: string;
  borderColor?: string;
  width?: string;
}>`
  border-radius: 100px;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ?? "rgba(103, 67, 238, 1)"};
  border: ${({ borderColor }) =>
    borderColor ? `1px solid ${borderColor}` : "none"};
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  cursor: pointer;
  color: ${({ backgroundColor }) => (backgroundColor ? "unset" : "white")};
  position: relative;
  overflow: hidden;
  transition: background 0.5s ease;
  font-size: ${({ size }) => (size === "large" ? "26px" : "24px")};
  width: ${({ size, width }) =>
    size === "large" ? (width ?? "212px") : "181px"};
  height: ${({ size }) => (size === "large" ? "61px" : "45px")};
  text-decoration: none;
  @media screen and (max-width: 680px) {
    font-size: ${({ size }) => (size === "large" ? "24px" : "16px")};
    width: ${({ size }) => (size === "large" ? "181px" : "108px")};
    height: ${({ size }) => (size === "large" ? "45px" : "35px")};

    svg {
      display: ${({ size }) => (size === "small" ? "none" : "unset")};
    }
  }

  :hover {
    #btns-content-wrapper {
      > div {
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

  #btns-content-wrapper > div {
    transform: translateX(0);
    transition: transform 0.5s ease;

    > svg:first-child {
      opacity: 1;
      transition: opacity ease-out 0.5s;
    }

    > svg:last-child {
      opacity: 0;
      transition: opacity ease-out 0.5s;
    }
  }
`;

export const BtnsContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: inherit;
  color: inherit;
`;

export const IconArrowRightStyled = styled(IconArrowRight)`
  width: 24px;
  height: 24px;
  position: absolute;
  right: -30px;
  opacity: 0;
`;
