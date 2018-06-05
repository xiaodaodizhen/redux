import React, { Component } from "react";
import store from "../store/index"; // import store from "../store";可以省略/ index ,默认找某个文件夹下的index文件
import actions from "../store/actions/counter";
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
      this.setState({ number: store.getState().c.number });//异步或者有延迟，不会设置值了，立刻改变state,中间获取执行了什么
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


