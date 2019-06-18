const apiUrl = '/express_backend';

//For initial load of the client
export const addMessage = message => {
    return {
        type: 'ADD_MESSAGE',
        payload: message,
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
                    dispatch(updateMessages(messages))
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

export const updateMessages = message => {
    return {
        type: 'UPDATE_MESSAGES',
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
                    dispatch(updateMessages(messages))
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