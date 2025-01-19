import { Card, Progress, Tooltip } from "antd";
import Typography from "antd/es/typography/Typography";

import { IMAGE_BASE_URL } from "../../../../config/constants";
import { COLORS } from "../../../../utils/colors";

const { Text } = Typography;

const MovieCard = ({ data }) => {
  return (
    <Card
      hoverable
      cover={
        <img alt={data.title} src={`${IMAGE_BASE_URL}${data.poster_path}`} />
      }
      style={{ position: "relative", width: "100%", marginBlock: 16 }}
    >
      <div>
        <Tooltip
          title={data.title}
          placement="bottom"
          color={COLORS.PRIMARY_RED}
        >
          <Text strong style={{ marginBottom: 0 }}>
            {data.title.length > 20
              ? `${data.title.substring(0, 20)}...`
              : data.title}
          </Text>

          <br />

          <Text strong style={{ color: "gray" }}>
            {data.release_date}
          </Text>
        </Tooltip>
      </div>

      <Progress
        style={{
          position: "absolute",
          bottom: 70,
          left: 10,
          backgroundColor: COLORS.WHITE,
          borderRadius: 100,
        }}
        type="circle"
        strokeWidth={12}
        size={50}
        percent={parseInt((data.vote_average / 10) * 100)}
      />
    </Card>
  );
};

export default MovieCard;
