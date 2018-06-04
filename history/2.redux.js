
// 先定义好要干哪些事情，常量（宏）
const CHANGE_TITLE_COLOR = "CHANGE_TITLE_COLOR";
const CHANGE_CONTENT_COLOR = "CHANGE_CONTENT_COLOR";

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



// 将定义状态的部分抽离到外部
let initState = {
    title: {
        color: "red",
        text: "标题"
    },
    content: {
        color: 'blue',
        text: '内容'
    }
}
// 用户自己定义的规则部分抽离到外部，有两个参数，要根据老的状态和新传递的动作，算出新的状态----如果想获取默认状态，有一种方式就是调用reducer，让每一个规则都不匹配返回默认值
function reducer(state = initState, action) {
    switch (action && action.type) {
        case CHANGE_TITLE_COLOR:
            return { ...state, title: { ...state.title, color: action.color } };// 对象解构，给对象属性重新赋值
        case CHANGE_CONTENT_COLOR:
            return { ...state, content: { ...state.content, color: action.color } };
        default:
            return state;
    }
}

let store = createStore(reducer);

// 渲染标题 
function readerTitle() {
    let title = document.querySelector('#title');
    title.style.background = store.getState().title.color;
    title.innerHTML = store.getState().title.text;
}
// 渲染内容
function readerContent() {
    let content = document.querySelector("#content");
    content.style.background = store.getState().content.color;
    content.innerHTML = store.getState().content.text;
}


function reader() {
    readerTitle();
    readerContent();
}
reader();
let remove = store.subScribe(reader);
// 发布订阅模式。现将render 方法，订阅好，每次dispatch时都调用订阅好的方法
setTimeout(() => {
    store.dispatch({ type: CHANGE_TITLE_COLOR, color: 'yellow' });// 更改state后，需要重新渲染
    remove();
}, 200);

// ？？？？？？？？？？？？？？？？？？？setTimeout 设置时间了也是执行一次，不能实现多次执行？？？？？？？？？？？