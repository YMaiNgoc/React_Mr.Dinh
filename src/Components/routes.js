import Home from "./Baitap_router/Home";
import Contact from "./Baitap_router/Contact";
import AboutUs from "./Baitap_router/AboutUs";
const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <AboutUs  />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
];

export default routes;