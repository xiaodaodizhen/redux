// 数据源
let state = {
    title: {
        color: "red",
        text: "标题"
    },
    content: {
        color: 'blue',
        text: '内容'
    }

}

// 渲染标题 
function readerTitle() {
    let title = document.querySelector('#title');
    title.style.background = state.title.color;
    title.innerHTML = state.title.text;
}
// 渲染内容
function readerContent() {
    let content = document.querySelector("#content");
    content.style.background = state.content.color;
    content.innerHTML = state.content.text;

}

// 先定义好要干哪些事情，常量（宏）
const CHANGE_TITLE_COLOR = "CHANGE_TITLE_COLOR";
const CHANGE_CONTENT_COLOR = "CHANGE_CONTENT_COLOR";
// 派发时应该将修改的动作提交过来,参数为{type:"",updateCon:""}
function dispatch(action) { // 派发的方法，这里是要更改状态
    switch (action.type) {
        case CHANGE_TITLE_COLOR:
            state.title.color = action.updateCon;
            break;
        case CHANGE_CONTENT_COLOR:
            state.content.color = action.updateCon;
            break;
        default:
            break;
    }
}


function reader() {
    readerTitle();
    readerContent();
}
reader();

// 执行以下代码，就更改了数据源的状态state,运行会报错，
// state={};
// reader();
/**
 * 1.状态不应该是全局的，不应该在某个方法（组件）里直接更改（有误操作的风险）
 * 2.应该提供一个改状态的方法，不要让用户随意更改状态
 * 3.每次更改状态的时候需要调用一个dispatch方法，调用时直接提供一个对象带有type类型来告诉他怎样更改，
 */
dispatch({ type: CHANGE_TITLE_COLOR, updateCon: 'yellow' });// 更改state后，需要重新渲染
reader();