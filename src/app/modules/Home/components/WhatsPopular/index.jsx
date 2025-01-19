import { Link, useNavigate } from "react-router-dom";
import { Button, Image, Row, Segmented, Typography } from "antd";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";

import APPLICATION_ROUTES_URLS from "../../../../routing/config/appsConfig";
import { IMAGE_BASE_URL } from "../../../../config/constants";
import Loader from "../../../../components/AppLoader";
import "../../style.css";

const options = [
  {
    label: "Movies",
    value: "movie",
  },
  {
    label: "TV Shows",
    value: "tv",
  },
];

const WhatsPopularHome = ({ data, popularType, setPopularType, isLoading }) => {
  const navigate = useNavigate();

  const getType = (type) => {
    switch (type) {
      case "Movies":
        return "movies";

      case "TV Shows":
        return "tv-shows";

      default:
        break;
    }
  };
  return (
    <div style={{ paddingInline: "15%", paddingBlock: 16 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography.Title level={1}>What's Popular</Typography.Title>

        <Segmented
          size="large"
          options={options.map((option) => option.label)}
          value={popularType}
          onChange={(newValue) => setPopularType(newValue)}
        />
      </div>

      {!isLoading ? (
        <div
          style={{ width: "100%", overflowX: "auto", scrollbarWidth: "thin" }}
        >
          <Row style={{ flexWrap: "nowrap", paddingRight: "8px" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              {data &&
                data?.map((popular) => (
                  <Link
                    to={`/${getType(popularType)}/${popular.id}`}
                    key={popular.id}
                  >
                    <div
                      style={{
                        height: "100%",
                        marginRight: "16px",
                      }}
                    >
                      <div>
                        <Image
                          loading="lazy"
                          preview={false}
                          alt={popular.original_name || popular.original_title}
                          src={`${IMAGE_BASE_URL}${popular.poster_path}`}
                          style={{
                            borderRadius: 16,
                            height: "300px",
                            width: "200px",
                            cursor: "pointer",
                          }}
                        />

                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            paddingBlock: 8,
                            paddingInline: 4,
                          }}
                        >
                          <Title
                            level={5}
                            style={{ margin: 0, fontSize: 14, fontWeight: 700 }}
                          >
                            {popular.name || popular.title}
                          </Title>
                          <Text
                            style={{
                              fontSize: 12,
                              fontWeight: 400,
                              color: "grey",
                            }}
                          >
                            {popular.first_air_date || popular.release_date}
                          </Text>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              <Button
                size="large"
                shape="round"
                style={{ paddingInlineEnd: 16 }}
                onClick={() =>
                  navigate(
                    popularType === "Movies"
                      ? APPLICATION_ROUTES_URLS.MOVIES
                      : APPLICATION_ROUTES_URLS.TV_SHOWS
                  )
                }
              >
                View All
              </Button>
            </div>
          </Row>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default WhatsPopularHome;
