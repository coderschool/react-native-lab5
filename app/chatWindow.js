import React, { Component } from 'react';
import { View, FlatList, TextInput, Text } from 'react-native';
import { connect } from 'react-redux';

import { loadMessages } from './actions';

class ChatWindow extends Component {
    componentWillMount() {
        this.props.loadMessages();
    }

    render() {
        return (
            <View style={{paddingTop: 50}}>
                <FlatList 
                    data={this.props.messages.messageList}
                    renderItem = {({item}) => <Text>{item.sender} says: {item.text}</Text>}
                />
                <TextInput />
            </View>
        )
    }    
}



const mapStateToProps = (state) => (
    {
        messages: state.messages,
        isLoading: !!state.appState.isLoading
    }
);

const mapDispatchToProps = (dispatch) => ({
    loadMessages: () => dispatch(loadMessages())
});


export default connect(mapStateToProps, mapDispatchToProps)(ChatWindow);