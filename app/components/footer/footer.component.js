import React from 'react';
import {Text, View, AppRegistry} from 'react-native';
import {styles, text} from './footer.styles';


const Footer = () => (
    <View style={styles.container}>
        <View style={styles.item}>
            <Text style={text.primary}>Home</Text>
        </View>
        <View style={styles.item}>
            <Text style={text.primary}>Wallet</Text>
        </View>
        <View style={styles.item}>
            <Text style={text.primary}>Redeem</Text>
        </View>
        <View style={styles.item}>
            <Text style={text.primary}>Refer</Text>
        </View>
    </View>
)

export default Footer;