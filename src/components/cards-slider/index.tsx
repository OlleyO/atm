import { CreditCard as CreditCardData } from "../../core/types";
import styled from "@mui/system/styled";
import styles from "./styles.module.scss";

import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import Swiper, { Navigation } from "swiper";
import CreditCard from "../credit-card";
import { useRef } from "react";
import React from "react";

import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { IconButton } from "@mui/material";

Swiper.use([Navigation]);

interface Props {
  creditCards: CreditCardData[];
  activeSlide: number;
  onSlideChange: (swiper: Swiper) => void;
  initialSlide?: number;
}

const StyledButton = styled(IconButton)({
  "&": {
    color: "#fff",
    fontSize: "rem(12px)",
  },
});

const CardsSlider: React.FC<Props> = ({
  creditCards,
  activeSlide,
  onSlideChange,
  initialSlide = 1,
}) => {
  const navigationPrevRef = useRef<HTMLButtonElement>(null);
  const navigationNextRef = useRef<HTMLButtonElement>(null);

  const onBeforeInit = (Swiper: Swiper): void => {
    if (typeof Swiper.params.navigation !== "boolean") {
      const navigation = Swiper.params.navigation;
      navigation.prevEl = navigationPrevRef.current;
      navigation.nextEl = navigationNextRef.current;
    }
  };

  return (
    <div className={styles["credit-cards-swiper"]}>
      <SwiperComponent
        onSlideChange={onSlideChange}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={onBeforeInit}
        centeredSlides
        slidesPerView="auto"
        spaceBetween={20}
        initialSlide={initialSlide}
      >
        {creditCards.map((creditCard, index) => (
          <SwiperSlide className={styles.slider} key={creditCard.number}>
            <CreditCard active={index === activeSlide} data={creditCard} />
          </SwiperSlide>
        ))}

        <div className={styles.buttons}>
          <StyledButton
            ref={navigationPrevRef}
            className={styles["swiper-slide-prev"]}
            disabled={activeSlide === 0}
          >
            <ArrowBackIosOutlinedIcon />
          </StyledButton>
          <div className={styles.name}>{creditCards[activeSlide].name}</div>
          <StyledButton
            ref={navigationNextRef}
            className={styles["swiper-slide-next"]}
            disabled={activeSlide === creditCards.length - 1}
          >
            <ArrowForwardIosOutlinedIcon />
          </StyledButton>
        </div>
      </SwiperComponent>
    </div>
  );
};

export default CardsSlider;
