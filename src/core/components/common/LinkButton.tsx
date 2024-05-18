
import InternalLinkButton from "./InternalLinkButton";
import ExternalLinkButton from "./ExternalLinkWrapper";
import {  CommonEntity } from "core/types";
import AnchorLinkButton from "./AnchorLinkButton";
import { SelectOption, SourceNames } from "@/core/utils/pageSources";

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
    <div>
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
    </div>
  );
};

export default LinkButton;
