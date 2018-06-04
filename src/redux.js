function createStore(fn) {
  // 数据源
  let state;

  let listeners = [];
  let subScribe = (listener) => { // 订阅
    listeners.push(listener);// 添加某个订阅
    return () => {// 返回一个函数，在次调用，执行返回的函数，就是删除某个订阅
      listeners = listeners.filter(fn => fn !== listener);
    }
  }

  // 克隆一份数据源，保证唯一性，外部使用不被修改数据源
  let getState = () => JSON.parse(JSON.stringify(state));

  // 派发时应该将修改的动作提交过来
  let dispatch = (action) => { // 派发的方法，这里是要更改状态
    state = fn(state, action);// 更改状态
    listeners.forEach(listener => listener()); // 重新渲染，
  }

  dispatch({});
  // 将方法暴露给外部使用，将状态（数据源）放到了容器中（方法中），外部无法进行更改
  return { dispatch, getState, subScribe } // 如果不是为了防止修改数据源state就可以直接return { dispatch, state }
}

export { createStore };