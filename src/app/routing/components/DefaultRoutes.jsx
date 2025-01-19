import { Navigate, Route, Routes } from "react-router-dom";
import { DEFAULT_ROUTES } from "../config/routesConfig";
import APPLICATION_ROUTES_URLS from "../config/appsConfig";
import AsyncRenderer from "../../components/AsyncRenderer";
import ApplicationLayout from "../../containers/ApplicationLayout";

const DefaultRoutes = () => (
  <ApplicationLayout>
    <AsyncRenderer>
      <Routes>
        {DEFAULT_ROUTES.map((_route) => (
          <Route
            path={_route.path}
            element={_route.element}
            key={_route.path}
            index={_route.index}
          />
        ))}
        <Route
          path="*"
          element={<Navigate to={APPLICATION_ROUTES_URLS.HOME} />}
        />
      </Routes>
    </AsyncRenderer>
  </ApplicationLayout>
);

export default DefaultRoutes;
