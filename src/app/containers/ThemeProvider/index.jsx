import { ConfigProvider } from "antd";
import React from "react";
import { theme } from "../../theme/theme";

const ThemeProvider = ({ children }) => {
  return <ConfigProvider theme={theme}>{children}</ConfigProvider>;
};

export default ThemeProvider;
