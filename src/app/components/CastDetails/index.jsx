/* eslint-disable react/prop-types */
import { Card, Space } from "antd";
import Meta from "antd/es/card/Meta";

import Loader from "../AppLoader";
import { IMAGE_BASE_URL } from "../../config/constants";
import defaultAvatar from "../../assets/default_avatar.png";

const CastDetails = ({ data }) => {
  return (
    <div>
      <Space
        className="custom-scrollbar"
        direction="horizontal"
        style={{
          width: "96%",
          height: "100%",
          padding: 12,
          overflowX: "auto",
          overflowY: "hidden",
        }}
      >
        {data ? (
          data.cast.slice(0, 10).map((cast) => (
            <Card
              key={cast.id}
              hoverable
              style={{ width: 175, height: 370 }}
              cover={
                <img
                  alt={cast.original_name}
                  src={
                    cast.profile_path
                      ? `${IMAGE_BASE_URL}${cast.profile_path}`
                      : defaultAvatar
                  }
                />
              }
            >
              <Meta title={cast.name} description={cast.character} />
            </Card>
          ))
        ) : (
          <Loader />
        )}
      </Space>
    </div>
  );
};

export default CastDetails;
