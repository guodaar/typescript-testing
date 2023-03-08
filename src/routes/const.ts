import Jobs from "../pages/Jobs/Jobs";
import MainLayout from "../layouts/MainLayout";
import Privacy from "../pages/Privacy/Privacy";
import Users from "../pages/Users/Users";

export const JOBS_PATH = "/";
export const USERS_PATH = "/users";
export const PRIVACY_PATH = "/privacy";

export const mainLayoutRoutes = {
  Layout: MainLayout,
  routes: [
    { path: JOBS_PATH, Component: Jobs, title: "Jobs" },
    { path: USERS_PATH, Component: Users, title: "Users" },
    { path: PRIVACY_PATH, Component: Privacy },
  ],
};
