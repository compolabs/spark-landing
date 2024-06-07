import React from "react";

import { getIdAnchor } from "@/core/utils/getidAnchor";
import { SourceNames } from "@/core/utils/pageSources";

const ResourcesSection = () => {
  return <div id={getIdAnchor(SourceNames.Resources)}>ResourcesSection</div>;
};

export default ResourcesSection;
