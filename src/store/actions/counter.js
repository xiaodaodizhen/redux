// 存放处理counter的actionCreator

import * as types from "../action-types";

// actionCreator 创建动作
let actions = {
  add(count) {
    return { type: types.ADD, count }
  },
  delete(count) {
    return { type: types.DELEDT, count }
  }
}
export default actions;

