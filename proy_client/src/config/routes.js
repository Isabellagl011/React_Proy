import LayoutAdmin from "../layouts/LayoutAdmin";
import Layout404Error from "../layouts/Layout404Error";
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
    layout: Layout404Error,
    component: Error404,
  },
];

export default routes;
