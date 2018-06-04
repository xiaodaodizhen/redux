//---------------模仿原生 reduxyuanma 

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
    state = fn(state, action);// 更改状态   ---此处如果是多个组件合并返回的是合并对象例如：{c:{number:0},t:{todos:[ "吃饭", "睡觉"]}}，如果是单一组件，未经过合并，返回的就是一个状态，例如：{number:0}
    listeners.forEach(listener => listener()); // 重新渲染，
  }

  dispatch({});
  // 将方法暴露给外部使用，将状态（数据源）放到了容器中（方法中），外部无法进行更改
  return { dispatch, getState, subScribe } // 如果不是为了防止修改数据源state就可以直接return { dispatch, state }
}


// 合并多组件功能----多个组件同时使用，合并reducer,把各个组件的reducer合并成一个，{c:{number:0},t:{todos:[]}}
// key 是新状态的命名空间，值是reducer,执行后会返回一个新的reducer
function combineReducers(reducers) {
  // 第二次调用reducer 内部会自动的把第一次的状态传递给reducer
  return (state = {}, action) => {
    let newState = {};
    // reducer默认要返回一个状态，要获取 counter的初始值和todo的初始值
    for (let key in reducers) {
      let s = reducers[key](state[key], action);// 此处第一次执行的时候 state[key]为undefied ,action为{}，所以会将reducers文件夹下，各个文件中定义的initstate当作state返回
      newState[key] = s;
    }
    return newState;// {c:{number:0},t:{todos:[]}}
  }
}


export { createStore, combineReducers };