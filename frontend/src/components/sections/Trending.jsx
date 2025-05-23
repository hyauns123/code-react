import { Fragment, memo, useState } from "react";

//react-bootstrap
import { Container, Row, Tab, Nav } from "react-bootstrap";

//react-router-dom
import { Link } from "react-router-dom";

//componemts
import EpisodeCard from "../cards/EpisodeCard";

//function
import { generateImgPath } from "../../StaticData/data";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";

//react fslight-box
import FsLightbox from "fslightbox-react";

// the hook
import { useTranslation } from "react-i18next";

const Trending = memo(() => {
  const { t } = useTranslation();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const [toggler, setToggler] = useState(false);

  const [trendingSlider] = useState([
    {
      image: generateImgPath("/assets/images/movies/ott1.webp"),
    },
    {
      image: generateImgPath("/assets/images/movies/ott2.webp"),
    },
    {
      image: generateImgPath("/assets/images/movies/ott3.webp"),
    },
    {
      image: generateImgPath("/assets/images/movies/banner1.webp"),
    },
    {
      image: generateImgPath("/assets/images/movies/banner2.webp"),
    },
    {
      image: generateImgPath("/assets/images/movies/banner3.webp"),
    },
  ]);

  const [episode] = useState([
    {
      image: "/assets/images/tv-show/episodes/01.webp",
      showEpisod: "S01E01",
      episodDate: `${t('detail_page.october')} 1, 2022`,
      episodTime: "45min",
      episodTitle: "detail_page.episode1",
    },
    {
      image: "/assets/images/tv-show/episodes/02.webp",
      showEpisod: "S01E02",
      episodDate: `${t('detail_page.october')}  8, 2022`,
      episodTime: "35min",
      episodTitle: "detail_page.episode2",
    },
    {
      image: "/assets/images/tv-show/episodes/03.webp",
      showEpisod: "S01E03",
      episodDate: `${t('detail_page.october')}  15, 2022`,
      episodTime: "36min",
      episodTitle: "detail_page.episode3",
    },
    {
      image: "/assets/images/tv-show/episodes/04.webp",
      showEpisod: "S01E04",
      episodDate: `${t('detail_page.october')}  22, 2022`,
      episodTime: "41min",
      episodTitle: "detail_page.episode4",
    },
    {
      image: "/assets/images/tv-show/episodes/05.webp",
      showEpisod: "S01E05",
      episodDate: `${t('detail_page.october')} 22, 2022`,
      episodTime: "41min",
      episodTitle: "detail_page.episode5",
    },
  ]);
  return (
    <Fragment>
      <section className="tranding-tab-slider section-padding">
        <Container fluid>
          <Row className="m-0 p-0">
            <div
              id="iq-trending"
              className="s-margin iq-tvshow-tabs iq-trending-tabs overflow-hidden"
            >
              <div className="d-flex align-items-center justify-content-between px-0 px-md-3">
                <h5 className="main-title text-capitalize mb-0">
                  {t("home.trending")}
                </h5>
              </div>
              <div className="trending-contens position-relative">
                <div
                  id="gallery-top"
                  className="swiper gallery-thumbs"
                  data-swiper="gallery-top"
                >
                  <Swiper
                    slidesPerView={5}
                    thumbs={{
                      swiper:
                        thumbsSwiper && !thumbsSwiper.destroyed
                          ? thumbsSwiper
                          : null,
                    }}
                    modules={[Navigation, Thumbs]}
                    centeredSlides={true}
                    centeredSlidesBounds={true}
                    breakpoints={{
                      320: { slidesPerView: 1 },
                      550: { slidesPerView: 2 },
                      991: { slidesPerView: 3 },
                      1400: { slidesPerView: 4 },
                      1500: { slidesPerView: 5 },
                    }}
                    watchSlidesProgress={true}
                    loop={true}
                    className="list-inline p-0 m-0 trending-slider-nav align-items-center"
                  >
                    {trendingSlider.map((data) => (
                      <SwiperSlide
                        key={data.image + "thumb"}
                        as="li"
                        className="swiper-slide"
                      >
                        <Link to="#">
                          <div className="movie-swiper position-relative">
                            <img src={data.image} alt="img" />
                          </div>
                        </Link>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <Swiper
                  onSwiper={setThumbsSwiper}
                  slidesPerView={1}
                  modules={[Navigation, Thumbs]}
                  watchSlidesProgress={true}
                  loop={true}
                  allowTouchMove={false}
                  navigation={{
                    prevEl: ".swiper-button-prev",
                    nextEl: ".swiper-button-next",
                  }}
                  className="list-inline p-0 m-0 d-flex align-items-center trending-slider trending-tab-slider"
                >
                  {trendingSlider.map((data) => (
                    <SwiperSlide
                      key={data.image + "main"}
                      as="li"
                      className="slider-big-img-1 p-0"
                    >
                      <div className="trending-tab-slider-image">
                        <img src={data.image} alt="trending-tab-slider-image" />
                      </div>
                      <div className="tranding-block position-relative">
                        <div className="trending-custom-tab">
                          <div className="tab-title-info position-relative">
                            <div className="tranding-block position-relative">
                              <div className="trending-custom-tab">
                                <div className="tab-title-info position-relative">
                                  <Tab.Container
                                    id="left-tabs-example"
                                    defaultActiveKey="first"
                                  >
                                    <Nav
                                      variant="pills"
                                      className="trending-pills iq-custom-tab d-flex nav nav-pills justify-content-center align-items-center text-center list-inline"
                                    >
                                      <Nav.Item>
                                        <Nav.Link eventKey="first">
                                          {t("home.overview")}
                                        </Nav.Link>
                                      </Nav.Item>
                                      <Nav.Item>
                                        <Nav.Link eventKey="second">
                                          {t("home.episodes")}
                                        </Nav.Link>
                                      </Nav.Item>
                                      <Nav.Item>
                                        <Nav.Link eventKey="three">
                                          {t("home.trailers")}
                                        </Nav.Link>
                                      </Nav.Item>
                                      <Nav.Item>
                                        <Nav.Link eventKey="four">
                                          {t("home.similar_like")}
                                        </Nav.Link>
                                      </Nav.Item>
                                    </Nav>
                                    <Tab.Content className="tab-content trending-content">
                                      <Tab.Pane eventKey="first">
                                        <div className="trending-info align-items-center w-100 animate__animated animate__fadeInUp iq-ltr-direction">
                                          <h1 className="trending-text big-title text-uppercase texture-text">
                                            {t("home.hero_camp")}
                                          </h1>
                                          <div className="d-flex align-items-center text-white text-detail flex-wrap">
                                            <span>
                                              3 {t("episode_page.seasons")}
                                            </span>
                                            <span className="trending-year">
                                              2023
                                            </span>
                                          </div>
                                          <div className="d-flex align-items-center flex-wrap series mb-4 gap-3">
                                            <router-link to="#">
                                              <img
                                                src="/assets/images/movies/trending-label.webp"
                                                className="img-fluid"
                                                alt=""
                                              />
                                            </router-link>
                                            <span className="text-gold">
                                              #2 {t("home.series_today")}
                                            </span>
                                          </div>
                                          <p className="trending-dec line-count-3">
                                            {t("ott_home.content_here")}.
                                          </p>
                                          <div className="p-btns">
                                            <div className="iq-button">
                                              <Link
                                                to="/movies-detail"
                                                className="btn text-uppercase position-relative"
                                              >
                                                <span className="button-text">
                                                  {t("ott_home.play_now")}
                                                </span>
                                                <i className="fa-solid fa-play"></i>
                                              </Link>
                                            </div>
                                          </div>
                                          <div className="trending-list mt-4">
                                            <div className="text-primary title">
                                              {t("home.starring")}:{" "}
                                              <span className="text-body">
                                                {t(
                                                  "home.wagner_moura"
                                                )}
                                              </span>
                                            </div>
                                            <div className="text-primary title">
                                              {t("ott_home.genres")}:{" "}
                                              <span className="text-body">
                                                {t(
                                                  "home.crime_action"
                                                )}
                                              </span>
                                            </div>
                                            <div className="text-primary title">
                                              {t("home.this_is")}:{" "}
                                              <span className="text-body">
                                                {t("home.violent_forceful")}
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </Tab.Pane>
                                      <Tab.Pane eventKey="second">
                                        <div className="trending-info align-items-center w-100 animate__animated animate__fadeInUp iq-ltr-direction">
                                          <h1 className="trending-text big-title text-uppercase texture-text">
                                            {t("home.hero_camp")}
                                          </h1>
                                          <div className="d-flex align-items-center text-white text-detail flex-wrap mb-4">
                                            <span className="season_date ms-2">
                                              {" "}
                                              2 {t("episode_page.seasons")}{" "}
                                            </span>
                                            <span className="trending-year">
                                              Feb 2019
                                            </span>
                                          </div>
                                          <div className="iq-custom-select d-inline-block sea-epi mb-4">
                                            <select
                                              name="cars"
                                              className="form-control select2-basic-single js-states season-select"
                                            >
                                              <option value="season1">
                                                {t("episode_page.seasons")}1
                                              </option>
                                              <option value="season2">
                                                {t("episode_page.seasons")}2
                                              </option>
                                              <option value="season3">
                                                {t("episode_page.seasons")}3
                                              </option>
                                            </select>
                                          </div>
                                          <div
                                            className="position-relative swiper swiper-card streamit-block"
                                            data-slide="4"
                                            data-laptop="3"
                                            data-tab="2"
                                            data-mobile="2"
                                            data-mobile-sm="1"
                                            data-autoplay="false"
                                            data-loop="false"
                                            data-navigation="true"
                                            data-pagination="true"
                                          >
                                            <Swiper
                                              className="p-0 m-0 list-inline"
                                              slidesPerView={4}
                                              navigation={{
                                                prevEl: "#prev",
                                                nextEl: "#next",
                                              }}
                                              modules={[Navigation]}
                                            >
                                              {episode.map((edata, index) => (
                                                <SwiperSlide
                                                  as="li"
                                                  key={index}
                                                  className="swiper-slide"
                                                >
                                                  <EpisodeCard
                                                    link={edata.link}
                                                    image={edata.image}
                                                    showEpisod={
                                                      edata.showEpisod
                                                    }
                                                    episodDate={
                                                      edata.episodDate
                                                    }
                                                    episodTime={
                                                      edata.episodTime
                                                    }
                                                    episodTitle={
                                                      edata.episodTitle
                                                    }
                                                  ></EpisodeCard>
                                                </SwiperSlide>
                                              ))}
                                              <div
                                                id="next"
                                                className="swiper-button swiper-button-next"
                                              ></div>
                                              <div
                                                id="perv"
                                                className="swiper-button swiper-button-prev"
                                              ></div>
                                            </Swiper>
                                          </div>
                                        </div>
                                      </Tab.Pane>
                                      <Tab.Pane eventKey="three">
                                        <div className="trending-info align-items-center w-100 animate__animated animate__fadeInUp iq-ltr-direction text-center">
                                          <h3 className="trending-text big-title text-uppercase texture-text mt-2">
                                            {t("home.watch_trailer")}
                                          </h3>
                                          <div className="episodes-contens mt-5">
                                            <div className="tab-watch-trailer-container d-inline-block rounded-3 overflow-hidden">
                                              <div className="tab-watch-trailer position-relative rounded-3 overflow-hidden">
                                                <img
                                                  src="/assets/images/tv-show/season/01.webp"
                                                  className="trailer-image"
                                                  alt="trailer-image"
                                                />
                                                <Link
                                                  to="#"
                                                  className="video-open playbtn text-decoration-none"
                                                  tabIndex="0"
                                                  onClick={() =>
                                                    setToggler(!toggler)
                                                  }
                                                >
                                                  <svg
                                                    version="1.1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    x="0px"
                                                    y="0px"
                                                    width="80px"
                                                    height="80px"
                                                    viewBox="0 0 213.7 213.7"
                                                    enableBackground="new 0 0 213.7 213.7"
                                                    xmlSpace="preserve"
                                                  >
                                                    <polygon
                                                      className="triangle"
                                                      fill="none"
                                                      strokeWidth="7"
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                      strokeMiterlimit="10"
                                                      points="73.5,62.5 148.5,105.8 73.5,149.1 "
                                                    ></polygon>
                                                    <circle
                                                      className="circle"
                                                      fill="none"
                                                      strokeWidth="7"
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                      strokeMiterlimit="10"
                                                      cx="106.8"
                                                      cy="106.8"
                                                      r="103.3"
                                                    ></circle>
                                                  </svg>
                                                  <span className="w-trailor text-uppercase">
                                                    {" "}
                                                    {t(
                                                      "home.watch_trailer"
                                                    )}{" "}
                                                  </span>
                                                </Link>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </Tab.Pane>
                                      <Tab.Pane eventKey="four">
                                        <div className="trending-info align-items-center w-100 animate__animated animate__fadeInUp iq-ltr-direction">
                                          <h3 className="trending-text big-title text-uppercase texture-text mb-5">
                                            {t("ott_home.recommended_for_you")}
                                          </h3>
                                          <div
                                            className="position-relative swiper swiper-card streamit-block"
                                            data-slide="4"
                                            data-laptop="3"
                                            data-tab="2"
                                            data-mobile="1"
                                            data-mobile-sm="1"
                                            data-autoplay="false"
                                            data-loop="false"
                                            data-navigation="true"
                                            data-pagination="true"
                                          >
                                            <Swiper
                                              className="p-0 swiper-wrapper m-0 list-inline"
                                              slidesPerView="4"
                                            >
                                              {episode.map((eData, index) => (
                                                <SwiperSlide
                                                  as="li"
                                                  key={index}
                                                  className="swiper-slide"
                                                >
                                                  <EpisodeCard
                                                    link={eData.link}
                                                    image={eData.image}
                                                    showEpisod={
                                                      eData.showEpisod
                                                    }
                                                    episodDate={
                                                      eData.episodDate
                                                    }
                                                    episodTime={
                                                      eData.episodTime
                                                    }
                                                    episodTitle={
                                                      eData.episodTitle
                                                    }
                                                  ></EpisodeCard>
                                                </SwiperSlide>
                                              ))}
                                            </Swiper>
                                            <div className="swiper-button swiper-button-next"></div>
                                            <div className="swiper-button swiper-button-prev"></div>
                                          </div>
                                        </div>
                                      </Tab.Pane>
                                    </Tab.Content>
                                  </Tab.Container>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </Row>
        </Container>
      </section>
      <FsLightbox
        toggler={toggler}
        sources={["/assets/images/video/trailer.mp4"]}
      />
    </Fragment>
  );
});

Trending.displayName = "Trending";
export default Trending;
