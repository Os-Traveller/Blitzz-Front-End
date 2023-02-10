import { useEffect, useRef, useState } from "react";
import { LeftSidebar } from "../components/left_sidebar/leftSidebar";
import { Navbar } from "../components/navbar/navbar";
import { RightSidebar } from "../components/right_sidebar/rightSidebar";

export function GlobalLayout(props: any) {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const ref = useRef(null);
  const navbarHeight = 60;

  useEffect(() => {
    const handleHeight = () => setWindowHeight(window.innerHeight);
    window.addEventListener("resize", handleHeight);

    return () => window.removeEventListener("resize", handleHeight);
  }, []);

  return (
    <section className="h-screen grid grid-rows-[auto_1fr]">
      <header ref={ref}>
        <Navbar />
      </header>
      {/*  */}
      <main className=" h-full grid grid-cols-[250px_1fr_250px]">
        <div className="p-5">
          <LeftSidebar />
        </div>
        <div style={{ height: `${windowHeight - navbarHeight}px`, padding: "15px" }}>
          <div className="overflow-y-scroll p-10 rounded-2xl bg-whiteGray dark:bg-black h-full">
            {props.children}
          </div>
        </div>
        <div className="p-5">
          <RightSidebar />
        </div>
      </main>
    </section>
  );
}
