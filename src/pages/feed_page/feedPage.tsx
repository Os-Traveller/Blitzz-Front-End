import { CreatePost } from "../../components/create_post/createPost";
import { FeedCollection } from "./feedCollection";

export function FeedPage() {
  return (
    <section className="w-[750px] mx-auto">
      <CreatePost />
      <div className="my-5"></div>
      <FeedCollection />
    </section>
  );
}
