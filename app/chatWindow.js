import React, { Component } from 'react';
import { View, FlatList, TextInput, Text, ActivityIndicator, StyleSheet, Animated } from 'react-native';
import { connect } from 'react-redux';

import { loadMessages, sendMessage } from './actions';
import MessageRow from './messageRow';

class ChatWindow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            textInputError: false
        };
        this._animated = new Animated.Value(0);
    }

    componentWillMount() {
        this.props.loadMessages();
    }

    _showErrorAnimation() {
        Animated.timing(this._animated, {
            toValue: 1,
            duration: 500
        }).start();
    }

    _removeErrorAnimation() {
        Animated.timing(this._animated, {
            toValue: 0,
            duration: 500
        }).start();
    }

    render() {
        if (this.props.isLoading) {
            return (
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <ActivityIndicator/>
                </View>
            )            
        }

        let backgroundColor = this._animated.interpolate({
            inputRange: [0, 1],
            outputRange: ['rgb(255,255,255)', 'rgb(255,0,0)']
        });

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
                <Animated.View style={{ backgroundColor: backgroundColor }}>
                    <TextInput
                        ref="textInput"
                        style={[styles.base]}
                        onChangeText={() => {
                            // What to do what to do
                            this._removeErrorAnimation();
                        }}
                        onSubmitEditing={(event) => {
                            // Clear the input of the text input. 
                            const text = event.nativeEvent.text;
                            if (!text) {
                                // The text is empty! Let's turn the text input backgroundColor to red. 
                                this._showErrorAnimation();
                            } else {
                                //success
                                this.refs.textInput.clear();  
                                //todo: send. Dear Minh, please tell me what to write. 
                                this.props.sendMessage(text);
                            }
                        }}
                    />
                </Animated.View>
            </View>
        )
    }    
}

const styles = StyleSheet.create({
    base: {
        padding: 5, 
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1
    }
})


const mapStateToProps = (state) => (
    {
        messages: state.messages,
        isLoading: !!state.appState.isLoading
    }
);

const mapDispatchToProps = (dispatch) => ({
    loadMessages: () => dispatch(loadMessages()),
    sendMessage: (text) => dispatch(sendMessage({
        text,
        sender: 'Tuan',
        timestamp: Date.now()
    }))
});


export default connect(mapStateToProps, mapDispatchToProps)(ChatWindow);