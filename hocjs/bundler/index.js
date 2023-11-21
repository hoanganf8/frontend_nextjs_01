import dotenv from "dotenv";
dotenv.config();
import { App } from "./src/App";

const root = document.querySelector("#root");
root.innerHTML = App();
