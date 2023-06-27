import React from "react";
import { render } from "react-dom";
import "./styles/stylesheet.css"
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import rootReducer from './redux/reducer'
import { Provider } from "react-redux";
import Main from "./Components/App";

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(<Provider store={store}>
        <BrowserRouter><Main/></BrowserRouter>
    </Provider>, document.getElementById('root'));