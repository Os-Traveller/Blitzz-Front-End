import { Link, useLocation } from "react-router-dom";

type ActiveLinkProps = {
  title: string;
  Icon: React.FC;
  to: string;
};

export function ActiveLink({ to, title, Icon }: ActiveLinkProps) {
  const activeStyle = ``;
  const location = useLocation();

  return (
    <Link to={to}>
      <p
        className={`${
          to === location.pathname ? "bg-main text-white" : ""
        } rounded-md flex gap-3 items-center  py-2 px-4 hover:bg-slate-400 hover:text-white animation`}
      >
        <Icon />
        <span>{title}</span>
      </p>
    </Link>
  );
}
