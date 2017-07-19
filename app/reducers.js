const initialMessagesState = {
    messageList: []
}

export const messages = (state=initialMessagesState, action) => {
    if (action.type == 'loaded') {
        return {
            messageList: Object.keys(action.data).map(key => (
                {
                    key,
                    ...action.data[key]
                }
            ))
        }
    }
    return state;
}

export const appState = (state = {}, action) => {
    if (action.type == 'startLoading') {
        return {
            isLoading: true
        }
    } else if (action.type == 'loaded') {
        return {
            isLoading: false
        }
    }
    return state;
}