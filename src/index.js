import React from "react";
import ReactDom, { render } from "react-dom";
import Counter from "./component/counter";
import Todo from "./component/todo";



render(<div><Todo /><Counter /></div>, window.root);