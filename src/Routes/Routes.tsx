import { createBrowserRouter } from "react-router-dom";
import App from "../App";
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
      { path: "/countries/:id", element: <Details /> },
    ],
    errorElement: <BadPage />,
  },
]);

export default routes;
