import React, { Component } from "react";
import { createStore } from "../redux";
let initState = { number: 0 };
// 创建动作类型
const ADD = "ADD";
const DELEDT = "DELEDT";

// actionCreator 创建动作
let actions = {
  add(count) {
    return { type: ADD, count }
  },
  delete(count) {
    return { type: DELEDT, count }
  }
}

// 创建规则
function readuxer(state = initState, action) {
  switch (action.type) {
    case ADD:
      return { number: state.number + action.count }
    case DELEDT:
      return { number: state.number - action.count };

  }
  return state;
}
// 创建容器
let store = new createStore(readuxer);

export default class Counter extends Component {
  constructor() {
    super();
    this.state = { number: 0 };
  }
  // 加法
  handleAdd = () => {
    store.dispatch(actions.add(2));
  }
  // 减法
  handleDelete = () => {
    store.dispatch(actions.delete(1));
  }
  componentDidMount() {
    // 组件挂载完成后，希望订阅一个更新状态的方法，只要状态发生变化，就setState(重新设置状态)更新视图
    this.unAdd = store.subScribe(() => {
      this.setState({ number: store.getState().number });//异步或者有延迟，不会设置值了，立刻改变state,中间获取执行了什么
      // setTimeout(()=> {
      //   console.log(this.state.number);
      // }, 1000);
    });
  }
  componentWillUnmount() {
    // 组件移除后，移除订阅
    this.unAdd();
  }

  render() {
    return (
      <div>技术群
          {this.state.number}
        <button onClick={this.handleAdd}>+</button>
        <button onClick={this.handleDelete}>-</button>
      </div>
    )
  }
}


