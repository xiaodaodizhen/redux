import * as types from "../action-types";
// todo 的动作创建
let actions = {
  addTodo(todo) {
    return { type: types.TODO_ADD, todo};
  }
};
export default actions;