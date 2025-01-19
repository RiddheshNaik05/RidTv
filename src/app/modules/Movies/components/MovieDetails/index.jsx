import { useEffect, useState } from "react";

import dayjs from "dayjs";
import { useParams } from "react-router-dom";
import { Col, Image, Progress, Row, Space } from "antd";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";

import MovieDetailsService from "../../api";
import { IMAGE_BASE_URL } from "../../../../config/constants";
import { COLORS } from "../../../../utils/colors";
import { formatNumber } from "../../../../utils";
import useDeviceSize from "../../../../hooks/useDeviceSize";
import Loader from "../../../../components/AppLoader";
import CastDetails from "../../../../components/CastDetails";
import LabelValue from "../../../../components/LabelValue";
import Summary from "./components/Summary";

const MovieDetails = () => {
  const { isOnMobile } = useDeviceSize();
  const params = useParams();

  const [movieDetails, setMovieDetails] = useState(null);
  const [movieCredits, setMovieCredits] = useState(null);
  const [isMovieDetailsLoading, setIsMovieDetailsLoading] = useState(false);
  const [isMovieCreditsLoading, setIsMovieCreditsLoading] = useState(false);

  useEffect(() => {
    getMovieDetailsApi(params.id);
    getMovieCreditsApi(params.id);
  }, []);

  const additionalInfoList = [
    {
      label: "Status",
      value: movieDetails?.status,
    },
    {
      label: "Budget",
      value: `$${movieDetails && formatNumber(movieDetails?.budget)}`,
    },
    {
      label: "Revenue",
      value: `$${movieDetails && formatNumber(movieDetails?.revenue)}`,
    },
    {
      label: "Production Company",
      value: movieDetails?.production_companies[0].name,
    },
  ];

  const getMovieDetailsApi = async (id) => {
    setIsMovieDetailsLoading(true);
    try {
      const response = await MovieDetailsService.getMovieDetails(id);
      setMovieDetails(response?.data);
      setIsMovieDetailsLoading(false);
    } catch (error) {
      setIsMovieDetailsLoading(false);
      //   showToastNotification("Fetching Notifications Details failed", "error");
      return error;
    }
  };

  const getMovieCreditsApi = async (id) => {
    setIsMovieCreditsLoading(true);
    try {
      const response = await MovieDetailsService.getMovieCredits(id);
      setMovieCredits(response?.data);
      setIsMovieCreditsLoading(false);
    } catch (error) {
      setIsMovieCreditsLoading(false);
      //   showToastNotification("Fetching Notifications Details failed", "error");
      return error;
    }
  };

  return (
    <>
      {movieDetails && !isMovieDetailsLoading ? (
        <div
          style={{
            height: "100%",
            width: "100%",
            backgroundImage: `linear-gradient(rgba(109, 108, 108, 0.7), rgba(0, 0, 0, 0.9)), url(${
              IMAGE_BASE_URL + movieDetails.backdrop_path
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            style={{
              paddingInline: isOnMobile ? 16 : "15%",
              paddingBlock: 16,
            }}
          >
            <Row gutter={16}>
              <Col
                xs={24}
                sm={24}
                md={24}
                lg={12}
                xl={9}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Image
                  width={isOnMobile ? "100%" : 320}
                  height={450}
                  src={IMAGE_BASE_URL + movieDetails.poster_path}
                  style={{ borderRadius: 12 }}
                  alt=""
                />
              </Col>

              <Col xs={24} sm={24} md={24} lg={12} xl={15}>
                {!isMovieDetailsLoading && movieDetails && (
                  <Summary data={movieDetails} />
                )}
              </Col>
            </Row>
          </div>
        </div>
      ) : (
        <Loader />
      )}

      <div
        style={{
          paddingInline: isOnMobile ? 16 : "15%",
          paddingBlock: 16,
        }}
      >
        <Row gutter={16}>
          <Col xs={24} sm={24} md={12} lg={16} xl={16}>
            <Title level={3}>Top Billed Cast</Title>

            {isMovieCreditsLoading ? (
              <Loader />
            ) : (
              <CastDetails data={movieCredits} />
            )}
          </Col>

          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <div style={{ paddingInline: 16, paddingBlock: 24 }}>
              {movieDetails &&
                additionalInfoList.map((info) => (
                  <LabelValue
                    key={info.label}
                    label={info.label}
                    value={info.value}
                    placement="vertical"
                  />
                ))}
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default MovieDetails;
