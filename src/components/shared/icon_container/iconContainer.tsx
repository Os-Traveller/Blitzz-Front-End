type IconContainerProps = {
  icon: any;
  title: string;
  onClick?: Function;
};
//  this is
export function IconContainer({ icon, title, onClick }: IconContainerProps) {
  return (
    <button className="center_y gap-4 bg-whiteGray dark:bg-black py-2 px-3 rounded-md animation cursor-pointer">
      {icon}
      <span>{title}</span>
    </button>
  );
}
