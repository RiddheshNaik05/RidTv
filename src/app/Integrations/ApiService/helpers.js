import baseApiInstance from "../../api/baseApiInstance";

export function apiServiceErrorHandler(error) {
  let customError = {};
  if (error) {
    customError["data"] = error?.response?.data;
    customError["status"] = error?.response?.status;
    customError["request-url"] = error?.response?.config?.url;
  } else {
    customError = error;
  }
  console.error(`Api Service Failed`, customError);
}

export function apiServiceResponseHandler(res) {
  //Logic can be added here to handle api responses, if required!
  return res;
}

const get = async (url, config) => {
  try {
    const res = await baseApiInstance.get(url, config);
    return apiServiceResponseHandler(res);
  } catch (error) {
    apiServiceErrorHandler(error);
    throw error;
  }
};

const post = async (url, data, config) => {
  try {
    const res = await baseApi.post(url, data, config);
    return apiServiceResponseHandler(res);
  } catch (error) {
    apiServiceErrorHandler(error);
    throw error;
  }
};

const uploadFile = async (url, file) => {
  try {
    const res = await baseApi.post(url, file, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return apiServiceResponseHandler(res);
  } catch (error) {
    apiServiceErrorHandler(error);
    throw error;
  }
};

const put = async (url, data, config) => {
  try {
    const res = (await baseApi.put) < T > (url, data, config);
    return apiServiceResponseHandler(res);
  } catch (error) {
    apiServiceErrorHandler(error);
    throw error;
  }
};

const __delete = async (url, config) => {
  try {
    const res = (await baseApi.delete) < T > (url, config);
    return apiServiceResponseHandler(res);
  } catch (error) {
    apiServiceErrorHandler(error);
    throw error;
  }
};

export { get, post, put, __delete, uploadFile };
