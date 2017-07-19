import React, { Component } from 'react';
import { View, FlatList, TextInput, Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import { loadMessages } from './actions';
import MessageRow from './messageRow';

class ChatWindow extends Component {

    componentWillMount() {
        this.props.loadMessages();
    }

    render() {
        if (this.props.isLoading) {
            return (
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <ActivityIndicator/>
                </View>
            )            
        }
        return (
            <View style={{paddingTop: 50, flex: 1, justifyContent: 'space-between'}}>
                <FlatList 
                    data={this.props.messages.messageList}
                    renderItem={({item, index}) => 
                        <MessageRow 
                            {...item}
                            index={index}
                        />
                    }
                    keyExtractor={(item) => item.key}
                />
                <TextInput
                    style={{padding: 5, height: 40, borderColor: 'gray', borderWidth: 1}}
                    onSubmitEditing={(event) => {
                        console.log('I want to send message: ', event.nativeEvent.text);
                    }}
                />
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