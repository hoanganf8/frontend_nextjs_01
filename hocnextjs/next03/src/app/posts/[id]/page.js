import { notFound } from "next/navigation";

const getPost = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );
  return response.json();
};

//Dynamic Metadata
export async function generateMetadata({ params }) {
  const { id } = params;
  const post = await getPost(id);
  if (!post.id) {
    return;
  }
  return {
    title: post.title.slice(0, 65),
    description: post.body.slice(0, 150),
  };
}

const PostDetail = async ({ params }) => {
  console.log(process.env.APP_NAME);
  const { id } = params;
  const post = await getPost(id);
  if (!post.id) {
    notFound();
  }
  return (
    <div>
      <h1 className="text-5xl">{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetail;
