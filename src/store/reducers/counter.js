// 存放规则，（例如计数器的规则）

import * as types from "../action-types"
let initState = { number: 0 };
// 创建规则
function readuxer(state = initState, action) {
  switch (action.type) {
    case types.ADD:
      return { number: state.number + action.count }
    case types.DELEDT:
      return { number: state.number - action.count };

  }
  return state;
}
export default readuxer;