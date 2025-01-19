import { useRef } from "react";

import {
  attachRequestInterceptor,
  attachResponseInterceptor,
} from "../../api/baseApiInstance";
import { getAuthToken } from "../../auth/utils";

const ServiceInterceptor = ({ children }) => {
  const serviceInterceptorsAlreadyAttached = useRef(false);

  if (!serviceInterceptorsAlreadyAttached.current) {
    attachRequestInterceptor((config) => {
      //   const token = getAuthToken();
      const token = process.env.REACT_APP_ACCESS_TOKEN;

      if (token && token !== "") {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      return config;
    });

    attachResponseInterceptor((response) => response);
    serviceInterceptorsAlreadyAttached.current = true;
  }

  return children;
};

export default ServiceInterceptor;
