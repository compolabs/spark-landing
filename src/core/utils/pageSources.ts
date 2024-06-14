export interface SelectOption<THref = string> {
  readonly label: string | null;
  readonly href: THref;
}

export enum SourceNames {
  Landing = "landing",
  WhySpark = "whySpark",
  TradingToolkit = "TradingToolkit",
  Resources = "resources",
}

export const sourceLabelAnchorArray: ReadonlyArray<SelectOption<SourceNames>> =
  [
    { href: SourceNames.Landing, label: "Spark landing" },
    { href: SourceNames.WhySpark, label: "Why spark" },
    { href: SourceNames.TradingToolkit, label: "Trading Toolkit" },
    { href: SourceNames.Resources, label: "Resource Library" },
  ];
