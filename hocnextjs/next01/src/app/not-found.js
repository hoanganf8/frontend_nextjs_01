"use client";
import Image from "next/image";
import image from "@/assets/images/page-not-found.jpg";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();
  return (
    <div>
      <h1>PAGE NOT FOUND</h1>
      <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* <img src={image.src} style={{ maxWidth: "80%", height: "auto" }} /> */}
        <Image
          src={image}
          alt="Ảnh 404"
          style={{
            maxWidth: "80%",
            height: "auto",
          }}
        />
      </div>
      <div style={{ textAlign: "center" }}>
        <button onClick={() => router.push("/")}>Về trang chủ</button>
      </div>
    </div>
  );
};

export default NotFound;
