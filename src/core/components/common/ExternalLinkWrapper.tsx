import { CommonEntity } from "core/types";

interface PropsT extends CommonEntity {
  href: string;
  tooltipLabel?: string;
  label?: string;
}

const ExternalLinkButton = ({
  href,
  children,
  styles,
  tooltipLabel,
  label,
}: PropsT) => {
  return (
    <a href={href} target="_blank" css={styles} title={tooltipLabel}>
      {children ?? label}
    </a>
  );
};

export default ExternalLinkButton;
