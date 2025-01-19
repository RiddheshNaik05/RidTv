import { Spin } from "antd";
import React from "react";

const Loader = () => {
  return (
    <div
      style={{
        // height: "100%",
        // width: "100%",
        // textAlign: "center",
        minHeight: `calc(100vh - 64px)`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Spin />
    </div>
  );
};

export default Loader;
