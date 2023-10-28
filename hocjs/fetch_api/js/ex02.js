//fetch() -> Trả về 1 promise
const serverApi = `http://localhost:3000`;

// fetch(`${serverApi}/users`)
//   .then((response) => {
//     console.log(response);
//     //Đọc response header
//     // console.log(response.headers);
//     console.log(response.headers.get("Content-Length"));
//     //Lấy dữ liệu
//     return response.json(); //Trả về 1 promise
//   })
//   .then((users) => {
//     console.log(users);
//   });

//Bài tập: hiển thị danh sách users lên Table html
/*
  STT
  Tên
  Email
  */

const render = (users) => {
  const root = document.querySelector("#root");
  root.innerHTML = `<table border="1" width="100%">
    <thead>
      <tr>
        <th width="5%">STT</th>
        <th>Tên</th>
        <th>Email</th>
        <th>Xem</th>
      </tr>
    </thead>
    <tbody>
      ${users
        .map(
          ({ id, name, email }, index) => `<tr>
      <td>${index + 1}</td>
      <td>${name}</td>
      <td>${email}</td>
      <td><button data-id="${id}">Xem</button></td>
    </tr>`,
        )
        .join("")}
    </tbody>
  </table>
  <hr/>
  <form class="form-add">
    <div>
        <input type="text" class="name" placeholder="Tên của bạn..." />
    </div>
    <div>
        <input type="email" class="email" placeholder="Email của bạn..." />
    </div>
    <button>Add</button>
  </form>
  `;

  root.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
      getUser(id);
    }
  });

  const formAdd = root.querySelector(".form-add");
  formAdd.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = e.target.querySelector(".name").value;
    const email = e.target.querySelector(".email").value;
    postUser({ name, email });
  });
};
const postUser = async (body) => {
  const response = await fetch(`${serverApi}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  console.log(response);
  if (response.ok) {
    getUsers();
  }
};

const getUser = async (id) => {
  const response = await fetch(`${serverApi}/users/${id}`);
  const user = await response.json();
  console.log(user);
};
const getUsers = async () => {
  const response = await fetch(`${serverApi}/users`);
  const users = await response.json();
  render(users);
};

getUsers();

//Lưu ý khi POST dữ liệu lên server
/*
- URL
- METHOD: POST, PUT, PATCH
- Headers: {
    "Content-Type": "application/json" 
}
- Body: Dữ liệu gửi lên Server
*/
