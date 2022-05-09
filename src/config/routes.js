import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutBasic from "../layouts/LayoutBasic"
import Notfound from "../pages/NotFound";
import AdminHome from "../pages/Admin";
import AdminSignIn from "../pages/Admin/Signin";
import Home from "../pages/Home";
import Contact from "../pages/Contact";

const routesAdmin = [
    {
        path:"/admin",
        layout: LayoutAdmin,
        component: AdminHome,
    },
    {
        path: "/admin/login",
        layout: LayoutAdmin,
        component: AdminSignIn,
    },
    
];

const routesClient = [

    {
        path:"/",
        layout: LayoutBasic,
        component: Home,
    },
];

const routesBasic = [
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

const routesNotFount = [
    {
        path:"*",
        layout: LayoutBasic,
        component: Notfound,
    }
]

const routes = [...routesAdmin,...routesClient,...routesBasic ,...routesNotFount];
export default routes;