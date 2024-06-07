import React from 'react';
import { css } from "@emotion/react";

import { Styles } from 'core/types';

import theme from "@/core/styles/theme";
import LinkButton from "@/core/components/common/LinkButton";

interface PropTypes {
  links: {
    href: string,
    label?: string,
    icon?: React.ReactNode,
  }[];
  listHeader?: string,
  type?: "vertical" | "horizontal",
  listStyles?: Styles,
}

export const LinksList = ({ links, listHeader = "", type = "vertical", listStyles }: PropTypes) => {
  const isVerticalList = type === "vertical";

  return (
    <ul css={[cssStyles.list(isVerticalList ? "column" : "row"), listStyles]}>
      {listHeader && <div css={cssStyles.listHeader}>{listHeader}</div>}

      {links.map(({ label, href = "", icon }) => (
        <li
          key={href + label}
          css={cssStyles.listItem(isVerticalList
            ? { marginBottom: theme.spacing.large }
            : { marginRight: theme.spacing.medium }
          )}
        >
          <LinkButton type="external" data={{ href, label: label ?? "" }} >
            {icon && icon}
          </LinkButton>
        </li>
      ))}
    </ul>
  );
};

const cssStyles = {
  list: (flexDirection: string)=> css `
    display: flex;
    flex-direction: ${flexDirection};
    list-style: none;
    font-size: ${theme.text.size.extraTiny};
    padding: 0;
  `,
  listHeader: css`
    color: ${theme.colors.white[37]};
    margin-bottom: ${theme.spacing.large};
  `,
  listItem: ({ marginBottom = "0", marginRight = "0" }) => css`
    color: ${theme.colors.white[100]};
    margin-bottom: ${marginBottom};
    margin-right: ${marginRight};
    max-height: 2rem;
    
    &:last-child {
      margin-bottom: 0;
      margin-right: 0;
    }
  `,
};
