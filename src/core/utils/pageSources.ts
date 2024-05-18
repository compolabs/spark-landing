export interface SelectOption<THref = string> {
  readonly label: string | null;
  readonly href: THref;
}

export enum SourceNames {
  Landing = "landing",
  WhySpark = "whySpark",
  TradeSmart = "tradeSmart",
  Resources = "resources",
}

export const sourceLabelAnchorArray: ReadonlyArray<SelectOption<SourceNames>> =
  [
    { href: SourceNames.Landing, label: "Spark landing" },
    { href: SourceNames.WhySpark, label: "Why spark" },
    { href: SourceNames.TradeSmart, label: "Trade smart" },
    { href: SourceNames.Resources, label: "Resources" },
  ];
