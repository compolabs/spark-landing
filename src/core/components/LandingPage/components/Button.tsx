import { css } from "@emotion/react";
import styled from "@emotion/styled";
import theme from "@/core/styles/theme";

export interface ButtonProps {
    green?: boolean;
    red?: boolean;
    text?: boolean;
    black?: boolean;
    grey?: boolean;
    fitContent?: boolean;
    active?: boolean;
}

const Button = styled.button<ButtonProps>`
  text-decoration: none;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  height: 40px;
  padding: 0 16px;
  border-radius: 32px;
  cursor: pointer;
  background: transparent;
  transition: 0.4s;
  width: ${({ fitContent }) => (fitContent ? "fit-content" : "100%")};
  color: ${theme.colors.white.default};

  ${({ green }) =>
    (() => {
        switch (true) {
            case green:
                return css`
            border: 1px solid #00E388;
            background: ${theme.colors.green[10]};

            &:hover {
              background: ${theme.colors.green[5]};
            }

            &:active {
              background: ${theme.colors.green[10]};
            }
          `;
            default:
                return css`
            border: 1px solid ${theme.colors.grey.borderAccent};
            color: ${theme.colors.white.default};

            &:hover {
              border: 1px solid ${theme.colors.grey.borderAccent};
              color: ${theme.colors.white.default};
            }

            &:active {
              color: ${theme.colors.white.default};
            }

            &:disabled {
              border-color: ${theme.colors.grey.borderPrimary};
              color: ${theme.colors.white.default};
            }
          `;
        }
    })()}
`;

export default Button;

