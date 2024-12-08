/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import Productos from "views/TableList.js";
import Typography from "views/Typography.js";
import Maps from "views/Maps.js";
import Notifications from "views/Notifications.js";
import Upgrade from "views/Upgrade.js";
import SimuCredito from "views/Credito.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "Perfil de Usuario",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Productos",
    icon: "nc-icon nc-app",
    component: Productos,
    layout: "/admin"
  },
  {
    path: "/credito",
    name: "SimuCredito",
    icon: "nc-icon nc-money-coins",
    component: SimuCredito,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Mapa",
    icon: "nc-icon nc-pin-3",
    component: Maps,
    layout: "/admin"
  }
];

export default dashboardRoutes;
