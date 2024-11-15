/** @jsxImportSource @emotion/react */
import React from "react";
import styled from "@emotion/styled";

interface ButtonProps {
  primary?: boolean;
  icon: string;
  text: string;
}

const StyledButton = styled.button<{ primary: boolean }>`
  width: fit-content;
  border-radius: 100px;
  align-self: stretch;
  display: flex;
  min-height: 61px;
  align-items: center;
  gap: 8px;
  justify-content: center;
  flex: 1;
  flex-basis: 0%;
  margin: auto 0;
  padding: 16px 24px;
  border: ${({ primary }) =>
    primary ? "4px solid rgba(51, 34, 99, 0)" : "1px solid rgba(20, 1, 30, 1)"};
  background-color: ${({ primary }) =>
    primary ? "rgba(103, 67, 238, 1)" : "transparent"};
  color: ${({ primary }) =>
    primary ? "var(--light, #fff)" : "var(--dark-1000, #000)"};

  @media screen and (max-width: 680px) {
    width: 100%;
  }
`;

const ButtonContent = styled.div`
  width: fit-content;
  align-self: stretch;
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: start;
  margin: auto 0;
`;

const ButtonIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 24px;
  align-self: stretch;
  margin: auto 0;
`;

const ButtonText = styled.span`
  align-self: stretch;
  margin: auto 0;
`;

const Button: React.FC<ButtonProps> = ({ primary = false, icon, text }) => (
  <StyledButton primary={primary}>
    <ButtonContent>
      <ButtonIcon loading="lazy" src={icon} alt="" />
      <ButtonText>{text}</ButtonText>
    </ButtonContent>
  </StyledButton>
);

export default Button;
