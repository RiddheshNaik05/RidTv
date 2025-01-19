import React from "react";
import ServiceInterceptor from "./ServiceInterceptios";
import ErrorBoundary from "../ErrorBoundary";
import { BrowserRouter } from "react-router-dom";
import GlobalProviders from "./GlobalProviders";

const EntryPoint = ({ children }) => {
  return (
    // <ServiceInterceptor>
    <BrowserRouter>
      <GlobalProviders>
        <ErrorBoundary>{children}</ErrorBoundary>
      </GlobalProviders>
    </BrowserRouter>
    // </ServiceInterceptor>
  );
};

export default EntryPoint;
