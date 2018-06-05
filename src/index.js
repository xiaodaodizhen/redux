import React from "react";
import ReactDom, { render } from "react-dom";
import Counter from "./component/counter";
import Todo from "./component/todo";

import { Provider } from "react-redux";
import store from "./store";
//1. 先要将所有的组件外部包一个Provider(第一层标签里只允许有一个子节点)，并且要传递一个属性store
// 2.有了这步操作组件不需要导入store,也不需要订阅状态
render(<Provider store={store}>
    <div><Counter /><Todo /></div>
</Provider>, window.root);