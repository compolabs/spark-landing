/** @jsxImportSource @emotion/react */
import React from "react";
import styled from "@emotion/styled";
import { IconCircleCheckFilled } from "@/app/shared/icons/IconCircleCheckFilled";

interface FeatureItemProps {
  text: string;
}

const FeatureItemContainer = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

const FeatureText = styled.div`
  text-align: center;
  font-size: 24px;
  @media screen and (max-width: 680px) {
    font-size: 16px !important;
  }
`;

const FeatureIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background: linear-gradient(
    128.85deg,
    #fac8ff 0%,
    #c8ffee 33%,
    #e9ff44 66%,
    #35ebff 100%
  );
  color: rgba(103, 67, 238, 1);
`;

const FeatureItem: React.FC<FeatureItemProps> = ({ text }) => (
  <FeatureItemContainer>
    <FeatureIcon>
      <IconCircleCheckFilled width={19} height={19} />
    </FeatureIcon>
    <FeatureText>{text}</FeatureText>
  </FeatureItemContainer>
);

export default FeatureItem;
