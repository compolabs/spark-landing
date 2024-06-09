import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { css } from "@emotion/react";

import "swiper/css/free-mode";
import { useMobileWindowWidth } from "@/core/hooks/useMobileWindowWidth";
import useWindowWidth from "@/core/hooks/useWindowWidth";
import theme from "@/core/styles/theme";
import { convertPxToRem } from "@/core/utils/convertPxToRem";

import { getSlideNumber, sliderCards } from "./constants";
import LinkButton from "../../common/LinkButton";

export const CarouselPosts = () => {
  const isMobile = useMobileWindowWidth();
  const currentWindowWidth = useWindowWidth();

  return (
    <div
      css={{
        minWidth: convertPxToRem(330),
        padding: `0 0 0 ${isMobile ? theme.spacing.medium : theme.spacing.custom[40]}`,
      }}
    >
      <Swiper
        spaceBetween={isMobile ? 10 : 20}
        slidesPerView={getSlideNumber(currentWindowWidth ?? 0)}
        scrollbar={{ draggable: true }}
      >
        {sliderCards.map((card) => (
          <SwiperSlide key={card.title}>
            <LinkButton
              type="external"
              data={{
                label: card.label,
                href: card.href,
              }}
            >
              <div css={cssStyles.wrapper}>
                <div css={card.isSquare ? cssStyles.imgSquare : cssStyles.img}>
                  <Image src={card.imgSource} alt="bg" fill priority />
                </div>
                <p css={cssStyles.title}>{card.title}</p>
              </div>
            </LinkButton>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const cssStyles = {
  wrapper: css`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
  `,
  img: css`
    position: relative;
    width: ${convertPxToRem(214)};
    height: ${convertPxToRem(110)};
    margin-bottom: ${theme.spacing.normal};

    ${theme.media.tablet} {
      width: ${convertPxToRem(265)};
      height: ${convertPxToRem(136)};
      margin-bottom: ${theme.spacing.medium};
    }

    ${theme.media.desktop} {
      width: ${convertPxToRem(344)};
      height: ${convertPxToRem(176)};
      margin-bottom: ${theme.spacing.medium};
    }
  `,
  imgSquare: css`
    position: relative;
    width: ${convertPxToRem(214)};
    height: ${convertPxToRem(214)};
    margin-bottom: ${theme.spacing.normal};

    ${theme.media.tablet} {
      width: ${convertPxToRem(265)};
      height: ${convertPxToRem(265)};
      margin-bottom: ${theme.spacing.medium};
    }

    ${theme.media.desktop} {
      width: ${convertPxToRem(345)};
      height: ${convertPxToRem(345)};
      margin-bottom: ${theme.spacing.medium};
    }
  `,
  title: css`
    text-align: start;
    max-width: ${convertPxToRem(203)};
    font-size: ${theme.text.size.extraTiny};
    font-weight: ${theme.text.weight.regular};
    line-height: ${convertPxToRem(22)};

    ${theme.media.tablet} {
      font-size: ${theme.text.size.small};
      line-height: ${convertPxToRem(26)};
    }
  `,
};
