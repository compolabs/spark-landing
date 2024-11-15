import { CommonEntity } from "core/types";

interface PropTypes extends CommonEntity {
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
}: PropTypes) => {
  return (
    <a href={href} target="_blank" css={styles} title={tooltipLabel}>
      {children ? children: label}
    </a>
  );
};

export default ExternalLinkButton;
