const initialMessagesState = {
    messageList: [
        {
            text: "Hello",
            sender: "Bao"
        },
        {
            text: "Goodbye",
            sender: "Charles"
        }
    ]
}

export const messages = (state=initialMessagesState, action) => {
    if (action.type == 'loaded') {
        return {
            messageList: action.data
        }
    }
    return state;
}

export const appState = (state = {}, action) => {
    if (action.type == 'load') {
        return {
            isLoading: true,
            ...state
        }
    }
    return state;
}