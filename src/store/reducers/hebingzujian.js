import counter from "./counter";
import todo from "./todo";
import { combineReducers } from "../../redux";
let newReducer = combineReducers({
    c: counter,
    t: todo
});
export default newReducer; 