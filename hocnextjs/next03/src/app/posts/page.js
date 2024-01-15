import "./posts.scss";
import PostList from "./PostList";
export const metadata = {
  title: "Danh sách bài viết",
};
const PostsPage = () => {
  return (
    <div className="posts">
      <h1>Danh sách bài viết</h1>
      <PostList />
    </div>
  );
};

export default PostsPage;
