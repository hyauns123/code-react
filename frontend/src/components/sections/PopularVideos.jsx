import { useState, Fragment, memo } from "react";

//components
import SectionSlider from "../slider/SectionSlider";
import CardStyle from "../cards/CardStyle";

//static data
import { populerSlider } from "../../StaticData/data";

// the hook
import { useTranslation } from "react-i18next";

const PopularVideos = memo(() => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <SectionSlider
        title={t("form.popular_videos")}
        list={populerSlider}
        className="recommended-block section-top-spacing"
      >
        {(data) => (
          <CardStyle
            image={data.image}
            title={data.title}
            movieTime={data.movieTime}
            watchlistLink="/playlist"
            link="/movies-detail"
          />
        )}
      </SectionSlider>
    </Fragment>
  );
});

PopularVideos.displayName = "PopularVideos";
export default PopularVideos;
