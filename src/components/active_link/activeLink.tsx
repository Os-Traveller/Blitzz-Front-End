import { Link, useLocation } from "react-router-dom";

type ActiveLinkProps = {
  title: string;
  icon: any;
  to: string;
};

export function ActiveLink({ to, title, icon }: ActiveLinkProps) {
  const location = useLocation();

  return (
    <Link to={to}>
      <p
        className={`${
          to === location.pathname ? "bg-main text-white" : ""
        } rounded-md flex gap-3 items-center  py-2 px-4 hover:bg-slate-400 hover:text-white animation`}
      >
        {icon}
        <span>{title}</span>
      </p>
    </Link>
  );
}
