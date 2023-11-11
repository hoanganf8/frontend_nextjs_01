import { config } from "./config.js";
import { requestRefresh } from "./utils.js";
const { SERVER_API } = config;

export const client = {
  serverApi: SERVER_API, //1
  token: null,
  //2
  setUrl: function (url) {
    this.serverApi = url;
  },
  setToken: function (token) {
    this.token = token;
  },
  send: async function (path, method = "GET", body = null) {
    const url = `${this.serverApi}${path}`; //3
    //Tác vụ call api
    const headers = {
      "Content-Type": "application/json",
    };
    if (this.token) {
      headers["Authorization"] = `Bearer ${this.token}`;
    }
    const options = {
      method,
      headers,
    };
    if (body) {
      options.body = JSON.stringify(body);
    }
    try {
      //Request
      const response = await fetch(url, options);
      //Response
      //Check token ở đây --> Nếu hết hạn -> Gọi API Refresh -> Lưu lại -> Gọi lại hàm send()

      if (!response.ok) {
        const newToken = await requestRefresh(this);

        if (newToken) {
          //Xử lý --> Lưu token vào localStorage
          this.token = newToken.access_token;
          //Xử lý --> Gọi lại hàm send
          return this.send(path, method, body);
        } else {
          //Logout
        }
      }
      const data = await response.json();
      return { response, data };
    } catch (e) {
      throw new Error(e);
    }
  },
  get: function (url) {
    //Call API với get method
    return this.send(url);
  },
  post: function (url, body) {
    //Call API với post method
    return this.send(url, "POST", body);
  },
  put: function (url, body) {
    //Call API với put method
    return this.send(url, "PUT", body);
  },
  patch: function (url, body) {
    //Call API với patch method
    return this.send(url, "PATCH", body);
  },
  delete: function (url) {
    //Call API với delete method
    return this.send(url, "DELETE");
  },
};

// const showRefresh = async () => {
//   client.setUrl("https://api.escuelajs.co/api/v1");
//   const newToken = await requestRefresh(client);
//   console.log(newToken);
// };

// showRefresh();
