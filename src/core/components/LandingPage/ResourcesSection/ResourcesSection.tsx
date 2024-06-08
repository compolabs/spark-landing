import React from "react";
import { css } from "@emotion/react";

import { getIdAnchor } from "@/core/utils/getidAnchor";
import { SourceNames } from "@/core/utils/pageSources";
import SectionWrapper from "@/core/components/common/SectionWrapper";
import { DecorationPlus } from "@/core/components/common/DecorationPlus";
import theme from "@/core/styles/theme";

const ResourcesSection = () => {
  return (
    <SectionWrapper>
      <div id={getIdAnchor(SourceNames.Resources)} css={cssStyles.container}>
        <DecorationPlus>
          <h2 css={cssStyles.title}>Knowledge & Insights:</h2>
        </DecorationPlus>
      </div>
    </SectionWrapper>
  );
};

const cssStyles = {
  container: css`
    padding: ${theme.spacing.custom[20]} 0 ${theme.spacing.extraHuge};
    margin-bottom: ${theme.spacing.custom[20]};
    position: relative;
    width: 100%;
    
    ${theme.media.tabletBreakPoint} {
      padding: ${theme.spacing.custom[40]} 0;
    }
  `,
  title: css`
    color: ${theme.colors.grey.light};
  `,
}

export default ResourcesSection;
