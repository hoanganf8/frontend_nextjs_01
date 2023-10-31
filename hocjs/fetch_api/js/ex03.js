import { client } from "./client.js";
import { config } from "./config.js";
const { PAGE_LIMIT } = config;
const root = document.querySelector("#root");
const app = {
  query: {},
  order: "latest",
  render: function (users, maxPage) {
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
      <div class="col-9">
        <form class="search">
         <input type="search" class="form-control keyword" placeholder="Từ khóa..." value="${
           this.query.q ?? ""
         }"/>
        </form>
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
    ${this.getPagination(maxPage)}
  </div>`;
  },

  getPagination: function (maxPage) {
    const range = [...Array(maxPage).keys()];
    return `<ul class="pagination justify-content-end pagination-sm">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    ${range
      .map(
        (index) =>
          `<li class="page-item ${
            index + 1 === this.query._page ? "active" : ""
          }"><a class="page-link" href="#">${index + 1}</a></li>`,
      )
      .join("")}
   
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>`;
  },

  addEvent: function () {
    root.addEventListener("change", (e) => {
      if (e.target.classList.contains("sort-by")) {
        const value = e.target.value;
        this.handleSort(value);
      }
    });

    root.addEventListener("submit", (e) => {
      if (e.target.classList.contains("search")) {
        e.preventDefault();
        const keyword = e.target.children[0].value;
        this.handleSearch(keyword);
      }
    });
  },

  handleSort: function (value) {
    this.order = value;
    this.query._order = value === "latest" ? "desc" : "asc";
    this.getUsers(this.query);
  },

  handleSearch: function (keyword) {
    this.query.q = keyword;
    this.getUsers(this.query);
  },

  getUsers: async function (query = {}) {
    let queryString = new URLSearchParams(query).toString();
    if (queryString) {
      queryString = "?" + queryString;
    }
    const { response, data: users } = await client.get("/users" + queryString);
    const total = response.headers.get("x-total-count");
    const maxPage = Math.ceil(total / PAGE_LIMIT);
    this.render(users, maxPage);
  },

  start: function () {
    Object.assign(this.query, {
      _sort: "id",
      _order: "desc",
      _limit: PAGE_LIMIT,
      _page: 1,
    });

    this.getUsers(this.query);
    this.addEvent();
  },
};

app.start();
