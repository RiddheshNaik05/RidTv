/* eslint-disable react/prop-types */
import { Typography } from "antd";

const LabelValue = ({ label, value, placement = "horizontal" }) => {
  return (
    <div style={{ marginBottom: 32 }}>
      {placement === "horizontal" ? (
        <>
          <Typography.Text strong style={{ fontSize: 16 }}>
            {label}{" "}
          </Typography.Text>
          <Typography.Text style={{ fontSize: 16 }}>{value}</Typography.Text>
        </>
      ) : (
        <>
          <Typography.Text strong style={{ fontSize: 16 }}>
            {label}
          </Typography.Text>
          <br />
          <Typography.Text style={{ fontSize: 16 }}>{value}</Typography.Text>
        </>
      )}
    </div>
  );
};

export default LabelValue;
