import PropTypes from "prop-types";
import { useId } from "react";

const Input = ({ title, type = "text" }) => {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>{title}</label>
      <input id={id} type={type} placeholder={title} />
    </div>
  );
};

Input.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Input;
