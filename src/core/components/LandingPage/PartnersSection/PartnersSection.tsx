import React from "react";
import { css } from "@emotion/react";

import SectionWrapper from "@/core/components/common/SectionWrapper";
import theme from "@/core/styles/theme";
import Image from "next/image";
import { convertPxToRem } from "@/core/utils/convertPxToRem";

import { items, text } from "./constants";

const PartnersSection = () => {
  return (
    <SectionWrapper styles={cssStyles.container}>
      <div css={cssStyles.titleWrapper}>
        <h2 css={cssStyles.title}>Backers and Partners</h2>
      </div>
      <div css={cssStyles.items}>
        {items.map((item, id) => (
          <div key={id} css={cssStyles.partners}>
            <Image
              src={item.url}
              alt="trade-platform"
              width={120}
              height={40}
            />
          </div>
        ))}
        {text.map((item) => (
          <div css={[cssStyles.partners, cssStyles.text]}>{item.title}</div>
        ))}
      </div>
    </SectionWrapper>
  );
};

const cssStyles = {
  container: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${convertPxToRem(15)} 0 ${convertPxToRem(70)} 0
  `,
  titleWrapper: css`
    margin: 0 auto ${theme.spacing.small};
    max-width: 30rem;
    text-align: center;

    ${theme.media.tablet} {
      max-width: 43rem;
    }
  `,
  title: css`
    margin-bottom: ${theme.spacing.normal};
    font-size: ${theme.text.size.small};
    font-weight: ${theme.text.weight.bold};
    color: ${theme.colors.white.default};

    ${theme.media.tablet} {
      margin-bottom: ${theme.spacing.medium};
    }
  }`,
  text: css`
    font-weight: ${theme.text.weight.extraBold};
    font-size: ${theme.text.size.body};
    text-align: center;
  `,
  items: css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);
    gap: ${convertPxToRem(20)};
    ${theme.media.tablet} {
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: repeat(2, 1fr);
      width: 100%;
    }
  `,
  partners: css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${convertPxToRem(20)};
    position: relative;

    &::before,
    &::after {
      content: "";
      position: absolute;
      background-color: ${theme.colors.grey.borderPrimary};
    }

    &:not(:nth-last-of-type(-n + 2))::before {
      bottom: ${convertPxToRem(-10)};
      width: 155px;
      height: 1px;
      transform: translateY(-50%);
    }

    &:nth-of-type(2n)::after {
      top: 0;
      left: ${convertPxToRem(-10)};
      width: 1px;
      height: 80px;
      transform: translateX(-50%);
    }

    ${theme.media.tablet} {
      &:not(:nth-last-of-type(-n + 2))::before {
        left: unset;
        width: 224px;
        height: 1px;
      }

      :nth-last-child(-n + 5)::before {
        content: none;
      }

      ::after {
        top: 0;
        left: unset;
        right: 103%;
        width: 1px;
        height: 80px;
        transform: translateX(-50%);
        margin: auto;
      }

      &:nth-of-type(2n)::after {
        left: unset;
        right: 103%;
      }

      &:first-child::after,
      &:nth-child(6)::after {
        content: none;
      }
    }
  `,
};

export default PartnersSection;
