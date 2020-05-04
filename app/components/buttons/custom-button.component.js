import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Text, View, TouchableHighlight, Button } from 'react-native';
import { styles } from './custom-button.styles';

class CustomButton extends Component {
    render() {
        const { text, icon, color, backgroundColor } = this.props;
        return (
            <TouchableHighlight style={[{ backgroundColor }, styles.wrapper]}>
                <View style={styles.buttonTextWrapper}>
                    {icon}
                    <Text style={[{ color }, styles.buttonText]}>{text}</Text>
                </View>
            </TouchableHighlight>
        )
    }
}

CustomButton.propTypes = {
    text: propTypes.string.isRequired,
    backgroundColor: propTypes.string,
    color: propTypes.string
};

export default CustomButton;