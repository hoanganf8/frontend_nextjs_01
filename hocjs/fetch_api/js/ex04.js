import { client } from "./client.js";
import { config } from "./config.js";

client.setUrl(config.SERVER_AUTH_API);

const root = document.querySelector("#root");
const app = {
  user: {},
  loginStatus: false,
  render: function () {
    //Kiểm tra trạng thái để hiển thị UI tương ứng
    root.innerHTML = this.isLogin() ? this.dashboard() : this.loginForm();
  },
  isLogin: function () {
    return this.loginStatus;
  },
  dashboard: function () {
    return `<div class="container py-3">
      <h1>Chào mừng bạn quay trở lại</h1>
      <ul class="list-unstyled d-flex gap-2 profile">
        <li>Chào bạn: <span>Loading...</span></li>
        <li><a href="#" class="logout">Đăng xuất</a></li>
      </ul>
    </div>`;
  },
  loginForm: function () {
    return `<div class="container py-3">
    <div class="row justify-content-center">
      <div class="col-7">
        <h2 class="text-center">Đăng nhập</h2>
        <form action="">
          <div class="mb-3">
            <label for="">Email</label>
            <input
              type="email"
              name="email"
              class="form-control"
              placeholder="Email..."
            />
          </div>
          <div class="mb-3">
            <label for="">Password</label>
            <input
              type="password"
              name="password"
              class="form-control"
              placeholder="Password..."
            />
          </div>
          <div class="d-grid">
            <button class="btn btn-primary">Đăng nhập</button>
          </div>
          <div class="msg text-danger text-center"></div>
        </form>
      </div>
    </div>
  </div>`;
  },
  addEvent: function () {
    root.addEventListener("submit", (e) => {
      e.preventDefault();
      const form = [...new FormData(e.target)];
      const data = Object.fromEntries(form);
      this.login(data, e.target);
    });
    root.addEventListener("click", (e) => {
      if (e.target.classList.contains("logout")) {
        e.preventDefault();
        this.handleLogout();
      }
    });
  },
  handleLogout: function () {
    localStorage.removeItem("login_token");
    this.loginStatus = false;
    //Call API /logout
    this.render();
  },
  login: async function ({ email, password }, el) {
    this.loading(el);
    const { data: tokens, response } = await client.post("/auth/login", {
      email,
      password,
    });
    this.loading(el, false);
    if (!response.ok) {
      this.showMessage(el, "Email hoặc mật khẩu không chính xác");
      return;
    }
    //Lưu token vào storage: cookie, localStorage, sessionStorage
    localStorage.setItem("login_token", JSON.stringify(tokens));
    this.loginStatus = true;
    this.checkAuth();
  },
  showMessage: function (el, msg) {
    el.querySelector(".msg").innerText = "";
    el.querySelector(".msg").innerText = msg;
  },
  loading: function (el, status = true) {
    const btn = el.querySelector(".btn");
    btn.innerHTML = status
      ? ` <span class="spinner-border spinner-border-sm" aria-hidden="true"></span> Loading`
      : `Đăng nhập`;
    btn.disabled = status;
  },
  checkAuth: async function () {
    //Kiểm tra có token trong localStorage không?
    //Nếu không -> Trả về trạng thái false cho loginStatus
    //Nếu có -> Kiểm tra token có hợp lệ hay không?
    //  - Nếu hợp lệ: -> Trả về thông tin user và trạng thái cho loginStatus
    //  - Nếu không hợp lệ -> Trả về trạng thái false cho loginStatus
    if (localStorage.getItem("login_token")) {
      try {
        const { access_token: accessToken } = JSON.parse(
          localStorage.getItem("login_token"),
        );
        if (!accessToken) {
          throw new Error("Access Token Not Exists");
        }
        root.innerHTML = `<div class="container py-3">
        <h2 class="text-center">Chờ tý...</h2>
        </div>`;
        client.setToken(accessToken);
        const { data: user, response } = await client.get("/auth/profile");
        if (!response.ok) {
          this.loginStatus = false;
          return;
        }
        // console.log(user);
        this.loginStatus = true;
        this.user = user;
        this.render();
        this.showProfile();
      } catch (e) {
        this.loginStatus = false;
      }
    }
  },
  showProfile: function () {
    const profile = root.querySelector(".profile span");
    profile.innerText = this.user.name;
  },
  start: function () {
    this.render();
    this.addEvent();
    this.checkAuth();
  },
};

app.start();
