const Users = ({ onGetData, children }) => {
  console.log(children);
  const handleClick = () => {
    onGetData("Hello F8");
  };
  return (
    <div>
      {children}
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Users;
