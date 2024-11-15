import React from "react";
import {
  StyledCallToAction,
  CallToActionContent,
  CallToActionTitle,
  CallToActionSubtitle,
} from "./styles";

interface CallToActionProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

const CallToAction: React.FC<CallToActionProps> = ({
  icon,
  title,
  subtitle,
}) => (
  <StyledCallToAction>
    {icon}
    <CallToActionContent>
      <CallToActionTitle>{title}</CallToActionTitle>
      <CallToActionSubtitle>{subtitle}</CallToActionSubtitle>
    </CallToActionContent>
  </StyledCallToAction>
);

export default CallToAction;
