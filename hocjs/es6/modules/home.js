import { getProducts, getBestSeller } from "./products.js";

export default function getMessage() {
  console.log("Hello F8");
}

export class User {
  constructor() {
    this.name = "Hoàng An";
  }
}

export const customer = { name: "Hoàng An", email: "hoangan.web@gmail.com" };

export const bestSeller = getBestSeller();

// export default getMessage; //Export Default chỉ có 1

//Export named -> Có thể có nhiều, bắt buộc phải đưa vào object
// export { User, customer };
