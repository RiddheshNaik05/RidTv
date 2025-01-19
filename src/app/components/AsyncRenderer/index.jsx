import { Suspense } from "react";
import Loader from "../AppLoader";

function AsyncRenderer({ children, fallback = <Loader /> }) {
  return <Suspense fallback={fallback}>{children}</Suspense>;
}

export default AsyncRenderer;
