// import Todo from "./components/Todo/Todo";

import { createContext, useState } from "react";
import ComponentA from "./components/ComponentA";
export const AppContext = createContext();
const App = () => {
  // return <Todo />;
  const [message, setMessage] = useState("Hello F8");
  const title = "Học lập trình không khó";

  return (
    <AppContext.Provider
      value={{
        message,
        title,
        updateMessage: setMessage,
      }}
    >
      <ComponentA />
    </AppContext.Provider>
  );
};

export default App;

/*
Context: 
- Đối tượng Context --> Phương tiện để truyền và nhận dữ liệu
- Provider --> Gửi dữ liệu từ context đi tới các component khác
- Consumer --> Lấy dữ liệu từ context
*/
