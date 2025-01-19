import { Link, useNavigate } from "react-router-dom";
import { Button, Image, Row, Segmented, Typography } from "antd";
import Text from "antd/es/typography/Text";
import Title from "antd/es/typography/Title";

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

const TopRatedHome = ({ data, topRatedType, setTopRatedType, isLoading }) => {
  const navigate = useNavigate();

  return (
    <div style={{ paddingInline: "15%", paddingBlock: 16 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography.Title level={1}>Top Rated</Typography.Title>

        <Segmented
          size="large"
          options={options.map((option) => option.label)}
          value={topRatedType}
          onChange={(newValue) => setTopRatedType(newValue)}
        />
      </div>

      {!isLoading ? (
        <div
          style={{ width: "100%", overflowX: "auto", scrollbarWidth: "thin" }}
        >
          <Row style={{ flexWrap: "nowrap", paddingRight: "8px" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              {data &&
                data?.map((topRated) => (
                  <Link
                    to={`/${getType(topRatedType)}/${topRated.id}`}
                    key={topRated.id}
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
                          alt={
                            topRated.original_name || topRated.original_title
                          }
                          src={`${IMAGE_BASE_URL}${topRated.poster_path}`}
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
                            {topRated.name || topRated.title}
                          </Title>
                          <Text
                            style={{
                              fontSize: 12,
                              fontWeight: 400,
                              color: "grey",
                            }}
                          >
                            {topRated.first_air_date || topRated.release_date}
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
                    topRatedType === "Movies"
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

export default TopRatedHome;
