import React, { Component } from "react";
import ReactDom, { render } from "react-dom";
import store from "../store/index";
import actions from "../store/actions/todo";
export default class Todo extends Component {
  constructor() {
    super();
    this.state = { todos: store.getState().todos };
  }
  componentDidMount() {
    // 组件挂载完成后，希望订阅一个更新状态的方法，只要状态发生变化，就setState(重新设置状态)更新视图
    this.unAdd = store.subScribe(() => {
      this.setState({ todos: store.getState().todos });//异步或者有延迟，不会设置值了，立刻改变state,中间获取执行了什么
    });
  }
  componentWillUnmount() {
    // 组件移除后，移除订阅
    this.unAdd();
  }
  render() {
    return (
      <div>
        <input type="text" onKeyDown={(e) => {
          if (e.keyCode == 13) {
            store.dispatch(actions.addTodo(e.target.value));
          }
        }} />
        <ul>
          {this.state.todos.map((e, index) => {
            return <li key={index}>{e}</li>
          })}
        </ul>
      </div>
    );
  }


}