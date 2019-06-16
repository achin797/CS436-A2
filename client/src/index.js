import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MessageList from "./components/MessageList";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';

var destination = document.querySelector("#container");

ReactDOM.render(
    <div>
        <Provider store={createStore(reducers)}>
            <MessageList/>
        </Provider>
    </div>
    ,
    destination
);