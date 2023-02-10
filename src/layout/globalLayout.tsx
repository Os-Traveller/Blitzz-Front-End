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
      <main className=" h-full grid grid-cols-[400px_1fr_400px]">
        <div className="">
          <LeftSidebar />
        </div>
        <div
          style={{ height: `${windowHeight - navbarHeight}px` }}
          className="overflow-y-scroll p-4"
        >
          {props.children}
        </div>
        <div className="">
          <RightSidebar />
        </div>
      </main>
    </section>
  );
}
