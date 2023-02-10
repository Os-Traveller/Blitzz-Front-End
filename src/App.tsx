import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";

function App() {
  return (
    <section className="bg-whiteGray dark:bg-black dark:text-white text-main h-screen">
      <RouterProvider router={router} />
    </section>
  );
}

export default App;
