

function createStore() {
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
    // 克隆一份数据源，保证唯一性，外部使用不被修改数据源
    let getState = () => JSON.parse(JSON.stringify(state));

    // 派发时应该将修改的动作提交过来,参数为{type:"",updateCon:""}
    let dispatch = (action) => { // 派发的方法，这里是要更改状态
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
    // 将方法暴露给外部使用，将状态（数据源）放到了容器中（方法中），外部无法进行更改
    return { dispatch, getState } // 如果不是为了防止修改数据源state就可以直接return { dispatch, state }
}

let store = createStore();
console.log(store);
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

// 先定义好要干哪些事情，常量（宏）
const CHANGE_TITLE_COLOR = "CHANGE_TITLE_COLOR";
const CHANGE_CONTENT_COLOR = "CHANGE_CONTENT_COLOR";



function reader() {
    readerTitle();
    readerContent();
}
reader();

store.dispatch({ type: CHANGE_TITLE_COLOR, updateCon: 'yellow' });// 更改state后，需要重新渲染
reader();