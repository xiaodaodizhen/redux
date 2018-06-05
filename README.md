## redux
- 组件间的通讯，跨组件传递数据，平级数据传递
- 发布订阅
- redux可以解决数据传递，统一状态管理

## 项目文件（一个项目里，）
- store的文件夹，专门管理redux的
- actions 放actionCreator的
- reducers放reducer的
- action-types 放常量
- index 创建容器

- 备注：actions与reducers 这两个文件夹下的文件应该是一对一的，一般名字一致

## component文件
- counter1.js 是未将各个功能拆分成多个文件目录的组件


## npm install react-redux


- import { Provider } from "react-redux"
- Provider 可以实现将state 映射到组件中（省略了以往在  
        constructor() {
            super();
            this.state = { todos: store.getState().t.todos };// 省略了这一步状态
        }
  ），实现自动更新（不在需要订阅状态实现更新页面）
- 组件中
import { connect } from 'react-redux';//connect方法是实现redux和组件的链接

