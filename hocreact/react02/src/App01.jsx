import User from "./components/User";
import Users from "./components/Users";

const App = () => {
  // const users = [
  //   {
  //     id: 1,
  //     name: "User 1",
  //     email: "user1@gmail.com",
  //   },
  //   {
  //     id: 2,
  //     name: "User 2",
  //     email: "user2@gmail.com",
  //   },
  //   {
  //     id: 3,
  //     name: "User 3",
  //     email: "user3@gmail.com",
  //   },
  // ];
  // const info = {
  //   company: "F8",
  //   address: "Hà Nội",
  //   teacher: "Hoàng An F8",
  // };
  const handleGetData = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h1>React Props</h1>
      {/* {users.map(({ id, name, email }) => (
        <User key={id} name={name} email={email} {...info} />
      ))} */}
      <Users onGetData={handleGetData}>
        <h2>Users</h2>
      </Users>
    </div>
  );
};

export default App;

//Props:
//Truyền dữ liệu từ component cha --> component con
//Render Props
//Children Props
