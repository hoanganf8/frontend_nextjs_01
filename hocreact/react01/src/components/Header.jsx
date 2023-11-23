import { Fragment } from "react";
const Header = () => {
  const menus = ["Item 1", "Item 2", "Item 3"];
  const hello = (
    <>
      <h3>Item </h3>
      <h3>Item </h3>
    </>
  );
  return (
    <>
      <h1>Header</h1>
      <h1>Navigation</h1>
      {menus.map((item, index) => (
        <Fragment key={index}>
          <span>{index}</span>
          <span>{item}</span>
        </Fragment>
      ))}
      {hello}
    </>
  );
};

export default Header;

//Fragment
