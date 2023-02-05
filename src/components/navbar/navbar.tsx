import { Logo } from "./logo";
import { ProfileIcon } from "../profileIcon/profileIcon";
import { Search } from "./search";

export function Navbar() {
  return (
    <nav className="app_grid bg-white py-3 px-5 dark:bg-blackGray">
      <Logo />
      <Search />
      <div className="ml-auto center_y gap-3">
        <h2 className="text-lg font-semibold">Faisal Ahmed</h2>
        <ProfileIcon borderRadius="10px" />
      </div>
    </nav>
  );
}
