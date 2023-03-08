import { Route, Routes as RoutesWrapper } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";
import { mainLayoutRoutes } from "./const";

const Routes = () => {
  const { routes, Layout } = mainLayoutRoutes;
  return (
  <AnimatePresence mode="wait">
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
    </AnimatePresence>
  );
};

export default Routes;
