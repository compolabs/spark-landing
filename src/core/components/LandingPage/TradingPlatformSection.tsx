import theme from "@/core/styles/theme";
import { css } from "@emotion/react";
import { SourceNames } from "@/core/utils/pageSources";
import { getIdAnchor } from "@/core/utils/getidAnchor";

const TradingPlatformSection = () => {
  return <div id={getIdAnchor(SourceNames.TradeSmart)}>TradingPlatformSection</div>;
};

const cssStyles = {
  tradeButtonLink: css`
    // background: ${theme.colors.gradients.buttonTrading};
    // -webkit-background-clip: text;
    // -webkit-text-fill-color: transparent;
    // &:hover {
    //   background: #ffffff44;
    // }
    // ,
    // &:active {
    //   background: #ffffff55;
    // }

    ,
    ${theme.media.desktop} {
    }
    ${theme.media.tablet} {
    }
    ${theme.media.mobile} {
    }
  `,
};

export default TradingPlatformSection;
