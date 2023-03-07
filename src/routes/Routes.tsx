import { Route, Routes as RoutesWrapper } from "react-router-dom";

import { Helmet } from "react-helmet";
import { mainLayoutRoutes } from "./const";

const Routes = () => {
  const { routes, Layout } = mainLayoutRoutes;
  return (
    <RoutesWrapper>
      {routes.map(({ path, Component, title }) => (
        <Route
          key={path}
          path={path}
          element={
            <Layout>
              <Helmet>
                <title>{title}</title>
              </Helmet>
              <Component />
            </Layout>
          }
        />
      ))}
    </RoutesWrapper>
  );
};

export default Routes;
