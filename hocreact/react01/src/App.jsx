import Header from "./components/Header";

const App = () => {
  const isLogin = false;
  const loading = false;
  //Event Handler
  const handleClick = (text) => {
    console.log("Xin chào F8: " + text);
  };
  const users = [
    {
      id: 1,
      name: "Nguyễn Văn A",
    },
    {
      id: 2,
      name: "Nguyễn Văn B",
    },
    {
      id: 3,
      name: "Nguyễn Văn C",
    },
  ];
  //Để render 1 mảng --> Tạo 1 mảng mới chứa các phần tử là jsx
  //   const usersJsx = users.map((item) => <h3 key={item.id}>{item.name}</h3>);
  return (
    <div>
      <Header />
      {loading && <h2>Đang tải...</h2>}
      <h1>Trang chủ F8</h1>
      {isLogin ? (
        <h2>Chào mừng bạn quay trở lại</h2>
      ) : (
        <h3>Vui lòng đăng nhập để tiếp tục</h3>
      )}
      <button
        onClick={() => {
          handleClick("Hello");
        }}
      >
        Click me
      </button>
      {users.map((item) => (
        <h3 key={item.id}>{item.name}</h3>
      ))}
    </div>
  );
};

export default App;
