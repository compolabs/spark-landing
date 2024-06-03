
import {  CommonEntity } from "core/types";

import { SelectOption, SourceNames } from "@/core/utils/pageSources";

import InternalLinkButton from "./InternalLinkButton";
import ExternalLinkButton from "./ExternalLinkWrapper";
import AnchorLinkButton from "./AnchorLinkButton";


interface LinkButtonInterface extends CommonEntity{
  type: "internal" | "external" | "anchor";
  tooltipLabel?: string;
  data: SelectOption<SourceNames | string>;
}

const LinkButton = ({
  type,
  children,
  styles,
  tooltipLabel,
  data,
}: LinkButtonInterface) => {
  return (
    <>
      {type === "internal" && (
        <InternalLinkButton
          href={data.href ?? ""}
          styles={styles}
          label={data.label ?? ""}
        >
          {children}
        </InternalLinkButton>
      )}
      {type === "external" && (
        <ExternalLinkButton
          href={data.href ?? ""}
          styles={styles}
          tooltipLabel={tooltipLabel}
          label={data.label ?? ""}
        >
          {children}
        </ExternalLinkButton>
      )}
      {type === "anchor" && (
        <AnchorLinkButton
          hash={data.href ?? ""}
          styles={styles}
          label={data.label ?? ""}
        >
          {children}
        </AnchorLinkButton>
      )}
    </>
  );
};

export default LinkButton;
