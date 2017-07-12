import firebase from './firebase';

const self = module.exports = {
    loadMessages: () => {
        return (dispatch) => {
            // dispatch isLoading
            firebase.database()
                .ref('messages')
                .once('value', (snapshot) => {
                    dispatch(self.messagesLoaded(snapshot.val()));
                });
        }
    },
    messagesLoaded: (data) => ({
        type: 'loaded',
        data
    })
}

