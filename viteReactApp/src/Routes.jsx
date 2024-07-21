import { Routes, Route } from "react-router-dom";
import routes from "./constants/routes.json";
// Screens
import HomePage from "./containers/Home";
import ProfilePage from "./containers/Profile";
import NotFound from "./containers/PageNotFound";

function AppRouter() {
  return (
    <Routes>
      <Route exact path={routes?.HOME} element={<HomePage />} />
      <Route exact path={routes?.PROFILE} element={<ProfilePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRouter;
