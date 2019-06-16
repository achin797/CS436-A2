export const addMessage = message => {
    return {
        type: 'ADD_MESSAGE',
        payload: message,
    };
};

export const deleteMessage = messages => {
    return {
        type: 'DELETE_MESSAGE',
        payload: messages,
    };
};