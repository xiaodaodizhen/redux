import React, { Component } from "react";
import actions from "../store/actions/counter";
import { connect } from 'react-redux';//connect方法是实现redux和组件的链接
class Counter extends Component {
  constructor() {
    super();
  }


  render() {
    return (
      <div>技术群
          {/* {this.state.number} */}
        <button onClick={this.props.handleAdd(2)}>+</button>
        <button onClick={this.props.handleDelete(1)}>-</button>
      </div>
    )
  }
}

// connect 方法调用返回的是新组件
let mapStateToProps = (state) => {
  return { n: state.c.number };// 以前的store.getState().c.number
}
let mapDispatchToProps=(dispatch)=>{// 以前的store.dispatch
  return {
    handleAdd(n){
      dispatch(actions.add(n));
    },
    handleDelete(n){
      dispatch(actions.delete(n));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);


