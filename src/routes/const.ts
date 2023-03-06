import Jobs from "../pages/Jobs/Jobs";
import MainLayout from "../layouts/MainLayout";
import Users from "../pages/Users/Users";

export const JOBS_PATH = "/";
export const USERS_PATH = "/users";

export const mainLayoutRoutes = {
  Layout: MainLayout,
  routes: [
    { path: JOBS_PATH, Component: Jobs },
    { path: USERS_PATH, Component: Users },
  ],
};
