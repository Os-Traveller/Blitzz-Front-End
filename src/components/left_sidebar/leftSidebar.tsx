import { ActiveLink } from "../active_link/activeLink";
import { BsGrid1X2, BsPeople } from "react-icons/bs";

export function LeftSidebar() {
  return (
    <div className="flex flex-col gap-2">
      <ActiveLink to="/" title="Feed" Icon={BsGrid1X2} />
      <ActiveLink to="/commuinity" title="My Community" Icon={BsPeople} />
    </div>
  );
}
