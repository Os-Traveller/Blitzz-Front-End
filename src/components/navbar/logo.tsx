import { BsFillLightningFill } from "react-icons/bs";

type LogoProps = {
  size?: string;
};

export function Logo({ size = "40px" }: LogoProps) {
  return (
    <div className="center_y gap-3 logo cursor-pointer w-fit">
      <span
        style={{ height: size, width: size, borderRadius: "10px" }}
        className="bg-primary center_xy text-white text-2xl"
      >
        <BsFillLightningFill />
      </span>
      <h2 className="text-2xl text-[#]">Blitzz</h2>
    </div>
  );
}
