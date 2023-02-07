import { Logo } from "./logo";
import { ProfileIcon } from "../profileIcon/profileIcon";
import { Search } from "./search";

export function Navbar() {
  return (
    <nav className="navbar grid grid-cols-3 bg-white py-3 px-5 dark:bg-blackGray">
      <Logo />
      <Search />
      <div className="ml-auto center_y gap-3">
        <h2 className="text font-semibold">Faisal Ahmed</h2>
        <ProfileIcon borderRadius="10px" />
      </div>
    </nav>
  );
}
