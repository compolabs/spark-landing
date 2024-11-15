import styled from "@emotion/styled";

export const Container = styled.section`
  margin: 64px 0;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  overflow: hidden;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 680px) {
    font-size: 22px;
  }
`;
