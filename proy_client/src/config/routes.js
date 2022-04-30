import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutError404 from "../layouts/Layout404";
import AdminHome from "../pages/Admin";
import AdminSignIn from "../pages/Admin/signIn";
import Error404 from "../pages/Error404";
const routes = [
  {
    path: "/admin",
    layout: LayoutAdmin,
    component: AdminHome,
  },
  {
    path: "/admin/login",
    layout: LayoutAdmin,
    component: AdminSignIn,
  },
  {
    path: "*",
    layout: LayoutError404,
    component: Error404,
  },
];

export default routes;
