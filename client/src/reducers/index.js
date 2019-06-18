import {combineReducers} from 'redux';

const initialState = [];
const messageReducer = (items = initialState, action) => {
    if (action.type === 'ADD_MESSAGE') {
        return items.concat(action.payload);
    }

    if(action.type === 'UPDATE_MESSAGES'){
        return action.payload;
    }

    return items;
};

export default combineReducers({
    //spent literally hours what went wrong. CHANGED messageReducer() to messageReducer and voila
    items: messageReducer,
});