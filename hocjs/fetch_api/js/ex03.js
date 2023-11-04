import { client } from "./client.js";
import { config } from "./config.js";
const { PAGE_LIMIT } = config;
const root = document.querySelector("#root");
const app = {
  query: {},
  order: "latest",
  modalEl: document.querySelector("#modal-add"),
  modal: new bootstrap.Modal(document.querySelector("#modal-add")),
  render: function (users, maxPage) {
    const htmlEntities = (html) => {
      return html.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
    };
    root.innerHTML = `<div class="container py-3">
    <h2>Danh sách người dùng</h2>
    <button class="btn btn-primary mb-2 btn-add">Thêm mới</button>
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
    ${
      this.query._page > 1
        ? `<li class="page-item"><a class="page-link page-prev" href="#">Previous</a></li>`
        : ""
    }
    ${range
      .map(
        (index) =>
          `<li class="page-item ${
            index + 1 === this.query._page ? "active" : ""
          }"><a class="page-link page-number" href="#">${index + 1}</a></li>`,
      )
      .join("")}
    ${
      this.query._page < maxPage
        ? `<li class="page-item"><a class="page-link page-next" href="#">Next</a></li>`
        : ""
    }
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

    root.addEventListener("click", (e) => {
      if (e.target.classList.contains("page-number")) {
        e.preventDefault();
        const page = e.target.innerText;
        this.goPage(page);
      }
      if (e.target.classList.contains("page-next")) {
        e.preventDefault();
        this.goPage(this.query._page + 1);
      }
      if (e.target.classList.contains("page-prev")) {
        e.preventDefault();
        this.goPage(this.query._page - 1);
      }

      if (e.target.classList.contains("btn-add")) {
        this.showFormAdd();
      }
    });

    this.modalEl.addEventListener("submit", async (e) => {
      e.preventDefault();
      const form = Object.fromEntries([...new FormData(e.target)]);
      //Submit => Lấy data => Call API => Response ok => Đóng modal => Render Table
      const response = await this.postUser(form);
      if (response.ok) {
        this.modal.hide();
        this.query._page = 1;
        this.getUsers(this.query);
      }
    });
  },

  goPage: function (page) {
    this.query._page = +page;
    this.getUsers(this.query);
  },

  showFormAdd: function () {
    this.modal.show();
    this.modalEl.querySelector(".modal-title").innerText = `Thêm người dùng`;
    this.modalEl.querySelector(".modal-body").innerHTML = `
    <form class="form-add">
      <div class="mb-3">
        <label>Tên</label>
        <input type="text" name="name" class="form-control" placeholder="Tên..." required>
      </div>
      <div class="mb-3">
        <label>Email</label>
        <input type="email" name="email" class="form-control" placeholder="Email..." required>
      </div>
      <button type="submit" class="btn btn-primary">Lưu</button>
    </form>
    `;
  },

  postUser: async function (data) {
    const { response } = await client.post("/users", data);
    return response;
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
    window.scroll({
      top: 0,
    });
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

/*
Phân tích chức năng sửa
- Click Edit button -> id cần sửa
- Show form
- Lấy dữ liệu của user theo id (Call API)
- Lắng nghe sự kiện submit form
- Lấy Data
- Call API với data và id cần sửa
- Kiểm tra response
- Đóng modal
- Re-render

Phân tích chức năng xóa
- Click Delete button -> id cần xóa
- Call API
- Kiểm tra response
- Re-render

Lưu ý khi làm chức năng thêm, xóa -> Chuyển về trang 1 sau khi đã thêm hoặc xóa
*/
