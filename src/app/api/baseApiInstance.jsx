import axios from "axios";

const baseApiInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  // headers: {
  //   "Content-Type": "application/json",
  // },

  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZmUzMzg3NGZhNGM5MDM4NTY2M2NlYTRmODFkYTFjNSIsInN1YiI6IjY1ZjVkZWY3ZTE5NGIwMDE2M2JkNDY5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.btsnsZIz1v6yrh0bhB5DyFYz9sXlx7pfIpiNWVtHg84",
  },
});

const attachRequestInterceptor = (onFullFilled, onRejected) =>
  baseApiInstance.interceptors.request.use(onFullFilled, onRejected);

const attachResponseInterceptor = (onFullFilled, onRejected) =>
  baseApiInstance.interceptors.response.use(onFullFilled, onRejected);

export { attachRequestInterceptor, attachResponseInterceptor };

export default baseApiInstance;
