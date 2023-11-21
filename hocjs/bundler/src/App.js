import moment from "moment/moment";
import "./assets/style.scss";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import img1 from "./assets/images/Backdrop-KhaiGiang-Fulstack-K5.png";

export const App = () => {
  console.log(process.env.NODE_ENV);
  return `
  ${Header()}
  <main>
    <h1>Web Anh An 1</h1>
    <h2>Bây giờ là: ${moment().format("DD/MM/YYYY HH:mm:ss")}</h2>
    <h3>${process.env.APP_NAME}</h3>
    <h3>${process.env.SERVER_API}</h3>
  </main>
  ${Footer()}
  `;
};
