import React from "react";
import { Container, Title } from "./BackedBest.styles";
import { Carousel } from "./Carusel";

export const BackedBest: React.FC = () => {
  return (
    <Container>
      <Title>BACKED BY THE BEST</Title>
      <Carousel />
    </Container>
  );
};
