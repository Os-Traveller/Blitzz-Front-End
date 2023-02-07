import { Navbar } from "../../components/navbar/navbar";

export function Home() {
  return (
    <section className="app_grid">
      <Navbar />
      {/* sidebar left */}
      <div className="bg-red-200 w-full h-full"></div>
      {/* feed */}
      <div className="bg-red-400 w-full h-full"></div>
      {/* sidebar right  */}
      <div className="bg-red-600 w-full h-full"></div>
    </section>
  );
}
