import { useContext } from "react";
import { AppContext } from "../App";
const ComponentB = () => {
  const { message, title } = useContext(AppContext);
  return (
    <div>
      <h1>Component B</h1>
      <h2>{message}</h2>
      <h2>{title}</h2>
    </div>
  );
};

export default ComponentB;
