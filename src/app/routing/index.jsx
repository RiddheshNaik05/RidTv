// import ProtectedRoutes from "./components/ProtectedRoutes";
import DefaultRoutes from "./components/DefaultRoutes";

const RoutingProvider = () => {
  const { isAuthenticated } = false;

  return !isAuthenticated ? (
    <>
      <DefaultRoutes />
    </>
  ) : (
    ""
  );
};

export default RoutingProvider;
