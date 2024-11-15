import styled from "@emotion/styled";
import Image from "next/image";

export const RedemptionSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;

  @media screen and (min-width: 1280px) {
    max-width: 1440px;
    width: 100%;
  }

  @media screen and (min-width: 1024px) and (max-width: 1280px) {
    width: 100%;
  }

  @media screen and (min-width: 680px) and (max-width: 1034px) {
    width: 100%;
  }
`;

export const SectionHeader = styled.header`
  text-align: center;
  margin-bottom: 64px;

  @media screen and (max-width: 1280px) {
    margin-bottom: 48px;
  }
`;

export const MainTitle = styled.h1`
  font-size: 48px;
  font-weight: 700;

  @media screen and (max-width: 680px) {
    font-size: 22px;
  }
`;

export const Subtitle = styled.p`
  font-size: 28px;
  font-weight: 500;
  margin-top: 8px;

  @media screen and (max-width: 680px) {
    font-size: 16px;
  }
`;

export const FeatureCardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 48px;

  @media screen and (max-width: 1280px) {
    gap: 24px;
  }

  @media screen and (max-width: 680px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 1fr);
    justify-content: center;
    gap: 16px;
  }
`;

export const AdditionalFeature = styled.div<{ isDark: boolean }>`
  border-radius: 16px;
  background-color: ${(props) =>
    props.isDark ? "rgba(20, 1, 30, 1)" : "rgba(236, 231, 255, 1)"};
  border: 4px solid
    ${(props) =>
      props.isDark ? "rgba(25, 5, 78, 1)" : "rgba(219, 211, 255, 1)"};
  padding: 36px 16px;
  gap: 16px;
  display: flex;
  overflow: hidden;
  color: ${(props) =>
    props.isDark ? "rgba(255, 255, 255, 1)" : "rgba(0, 0, 0, 1)"};
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

export const FeatureContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

export const FeatureTitle = styled.h3`
  font-size: 38px;
  font-weight: 700;
  margin: 0;
  word-break: break-all;
  @media screen and (max-width: 1024px) {
    font-size: 32px;
  }
`;

export const FeatureDescription = styled.p`
  font-size: 24px;
  font-weight: 400;
`;

export const StyledImage = styled(Image)`
  width: 100%;
  max-width: 260px;
  height: auto;
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
