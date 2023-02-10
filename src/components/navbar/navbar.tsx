import { Logo } from "./logo";
import { ProfileIcon } from "../profileIcon/profileIcon";
import { Search } from "./search";

export function Navbar() {
  return (
    <nav className="h-[60px] grid grid-cols-3 bg-white items-center px-5 dark:bg-blackGray">
      <Logo />
      <Search />
      <div className="ml-auto center_y gap-3">
        <h2 className="text font-semibold">Faisal Ahmed</h2>
        <ProfileIcon borderRadius="10px" />
      </div>
    </nav>
  );
}
