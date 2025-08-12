"use client";

import { useEffect, useState } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ListAchievementsStats from "../ListAchievementsStats/ListAchievementsStats";
import { achievementsStatsTypes } from "@/types/achievements";
import ItemAchievementsStats from "../ItemAchievementsStats/ItemAchievementsStats";

import "swiper/scss";
import "swiper/scss/pagination";
import scss from "./ResponsiveSwiper.module.scss";

interface ResponsiveSwiperProps {
  slides: achievementsStatsTypes[];
  enableBelow?: number;
  enableAbove?: number;
}

export default function ResponsiveSwiper({
  slides,
  enableBelow,
  enableAbove,
}: ResponsiveSwiperProps) {
  const [isEnabled, setIsEnabled] = useState(true);

  useEffect(() => {
    const checkWidth = () => {
      const width = window.innerWidth;
      if (enableBelow !== undefined) {
        setIsEnabled(width < enableBelow);
      } else if (enableAbove !== undefined) {
        setIsEnabled(width > enableAbove);
      } else {
        setIsEnabled(true);
      }
    };

    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, [enableBelow, enableAbove]);

  if (!isEnabled) {
    return <ListAchievementsStats />;
  }

  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={8}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className={scss.mySwiper}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.itemNumber}>
            <ItemAchievementsStats
              itemNumber={slide.itemNumber}
              statsCount={slide.statsCount}
              textStats={slide.textStats}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
