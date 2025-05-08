import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CountryList from "../components/pages/CountryList/CountryList";
import CountryForm from "../components/pages/CountryForm/CountryForm";
import Details from "../components/pages/Details/Details";
import BadPage from "../components/pages/BadPage/BadPage";

import { LIST_NAV } from "../data/Navigate/listNavigates";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      ...LIST_NAV.map((nav) => {
        return { path: nav.path, element: nav.element };
      }),
      { path: "/country/:id", element: <Details /> },
    ],
    errorElement: <BadPage />,
  },
]);

export default routes;
