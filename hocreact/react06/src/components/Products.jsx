import PropTypes from "prop-types";
import { color } from "../utils/color";
function Products({ name }) {
  return <h1>Danh sách sản phẩm: {name}</h1>;
}

// const Color = color(Products); //Trả về 1 hàm
// console.log(Color);

Products.propTypes = {
  name: PropTypes.string.isRequired,
};

export default color(Products);
