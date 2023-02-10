import { createBrowserRouter } from "react-router-dom";
import { GlobalLayout } from "../layout/globalLayout";
import { Feed } from "../pages/feed/feed";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <GlobalLayout>
        <Feed />
      </GlobalLayout>
    ),
    children: [],
  },
  { path: "/login", element: <>Login</> },
  { path: "/signup", element: <>Sign Up</> },
]);
