// 创建store
import { createStore } from "redux";

import newReducer from "./reducers/hebingzujian";

// 创建容器
// let store = new createStore(todo);---------未经合并的组件
let store = new createStore(newReducer);// ------------多组件合并使用
export default store;