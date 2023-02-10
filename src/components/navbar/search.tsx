import { RiSearchLine } from "react-icons/ri";

export function Search() {
  return (
    <form className="w-[500px] border rounded-md center_y gap-3 mx-auto px-5 border-gray-400">
      <label className="text-xl" htmlFor="search">
        <RiSearchLine />
      </label>
      <input
        className="w-full py-1 outline-none bg-transparent"
        id="search"
        type="text"
        placeholder="Search For Something Here..."
      />
    </form>
  );
}
