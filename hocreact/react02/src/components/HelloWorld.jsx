import { useEffect } from "react";

const HelloWorld = () => {
  useEffect(() => {
    console.log("Mouting");
    return () => {
      console.log("Unmouting");
    };
  }, []);
  return (
    <div>
      {console.log("Render")}
      <h1>Hello F8</h1>
    </div>
  );
};

export default HelloWorld;
