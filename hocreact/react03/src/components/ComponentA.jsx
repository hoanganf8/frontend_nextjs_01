import { useContext } from "react";
import ComponentB from "./ComponentB";
import { AppContext } from "../App";

const ComponentA = () => {
  const { updateMessage } = useContext(AppContext);
  return (
    <div>
      <h1>Component A</h1>
      <button
        onClick={() => {
          updateMessage("Hoàng An F8");
        }}
      >
        Change Message
      </button>
      <ComponentB />
    </div>
  );
};

export default ComponentA;
