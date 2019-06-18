import {combineReducers} from 'redux';
import {POST_MESSAGE_SUCCESS, DELETE_MESSAGE} from "../actions/types";

const initialState = [];



const messageReducer = (items = initialState, action) => {
    if (action.type === 'ADD_MESSAGE') {
        return items.concat(action.payload);
    }

    if(action.type === DELETE_MESSAGE) {
        return action.payload;
    }

    if(action.type === POST_MESSAGE_SUCCESS){
        return action.payload;
    }

    return items;
};

export default combineReducers({
    //spent literally hours what went wrong. CHANGED messageReducer() to messageReducer and voila
    items: messageReducer,
});