const getUser = (userId) => {
  const users = [
    {
      id: 1,
      name: "User 1",
      salary: 5000000,
    },
    {
      id: 2,
      name: "User 2",
      salary: 6000000,
    },
    {
      id: 3,
      name: "User 3",
      salary: 7000000,
    },
    {
      id: 4,
      name: "User 4",
      salary: 8000000,
    },
  ];
  return new Promise((resolve) => {
    const user = users.find(({ id }) => id === userId);
    setInterval(() => {
      resolve(user);
    }, 1000);
  });
};

const lists = [1, 3, 4];
//Yêu cầu: Tính tổng thu nhập của tất cả users có id ở trong mảng lists
// let salary = 0;
// const getSalary = () => {
//   for (let index in lists) {
//     const promise = getUser(lists[index]).then((user) => {
//       salary += user.salary;
//       return Promise.resolve(salary);
//     });

//     if (+index === lists.length - 1) {
//       return promise;
//     }
//   }
// };

// getSalary().then((salary) => {
//   console.log(salary);
// });

//Để giải quyết các bài toán sử dụng nhiều promise cùng 1 lúc -> Dùng Promise.all()
//Hàm này sẽ nhận 1 mảng chứa tất cả các Promise

Promise.all(lists.map((id) => getUser(id))).then((users) => {
  const salary = users.reduce((total, { salary }) => total + salary, 0);
  console.log(salary);
});
