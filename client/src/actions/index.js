const apiUrl = '/express_backend';


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

export const postMessage = message => {
    return (dispatch) => {
        return fetch(apiUrl, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(message)
        }).then(response => {
            response.json()
                .then(messages => {
                    dispatch(postMessageSuccess(messages))
                })
                .catch(error => {
                    throw(error);
                })
        })
            .catch(error => {
                throw(error);
            });
    };
};

export const postMessageSuccess = message => {
    return {
        type: 'POST_MESSAGE_SUCCESS',
        payload: message,
    };
};

export const deleteMessageExpress = item => {
    return (dispatch) => {
        return fetch(apiUrl + '/' + item, {
            method: 'DELETE'
        }).then(response => {
            response.json()
                .then(messages => {
                    dispatch(postMessageSuccess(messages))
                })
                .catch(error => {
                    throw(error);
                })
        })
            .catch(error => {
                throw(error);
            });
    };
};

export const deleteMessageSuccess = messages => {
    return {
        type: 'DELETE_MESSAGE_SUCCESS',
        payload: messages,
    };
};