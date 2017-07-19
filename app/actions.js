import firebase from './firebase';

const self = module.exports = {
    loadMessages: () => {
        return (dispatch) => {
            dispatch(self.startLoading());
            firebase.database()
                .ref('messages')
                .once('value', (snapshot) => {
                    dispatch(self.messagesLoaded(snapshot.val()));
                });
            firebase.database()
                .ref('messages')
                .on('child_added', (snapshot) => {
                    dispatch(self.receivedMessage(snapshot.key, snapshot.val()))
                })
        }
    },
    receivedMessage: (key, data) => ({
        type: 'receivedMessage',
        key,
        data
    }),

    messagesLoaded: (data) => ({
        type: 'loaded',
        data
    }),
    startLoading: () => ({
        type: 'startLoading'
    }),

    sendMessage: (data) => {
        return (dispatch) => {
            firebase.database()
                .ref('messages')
                .push(data)
        }
    }
}


