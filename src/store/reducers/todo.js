// todo功能
import * as types from "../action-types";
let initState = {
  todos: [
    "吃饭", "睡觉"
  ]
};
function reduxer(state = initState, action) {
  switch (action.type) {
    case types.TODO_ADD:
      return { todos: [...initState, action.todo] };
  }
  return state;
}
export default reduxer;