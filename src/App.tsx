import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";

function App() {
  return (
    <section className="bg-white dark:bg-blackGray dark:text-white text-main h-screen">
      <RouterProvider router={router} />
    </section>
  );
}

export default App;
