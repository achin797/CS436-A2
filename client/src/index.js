import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MessageList from "./components/MessageList";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(thunk));

var destination = document.querySelector("#container");

ReactDOM.render(
    <div>
        <Provider store={store}>
            <MessageList/>
        </Provider>
    </div>
    ,
    destination
);