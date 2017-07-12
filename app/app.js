import React, { Component } from 'react';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import ChatWindow from './chatWindow';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { messages, appState } from './reducers';

const rootReducer = combineReducers({
    messages,
    appState
});

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunk,
        logger
    )
);



const App = () => (
    <Provider store={store}>
        <ChatWindow />
    </Provider>
);

export default App;