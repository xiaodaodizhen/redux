import React, { Component } from "react";
import ReactDom, { render } from "react-dom";
import actions from "../store/actions/todo";
import { connect } from 'react-redux';//connect方法是实现redux和组件的链接
export default class Todo extends Component {
  constructor() {
    super();
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