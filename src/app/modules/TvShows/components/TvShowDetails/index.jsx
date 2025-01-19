import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { Col, Image, Row } from "antd";
import Title from "antd/es/typography/Title";

import Summary from "./components/Summary";
import { IMAGE_BASE_URL } from "../../../../config/constants";
import TvShowDetailsService from "../../api";
import useDeviceSize from "../../../../hooks/useDeviceSize";
import Loader from "../../../../components/AppLoader";
import CastDetails from "../../../../components/CastDetails";
import LabelValue from "../../../../components/LabelValue";

const TvShowDetails = () => {
  const { isOnMobile } = useDeviceSize();
  const params = useParams();

  const [tvShowDetails, setTvShowDetails] = useState(null);
  const [tvShowCredits, setTvShowCredits] = useState(null);
  const [isTvShowDetailsLoading, setIsTvShowDetailsLoading] = useState(false);
  const [isTvShowCreditsLoading, setIsTvShowCreditsLoading] = useState(false);

  useEffect(() => {
    getTvShowDetailsApi(params.id);
    getTvShowCreditsApi(params.id);
  }, []);

  const additionalInfoList = [
    {
      label: "Status",
      value: tvShowDetails?.status,
    },
    {
      label: "Total Seasons",
      value: tvShowDetails?.number_of_seasons,
    },
    {
      label: "Total Episodes",
      value: tvShowDetails?.number_of_episodes,
    },
    {
      label: "Production Company",
      value: tvShowDetails?.production_companies[0].name,
    },
    {
      label: "Networks",
      value: tvShowDetails?.networks.map((network) => (
        <img
          width={80}
          style={{ marginRight: 12 }}
          key={network.id}
          src={IMAGE_BASE_URL + network.logo_path}
        />
      )),
    },
  ];

  const getTvShowDetailsApi = async (id) => {
    setIsTvShowDetailsLoading(true);
    try {
      const response = await TvShowDetailsService.getTvShowDetails(id);
      setTvShowDetails(response?.data);
      setIsTvShowDetailsLoading(false);
    } catch (error) {
      setIsTvShowDetailsLoading(false);
      //   showToastNotification("Fetching Notifications Details failed", "error");
      return error;
    }
  };

  const getTvShowCreditsApi = async (id) => {
    setIsTvShowCreditsLoading(true);
    try {
      const response = await TvShowDetailsService.getTvShowCredits(id);
      setTvShowCredits(response?.data);
      setIsTvShowCreditsLoading(false);
    } catch (error) {
      setIsTvShowCreditsLoading(false);
      //   showToastNotification("Fetching Notifications Details failed", "error");
      return error;
    }
  };

  return (
    <>
      {tvShowDetails && !isTvShowDetailsLoading ? (
        <div
          style={{
            height: "100%",
            width: "100%",
            backgroundImage: `linear-gradient(rgba(109, 108, 108, 0.7), rgba(0, 0, 0, 0.9)), url(${
              IMAGE_BASE_URL + tvShowDetails.backdrop_path
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
                  src={IMAGE_BASE_URL + tvShowDetails.poster_path}
                  style={{ borderRadius: 12 }}
                  alt=""
                />
              </Col>

              <Col xs={24} sm={24} md={24} lg={12} xl={15}>
                {!isTvShowDetailsLoading && tvShowDetails && (
                  <Summary data={tvShowDetails} />
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

            {isTvShowCreditsLoading ? (
              <Loader />
            ) : (
              <CastDetails data={tvShowCredits} />
            )}
          </Col>

          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <div style={{ paddingInline: 16, paddingBlock: 24 }}>
              {tvShowDetails &&
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

export default TvShowDetails;
