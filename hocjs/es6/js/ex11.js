//Async Await
/*
- Async: Function -> Luôn trả về 1 promise
- Await: Gọi promise
*/

// const getUser = async () => {
//   return "Hoàng An";
// };

// getUser().then((data) => {
//   console.log(data);
// });

const getUser = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      //   resolve("Hoàng An");
      reject("Error Network");
    }, 1000);
  });

const getUser2 = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("F8");
    }, 1000);
  });

// const showUser = async () => {
//   const user = await getUser();
//   console.log(user);
//   const user2 = await getUser2();
//   console.log(user2);
// };
// showUser();

//IIFE
// (async () => {
//   try {
//     // const user = await getUser();
//     // console.log(user);
//     const user2 = await getUser2();
//     if (!user2) {
//       throw new Error("Không lấy được giá trị");
//     }
//     console.log(user2);
//   } catch (e) {
//     console.log(e);
//   } finally {
//     console.log("Hoàn thành");
//   }
//   //   const user2 = await getUser2();
//   //   console.log(user2);
// })();

const sendRequest = () => {
  return new Promise((resolve) => {
    const response = {
      status: "success",
      get: () => Promise.resolve("Dữ liệu trả về"),
    };
    resolve(response);
  });
};

const getInfo = async () => {
  //   const res = await sendRequest();
  //   const data = await res.get();
  //   console.log(data);
  //   return { res, data };
  //   return sendRequest();
  try {
    // return await getUser(); //Trả về dữ liệu đã resolve
    return getUser(); //Trả về 1 promise
  } catch (e) {
    console.log(e);
  }
};

getInfo().then((data) => {
  console.log(data);
});
