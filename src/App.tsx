import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/home/home";

function App() {
  const router = createBrowserRouter([{ path: "/", element: <Home /> }]);
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
