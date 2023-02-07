import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/home/home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [],
    },
    { path: "/login", element: <>Login</> },
    { path: "/signup", element: <>Sign Up</> },
  ]);
  return (
    <main className="bg-whiteGray dark:bg-black dark:text-white text-main h-screen">
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
