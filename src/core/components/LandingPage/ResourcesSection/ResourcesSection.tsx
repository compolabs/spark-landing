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
      <DecorationPlus>
        <div id={getIdAnchor(SourceNames.Resources)} css={cssStyles.container}>
          <h2 css={cssStyles.title}>Knowledge & Insights:</h2>
        </div>
      </DecorationPlus>
    </SectionWrapper>
  );
};

const cssStyles = {
  container: css`
  `,
  title: css`
    color: ${theme.colors.grey.light};
  `,
}

export default ResourcesSection;
