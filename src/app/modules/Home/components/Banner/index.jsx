import { Carousel, Typography } from "antd";
import { IMAGE_BASE_URL } from "../../../../config/constants";
import useDeviceSize from "../../../../hooks/useDeviceSize";
import { Link, useNavigate } from "react-router-dom";

const Banner = ({ data }) => {
  const { isOnMobile, isOnTablet, isOnSmallDesktop, isOnDesktop } =
    useDeviceSize();
  const navigate = useNavigate();

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

  return (
    <Carousel autoplay>
      {data &&
        data.map((item) => {
          return (
            <Link to={`/${getType(item.media_type)}/${item.id}`} key={item.id}>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                <img
                  loading="lazy"
                  src={`${IMAGE_BASE_URL}${item.backdrop_path}`}
                  alt={item.original_name || item.original_title}
                  style={{
                    width: "100%",
                    height: isOnMobile
                      ? 220
                      : isOnTablet
                      ? 350
                      : isOnSmallDesktop
                      ? 400
                      : isOnDesktop
                      ? 450
                      : 650,
                  }}
                />

                <div
                  style={{
                    bottom: 6,
                    padding: "20px",
                    color: "#fff",
                    backgroundColor: "rgba(0, 0, 0, 0.9)",
                  }}
                >
                  <Typography.Title level={1} style={{ color: "#fff" }}>
                    {item.name || item.title}
                  </Typography.Title>

                  <Typography.Paragraph style={{ color: "#fff" }}>
                    {item.overview}
                  </Typography.Paragraph>
                </div>
              </div>
            </Link>
          );
        })}
    </Carousel>
  );
};

export default Banner;
