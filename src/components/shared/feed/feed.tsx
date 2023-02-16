import { useState } from "react";
import { ProfileIcon } from "../profile_icon/profileIcon";
import { BsThreeDots } from "react-icons/bs";
import userDp from "../../../img/DP.jpg";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { RiShareForwardLine, RiShareForwardFill } from "react-icons/ri";

export function Feed() {
  const [liked, setLiked] = useState<boolean>(false);
  const [shared, setShared] = useState<boolean>(false);

  return (
    <section className="rounded-lg bg-white dark:bg-blackGray p-5">
      {/* top feed */}
      <div className="w-full center_y gap-5 justify-between">
        <div className="flex gap-5">
          <ProfileIcon size="50px" />
          <div className="">
            <p className="font-semibold cursor-pointer">Faisal Ahmed</p>
            <p className="text-sm text-gray-400">15h ago</p>
          </div>
        </div>
        <BsThreeDots className="cursor-pointer" />
      </div>
      {/* top feed ends */}
      {/* body section */}
      <p className="mt-5 text-sm">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero nemo officia dolorem commodi
        distinctio pariatur rerum cumque veritatis corporis dolor, deserunt iusto id, vel iste
        dolores minus. Explicabo, laudantium nihil!
      </p>
      {/* image section */}
      <img className="mt-5 rounded-lg" src={userDp} alt="" />
      {/* like comment share section */}
      <div className="w-full grid grid-cols-3 border-y border-gray-300 dark:border-main p-1 mt-5 cursor-pointer">
        <p className="center_y gap-3" onClick={() => setLiked(!liked)}>
          {liked ? (
            <>
              <AiFillHeart className="text-xl" /> <span>Liked</span>
            </>
          ) : (
            <>
              <AiOutlineHeart className="text-xl" /> <span>Like</span>
            </>
          )}
        </p>

        <p className="center_y gap-3 mx-auto">
          <FaRegComment className="text-xl" /> <span>Comment</span>
        </p>
        <p className="center_y gap-3 ml-auto" onClick={() => setShared(!shared)}>
          {shared ? (
            <>
              <RiShareForwardFill className="text-xl" />
              <span>Shared</span>
            </>
          ) : (
            <>
              <RiShareForwardLine className="text-xl" /> <span>Share</span>
            </>
          )}
        </p>
      </div>
    </section>
  );
}
