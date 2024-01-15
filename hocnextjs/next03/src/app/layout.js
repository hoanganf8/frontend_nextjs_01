import "@/assets/style.scss";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: "F8 - Học lập trình để đi làm",
  description: "Học lập trình miễn phí nhận lương ngàn đô",
  keywords: "html-css, javascript, reactjs, nextjs",
  metadataBase: "http://localhost:3000",
  icons: {
    icon: "https://cdn0.iconfinder.com/data/icons/smoothies-vector-icons-volume-5/48/285-512.png",
    shortcut:
      "https://cdn0.iconfinder.com/data/icons/smoothies-vector-icons-volume-5/48/285-512.png",
    apple:
      "https://cdn0.iconfinder.com/data/icons/smoothies-vector-icons-volume-5/48/285-512.png",
  },
  openGraph: {
    title: "F8 - Học lập trình để đi làm",
    description: "Học lập trình miễn phí nhận lương ngàn đô",
    images: [
      "https://ia.media-imdb.com/images/rock.jpg",
      "https://ia.media-imdb.com/images/rock2.jpg",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <ToastContainer position="bottom-left" />
      </body>
    </html>
  );
}
