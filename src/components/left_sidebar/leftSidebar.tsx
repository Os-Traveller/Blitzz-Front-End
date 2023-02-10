import { ActiveLink } from "../active_link/activeLink";
import { BsPeople } from "react-icons/bs";
import { CiGrid31 } from "react-icons/ci";
import { RiMessage2Line } from "react-icons/ri";
import { BiUser } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";

export function LeftSidebar() {
  return (
    <div className="flex flex-col gap-2">
      <ActiveLink to="/" title="Feed" icon={<CiGrid31 />} />
      <ActiveLink to="/commuinity" title="My Community" icon={<BsPeople />} />
      <ActiveLink to="/messeages" title="Messeages" icon={<RiMessage2Line />} />
      <ActiveLink to="/profile" title="Profile" icon={<BiUser />} />
      <ActiveLink to="/setting" title="Setting" icon={<IoSettingsOutline />} />
      <p className="flex gap-3 items-center  py-2 px-4 hover:bg-slate-400 hover:text-white animation cursor-pointer rounded-md">
        <MdLogout />
        <span>Logout</span>
      </p>
    </div>
  );
}
