import React from "react";

import { ChildrenType } from "core/types";

type PropTypes = {
  children?: ChildrenType;
};

export default function Container({ children }: PropTypes) {
  return <div css={{ display: "flex" }}>{children}</div>;
}
