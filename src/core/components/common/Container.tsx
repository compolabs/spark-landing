import React from "react";

import { ChildrenType } from "core/types";

type PropsTypes = {
  children?: ChildrenType;
};

export default function Container({ children }: PropsTypes) {
  return <div css={{ display: "flex" }}>{children}</div>;
}
