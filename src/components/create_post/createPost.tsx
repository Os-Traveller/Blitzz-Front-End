import { ProfileIcon } from "../shared/profile_icon/profileIcon";
import { BsCameraVideo } from "react-icons/bs";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { BsEmojiLaughing } from "react-icons/bs";
import { IconContainer } from "../shared/icon_container/iconContainer";

export function CreatePost() {
  return (
    <section className="bg-white p-5 rounded-lg dark:bg-blackGray">
      {/* profile photo and inputs */}
      <div className="center_y w-full gap-8">
        <ProfileIcon />
        <p className="bg-whiteGray dark:bg-black dark:text-whiteGray h-full w-full px-5 py-2 rounded-lg text-main">
          What's Happening?
        </p>
      </div>
      {/* post option */}
      <div className="flex justify-between mt-5">
        <div className="flex gap-4">
          <IconContainer title="Live Video" icon={<BsCameraVideo size={20} />} />
          <IconContainer title="Photo / Video" icon={<MdOutlineAddPhotoAlternate size={20} />} />
          <IconContainer title="Feeling" icon={<BsEmojiLaughing size={20} />} />
        </div>
        {/* post button */}
        <button className="button bg-primary-500  text-white hover:bg-primary-600 animation">
          Post
        </button>
      </div>
    </section>
  );
}
