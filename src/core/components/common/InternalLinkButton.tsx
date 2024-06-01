import Link from "next/link";

import { CommonEntity } from "core/types";

interface PropTypes extends CommonEntity {
  href: string;
  label?: string;
}

const InternalLinkButton = ({ href, children, styles, label }: PropTypes) => {
  return (
    <Link href={href} css={styles}>
      {children ?? label}
    </Link>
  );
};

export default InternalLinkButton;
