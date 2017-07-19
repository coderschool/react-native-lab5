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
    } else if (action.type == 'receivedMessage') {
        // remember action has action.data and action.key
        const newMsg = {
            key: action.key,
            text: action.data.text,
            sender: action.data.sender,
            timestamp: action.data.timestamp
        };
        return {
            messageList: state.messageList.concat([newMsg])
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