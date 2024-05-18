declare module "core/types" {
  import { SerializedStyles } from "@emotion/react";
  export type StyledProps = {
    styles?: Styles;
  };

  export type Styles =
    | { [index: string]: string }
    | string
    | SerializedStyles
    | SerializedStyles[]
    | Styles[]
    | undefined;

  export type ChildrenType = React.ReactNode | ChildrenType[] | string | null;

  interface CommonEntity {
    children?: ChildrenType;
    styles?: Styles;
  }
}
