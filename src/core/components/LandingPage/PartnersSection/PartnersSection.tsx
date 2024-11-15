import React from "react";
import Image from "next/image";
import { css } from "@emotion/react";

import SectionWrapper from "@/core/components/common/SectionWrapper";
import theme from "@/core/styles/theme";
import { convertPxToRem } from "@/core/utils/convertPxToRem";
import useWindowWidth from "@/core/hooks/useWindowWidth";

import { items, text } from "./constants";

const PartnersSection = () => {
  const width = useWindowWidth();
  const defaultWidth = 1279;
  const isWidthGreater = width != null ? width > defaultWidth : false;

  return (
    <SectionWrapper styles={cssStyles.container}>
      <div>
        <div css={cssStyles.titleWrapper}>
          <h2 css={cssStyles.title}>Investors</h2>
        </div>
        <div css={cssStyles.items}>
          {isWidthGreater ? (
            <>
              <div css={cssStyles.topItems}>
                {items.slice(0, 2).map((item, id) => (
                  <div key={id} css={cssStyles.item}>
                    <Image
                      src={item.url}
                      alt="investor-logo"
                      width={100}
                      height={40}
                    />
                  </div>
                ))}
              </div>
              <div css={cssStyles.bottomItems}>
                {items.slice(2).map((item, id) => (
                  <div key={id} css={cssStyles.item}>
                    <Image
                      src={item.url}
                      alt="investor-logo"
                      width={100}
                      height={40}
                    />
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              {items.map((item, id) => (
                <div key={id} css={cssStyles.item}>
                  <Image
                    src={item.url}
                    alt="trade-platform"
                    width={100}
                    height={40}
                    css
                  />
                </div>
              ))}
            </>
          )}
        </div>
      </div>
      <div>
        <div css={cssStyles.titleWrapper}>
          <h2 css={cssStyles.title}>Angels</h2>
        </div>
        <div css={[cssStyles.items, cssStyles.angels]}>
          {text.map((item) => (
            <div key={`${item}`} css={[cssStyles.item, cssStyles.text]}>
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

const cssStyles = {
  container: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${convertPxToRem(15)} 0 ${convertPxToRem(70)} 0;
    gap: 100px;
    padding-bottom: ${convertPxToRem(100)};
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
    color: ${theme.colors.grey.light};

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
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: ${convertPxToRem(320)};
    gap: 10px;

    ${theme.media.tablet} {
      gap: 20px;
    }
  `,
  item: css`
    width: ${convertPxToRem(155)};
    height: ${convertPxToRem(56)};
    flex: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    ${theme.media.tablet} {
      width: ${convertPxToRem(224)};
      height: ${convertPxToRem(80)};
    }
  `,
  angels: css`
    flex-direction: column;
    align-items: center;
    ${theme.media.tablet} {
      width: 100%;
      flex-direction: row;
      align-items: unset;
    }
  `,
  topItems: css`
    ${theme.media.tablet} {
      display: flex;
      justify-content: center;
    }
  `,
  bottomItems: css`
    ${theme.media.tablet} {
      display: flex;
      justify-content: center;
    }
  `,
};

export default PartnersSection;
