import { ProfileIcon } from "../shared/profile_icon/profileIcon";
import { Logo } from "./logo";

import { Search } from "./search";

export function Navbar() {
  return (
    <nav className="h-[60px] grid grid-cols-3 bg-white items-center px-5 dark:bg-blackGray shadow-md dark:border-b-2 dark:border-[#393A3B]">
      <Logo />
      <Search />
      <div className="ml-auto center_y gap-3">
        <h2 className="text font-semibold">Faisal Ahmed</h2>
        <ProfileIcon borderRadius="10px" />
      </div>
    </nav>
  );
}
