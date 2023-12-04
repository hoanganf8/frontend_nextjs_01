export const initialState = {
  count: 0,
  todoList: [],
  user: {},
};

export const reducer = (state, action) => {
  //state -> Giống prevValue trong vòng lặp reducer
  //action --> Đối số của hàm dispatch
  //Case
  switch (action.type) {
    //Type: feature/action
    case "counter/increment": {
      return { ...state, count: state.count + action.payload };
    }

    case "counter/decrement": {
      return { ...state, count: state.count - action.payload };
    }

    case "todolist/add": {
      return { ...state, todoList: [...state.todoList, action.payload] };
    }

    case "todolist/delete": {
      //action.payload --> index cần xóa
      return {
        ...state,
        todoList: state.todoList.filter(
          (_, index) => +index !== +action.payload,
        ),
      };
    }
  }
};

/*
reducer là 1 hàm dùng để viết logic cập nhật state
reducer sẽ có 2 tham số: 
- state --> Toàn bộ state của cả dự án --> Là 1 object
{
    count: 0,
    todoList: [],
    userLogin: {}
}
- action: 1 object chứa 2 thông tin
+ type: Tên action (Ví dụ: thêm, sửa, xóa)
+ payload: Dữ liệu muốn gửi lên reducer để cập nhật state
*/
