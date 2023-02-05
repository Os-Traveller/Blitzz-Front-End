import dp from "../../img/DP.jpg";

type ProfileIconProps = {
  size?: string;
  borderRadius?: string;
};

export function ProfileIcon({ size = "40px", borderRadius = "50%" }: ProfileIconProps) {
  return (
    <div
      className="cursor-pointer"
      style={{
        backgroundImage: `url(${dp})`,
        height: size,
        width: size,
        backgroundPosition: "center",
        backgroundSize: "cover",
        borderRadius: borderRadius,
      }}
    ></div>
  );
}
