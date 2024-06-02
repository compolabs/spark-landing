import { SourceNames } from "@/core/utils/pageSources";
import { getIdAnchor } from "@/core/utils/getidAnchor";

const TradingPlatformSection = () => {
  return (
    <div id={getIdAnchor(SourceNames.TradeSmart)}>TradingPlatformSection</div>
  );
};

export default TradingPlatformSection;
