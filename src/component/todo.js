import React, { Component } from "react";
import ReactDom, { render } from "react-dom";
import actions from "../store/actions/todo";
import { connect } from 'react-redux';//connect方法是实现redux和组件的链接
class Todo extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <input type="text" onKeyDown={(e) => {
          if (e.keyCode == 13) {
            this.props.addTodo(e.target.value);
          }
        }} />
        <ul>
          {this.props.t.map((e, index) => {
            return <li key={index}>{e}</li>
          })}
        </ul>
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return { t: state.t.todos };// 以前的store.getState().c.number
}
// let mapDispatchToProps = (dispatch) => {// 以前的store.dispatch
//   return {
//     addTodo(n) { dispatch(actions.addTodo(n)) },
//   }
// }

// connect 第二个参数使用了actions对象，会自动进行派发工作---下次实现源码
export default connect(mapStateToProps, actions)(Todo);