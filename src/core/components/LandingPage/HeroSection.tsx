import { css } from "@emotion/react";

import { getIdAnchor } from "@/core/utils/getidAnchor";
import { SourceNames } from "@/core/utils/pageSources";

const HeroSection = () => {
  return (
    <div id={getIdAnchor(SourceNames.WhySpark)} css={cssStyle.heroContainer}>
      HeroSection
    </div>
  );
};
const cssStyle = {
  heroContainer: css`
    margin: 105px 10px 0;
  `,
};
export default HeroSection;
