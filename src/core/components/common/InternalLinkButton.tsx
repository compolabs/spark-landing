import { ChildrenType, CommonEntity, Styles } from "core/types";
import Link from "next/link";

interface PropsT extends CommonEntity {
  href: string;
  label?: string;
}

const InternalLinkButton = ({ href, children, styles, label }: PropsT) => {
  return (
    <Link href={href} css={styles}>
      {children ?? label}
    </Link>
  );
};

export default InternalLinkButton;
