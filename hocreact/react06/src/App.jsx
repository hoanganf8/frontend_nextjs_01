import Counter from "./components/Counter";
// import Posts from "./components/Posts";
// import Products from "./components/Products";

const App = () => {
  return (
    <div>
      <h1>React</h1>
      {/* <Posts />
      <Products name="F8" /> */}
      <Counter />
    </div>
  );
};

export default App;

/*
Higher Order Component --> Component cấp cao hơn bọc Component hiện tại
Tác dụng: Kế thừa các logic
Ví dụ: Random Background cho 1 component
*/
