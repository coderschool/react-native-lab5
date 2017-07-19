//import liraries
import React, { Component } from 'react';
import { Row, Image, View, Subtitle, Caption, Text } from '@shoutem/ui';

// create a component
class MessageRow extends Component {
    render() {
        return (
            <Row>
                <Image
                    styleName="small-avatar top"
                    source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-11.png' }}
                />
                <View styleName="vertical">
                    <View styleName="horizontal space-between">
                    <Subtitle>{this.props.sender}</Subtitle>
                    <Caption>20 minutes ago</Caption>
                    </View>
                    <Text styleName="multiline">{this.props.text}</Text>
                </View>
            </Row>
        );
    }
}


//make this component available to the app
export default MessageRow;
