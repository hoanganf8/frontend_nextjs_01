/* eslint-disable react/prop-types */
const User = ({ name, email, company, address, teacher }) => {
  console.log(company, address, teacher);
  return (
    <div>
      <h3>Tên: {name}</h3>
      <h3>Email: {email}</h3>
    </div>
  );
};

export default User;
