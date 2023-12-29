const PostsPage = ({ params }) => {
  const ids = params.id;
  if (!ids) {
    return <h1>Danh sách bài viết</h1>;
  }

  return (
    <div>
      <h2>Chuyên mục: {ids[0]}</h2>
      <h2>Bài viết: {ids[1]}</h2>
    </div>
  );
};

export default PostsPage;
