import {combineReducers} from 'redux';

const initialState = [{key:1, text:'hello'}, {key:2, text:'i am'}, {key:3, text:'content'}];



const messageReducer = (items = initialState, action) => {
    if (action.type === 'ADD_MESSAGE') {
        return items.concat(action.payload);
    }

    if(action.type === 'DELETE_MESSAGE') {
        return action.payload;
    }

    return items;
};

export default combineReducers({
    //spent literally hours what went wrong. CHANGED messageReducer() to messageReducer and voila
    items: messageReducer,
});