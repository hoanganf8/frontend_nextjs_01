"use client";
import Link from "next/link";
import "@/assets/style.css"; //alias import
import { usePathname } from "next/navigation";
import clsx from "clsx";
const Navigation = () => {
  const pathname = usePathname();
  return (
    <ul>
      <li className={clsx(pathname === "/" && "active")}>
        <Link href="/">Trang chủ</Link>
      </li>
      <li className={clsx(pathname === "/about" && "active")}>
        <Link href="/about">Giới thiệu</Link>
      </li>
      <li className={clsx(pathname === "/products" && "active")}>
        <Link href="/products">Sản phẩm</Link>
      </li>
      <li className={clsx(pathname === "/posts" && "active")}>
        <Link href="/posts">Tin tức</Link>
      </li>
    </ul>
  );
};

export default Navigation;
