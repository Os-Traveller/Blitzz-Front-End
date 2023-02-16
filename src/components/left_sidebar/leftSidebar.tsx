import { ActiveLink } from "../active_link/activeLink";
import { BsPeople } from "react-icons/bs";
import { CiGrid31 } from "react-icons/ci";
import { AiOutlineComment } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdLogout, MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { useState } from "react";
import { getTheme, setTheme } from "../../functions/theme";

export function LeftSidebar() {
  const [userTheme, setUserTheme] = useState<string>(getTheme());

  const styleClass = `flex gap-3 items-center  py-2 px-4 hover:bg-slate-400 hover:text-white animation cursor-pointer rounded-md`;

  return (
    <div className="flex flex-col gap-2">
      <ActiveLink to="/" title="Feed" icon={<CiGrid31 />} />
      <ActiveLink to="/community" title="My Community" icon={<BsPeople />} />
      <ActiveLink to="/messages" title="Messages" icon={<AiOutlineComment />} />
      <ActiveLink to="/profile" title="Profile" icon={<BiUser />} />
      <ActiveLink to="/setting" title="Setting" icon={<IoSettingsOutline />} />

      {/* theming option */}
      <p className={styleClass} onClick={() => setTheme(userTheme, setUserTheme)}>
        {/* for light mode mode */}
        {userTheme === "light" && (
          <>
            <MdOutlineDarkMode /> <span>Dark Mode</span>
          </>
        )}
        {/* for dark mode */}
        {userTheme === "dark" && (
          <>
            <MdOutlineLightMode /> <span>Light Mode</span>
          </>
        )}
      </p>

      <p className={styleClass}>
        <MdLogout />
        <span>Logout</span>
      </p>
    </div>
  );
}
