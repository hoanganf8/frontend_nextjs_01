import { client } from "./client.js";
const root = document.querySelector("#root");
const app = {
  query: {},
  order: "latest",
  render: function (users) {
    const htmlEntities = (html) => {
      return html.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
    };
    root.innerHTML = `<div class="container py-3">
    <h2>Danh sách người dùng</h2>
    <div class="row mb-3">
      <div class="col-3">
        <select class="form-select sort-by">
          <option value="latest" ${
            this.order === "latest" ? "selected" : ""
          }>Mới nhất</option>
          <option value="oldest" ${
            this.order === "oldest" ? "selected" : ""
          }>Cũ nhất</option>
        </select>
      </div>
    </div>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th width="5%">
            STT
          </th>
          <th>
            Tên
          </th>
          <th>Email</th>
          <th width="5%">Sửa</th>
          <th width="5%">Xóa</th>
        </tr>
      </thead>
      <tbody>
        ${users
          .map(
            ({ id, name, email }, index) => `<tr>
          <td>${index + 1}</td>
          <td>${htmlEntities(name)}</td>
          <td>${htmlEntities(email)}</td>
          <td>
            <button class="btn btn-warning btn-sm">Sửa</button>
          </td>
          <td>
            <button class="btn btn-danger btn-sm">Xóa</button>
          </td>
        </tr>`,
          )
          .join("")}
      </tbody>
    </table>
  </div>`;
  },

  addEvent: function () {
    root.addEventListener("change", (e) => {
      if (e.target.classList.contains("sort-by")) {
        const value = e.target.value;
        this.handleSort(value);
      }
    });
  },

  handleSort: function (value) {
    this.order = value;
    this.query._order = value === "latest" ? "desc" : "asc";
    this.getUsers(this.query);
  },

  getUsers: async function (query = {}) {
    let queryString = new URLSearchParams(query).toString();
    if (queryString) {
      queryString = "?" + queryString;
    }
    const { data: users } = await client.get("/users" + queryString);
    this.render(users);
  },

  start: function () {
    Object.assign(this.query, {
      _sort: "id",
      _order: "desc",
    });

    this.getUsers(this.query);
    this.addEvent();
  },
};

app.start();
