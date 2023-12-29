//Chuyển Server Component -> Client Component
"use client";

import { useEffect } from "react";

const Button = () => {
  useEffect(() => {
    //window, document, localStorage,...
  }, []);
  return (
    <button
      onClick={() => {
        console.log("ok");
      }}
    >
      Click me
    </button>
  );
};

export default Button;
