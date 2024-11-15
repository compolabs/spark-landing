import {
  SelectOption,
  SourceNames,
  sourceLabelAnchorArray,
} from "./pageSources";

export const getIdAnchor = (sourceNames: SourceNames) =>
  sourceLabelAnchorArray
    .filter((item: SelectOption<SourceNames>) => item.href === sourceNames)
    .at(0)?.href;
