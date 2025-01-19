import { Link } from "react-router-dom";
import {
  Button,
  Card,
  Col,
  Flex,
  Image,
  Row,
  Space,
  Spin,
  Typography,
} from "antd";
import React from "react";
import { IMAGE_BASE_URL } from "../../../../config/constants";

import "../../style.css";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import Loader from "../../../../components/AppLoader";

const getType = (type) => {
  switch (type) {
    case "movie":
      return "movies";

    case "tv":
      return "tv-shows";

    default:
      break;
  }
};

const TrendingAllHome = ({ data, isLoading }) => {
  return (
    <div style={{ paddingInline: "15%", paddingBlock: 16 }}>
      <Typography.Title level={1}>Trending Now</Typography.Title>

      {!isLoading ? (
        <div
          style={{ width: "100%", overflowX: "auto", scrollbarWidth: "thin" }}
        >
          <Row style={{ flexWrap: "nowrap", paddingRight: "8px" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              {data &&
                data?.map((trending) => (
                  <Link
                    to={`/${trending.media_type}/${trending.id}`}
                    key={trending.id}
                  >
                    <div
                      key={trending.id}
                      style={{
                        // width: "100%",
                        height: "100%",
                        marginRight: "16px",
                      }}
                    >
                      {/* <Card
                    hoverable
                    style={{ width: "300px" }}
                    cover={
                      <Image
                        loading="lazy"
                        preview={false}
                        alt={trending.original_name || trending.original_title}
                        src={`${IMAGE_BASE_URL}${trending.poster_path}`}
                      />
                    }
                  >
                    <Card.Meta
                      title={trending.original_name || trending.original_title}
                      description={trending.description}
                    />
                  </Card> */}

                      <div>
                        <Image
                          loading="lazy"
                          preview={false}
                          alt={
                            trending.original_name || trending.original_title
                          }
                          src={`${IMAGE_BASE_URL}${trending.poster_path}`}
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
                            {trending.name || trending.title}
                          </Title>
                          <Text
                            style={{
                              fontSize: 12,
                              fontWeight: 400,
                              color: "grey",
                            }}
                          >
                            {trending.first_air_date || trending.release_date}
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

export default TrendingAllHome;
