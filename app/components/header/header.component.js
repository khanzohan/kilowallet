import React from 'react';
import {Text, View, AppRegistry} from 'react-native';
import {styles, text} from './header.styles' ;

const Header = () => (
    <View style={styles.container}>
        <Text style={text.primary}>Log In</Text>
        <View style={styles.logo}>
            <Text style={text.logo}>Logo</Text>
        </View>
        <Text style={text.primary}>Join</Text>
    </View>
)

// AppRegistry.registerComponent('Header', () => Header);
export default Header;
