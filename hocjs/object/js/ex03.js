var user = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
  getInfo: function () {
    return `
        - Name: ${this.name}
        - Email: ${this.email}
        `;
  },
  children: {
    address: "Hà nội",
    getAddress: function () {
      return this.address;
    },
    getName: function (_this) {
      //   console.log(this);
      return _this.name;
    },
  },
};
// console.log(user);
console.log(user.getInfo());
// console.log(user.children.getAddress());
console.log(user.children.getName(user));

var customer = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
  teacher: {
    name: "Hoàng An F8",
    salary: 5000000,
    histories: [
      {
        year: 2020,
        name: "Công việc 1",
      },
      {
        year: 2021,
        name: "Công việc 2",
      },
      {
        year: 2022,
        name: "Công việc 3",
      },
    ],
  },
};

console.log(customer.teacher.histories[0].name);
