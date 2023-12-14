import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
// store.dispatch({
//   type: "todo/add",
//   payload: "Học React",
// });
// console.log(store.getState());

ReactDOM.createRoot(document.getElementById("root"), {
  identifierPrefix: "f8_field_",
}).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
