import { createBrowserRouter } from "react-router-dom";
import { GlobalLayout } from "../layout/globalLayout";
import { FeedPage } from "../pages/feed/feedPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <GlobalLayout>
        <FeedPage />
      </GlobalLayout>
    ),
    children: [],
  },
  { path: "/login", element: <>Login</> },
  { path: "/signup", element: <>Sign Up</> },
]);
