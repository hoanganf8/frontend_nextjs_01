import Link from "next/link";
const Navigation = () => {
  return (
    <ul>
      <li>
        <Link href="/">Trang chủ</Link>
      </li>
      <li>
        <Link href="/about">Giới thiệu</Link>
      </li>
      <li>
        <Link href="/products">Sản phẩm</Link>
      </li>
      <li>
        <Link href="/posts">Tin tức</Link>
      </li>
    </ul>
  );
};

export default Navigation;
