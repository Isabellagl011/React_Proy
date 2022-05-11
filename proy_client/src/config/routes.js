import LayoutAdmin from "../layouts/LayoutAdmin"
import LayoutBasic from "../layouts/LayoutBasic";
/**Importamos los pages */

import AdminHome from "../pages/Admin";
import AdminSignIn from "../pages/Admin/SignIn";
import Home from "../pages/Home";
import Error404 from "../pages/Error404";
import Contact from "../pages/Contact";

const routesAdmin = [
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
];

/** Ruta home , notFound */

const routesClient = [
  {
    path: "/",
    layout: LayoutBasic,
    component: Home,
  },

  {
    path: "/contact",
    layout: LayoutBasic,
    component: Contact,
  },
];

const routeNotFound = [
  {
    path: "*",
    layout: LayoutBasic,
    component: Error404,
  },
];
const routes = [...routesAdmin, ...routesClient, ...routeNotFound];
export default routes;
