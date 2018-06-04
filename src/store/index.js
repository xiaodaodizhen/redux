// 创建store
import { createStore } from "../redux";
// import readuxer from "./reducers/counter";
// // 创建容器
// let store = new createStore(readuxer);
// export default store;


import todo from "./reducers/todo";
let store = new createStore(todo);
window.store = store;
export default store;