import { css } from "@emotion/react";

import TextHighlighter from "@/core/components/common/TextHighlighter";
import theme from "@/core/styles/theme";

import { tradingFeatures } from "./constants";
import { convertPxToRem } from "@/core/utils/convertPxToRem";

const TradingFeatures = () => {
  return (
    <div css={cssStyles.container}>
      {tradingFeatures.map(({ title, paragraph, highlight }) => (
        <article key={title} css={cssStyles.article}>
          <h4 css={cssStyles.title}>{title}</h4>
          <p>
            <TextHighlighter
              text={paragraph}
              highlight={highlight}
              color={theme.colors.pink}
              styles={cssStyles.content}
            />
          </p>
        </article>
      ))}
    </div>
  );
};

const cssStyles = {
  container: css`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 auto;

    ${theme.media.tablet} {
      max-width: 39rem;
      width: 100%;
      justify-content: space-between;
    }

    ${theme.media.desktop} {
      max-width: 55.5rem;
    }
  `,
  article: css`
    margin-bottom: ${theme.spacing.extraHuge};
    max-width: 20rem;
    text-align: center;

    &:first-of-type {
      margin-bottom: ${theme.spacing.extra};
    }

    ${theme.media.tablet} {
      max-width: 16.25rem;

      &:first-of-type {
        max-width: 17.5rem;
      }
    }

    ${theme.media.desktop} {
      max-width: 25.5rem;
      &:first-of-type {
        max-width: 25.5rem;
      }
    }
  `,
  title: css`
    margin-bottom: ${theme.spacing.normal};
    font-size: ${theme.text.size.small};
    color: ${theme.colors.white.default};
    font-weight: ${theme.text.weight.regular};

    ${theme.media.tablet} {
      margin: 0 auto ${theme.spacing.large};
      font-weight: ${theme.text.weight.medium};
      font-size: ${theme.text.size.medium};
      max-width: 12.5rem;
    }
  `,
  content: css`
    line-height: ${convertPxToRem(22)};
    font-size: ${theme.text.size.extraTiny};

    ${theme.media.tablet} {
      line-height: ${convertPxToRem(26)};
      font-size: ${theme.text.size.small};
    }
  `,
};

export default TradingFeatures;
