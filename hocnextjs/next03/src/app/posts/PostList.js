"use client";
import useSWR from "swr";
import { toast } from "react-toastify";
import { useEffect } from "react";
import Link from "next/link";
const fetcher = (url) => fetch(url).then((res) => res.json());
const postApi = `https://jsonplaceholder.typicode.com/posts`;
const PostList = () => {
  console.log(process.env.APP_NAME);
  const { data, isLoading, error } = useSWR(postApi, fetcher, {
    fallbackData: [],
    revalidateOnReconnect: false,
  });
  useEffect(() => {
    window.addEventListener("online", () => {
      toast.success("Đã khôi phục Internet");
    });
    window.addEventListener("offline", () => {
      toast.warn("Đã ngắt kết nối Internet");
    });
  }, []);

  if (error) {
    return <h3>Đã có lỗi xảy ra</h3>;
  }

  return (
    <div>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        data.map(({ id, title }) => (
          <h3 key={id}>
            {title} <Link href={`/posts/${id}`}>Chi tiết</Link>
          </h3>
        ))
      )}
    </div>
  );
};

export default PostList;
