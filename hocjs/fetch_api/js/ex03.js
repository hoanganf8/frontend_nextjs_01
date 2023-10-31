import { client } from "./client.js";
const getUsers = async () => {
  const { response, data } = await client.get("/users");
  console.log(response, data);
};

getUsers();
