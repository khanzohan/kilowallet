import React, { Component } from 'react';
import colors from '../../styles/color/color';
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  ScrollView,
  StyleSheet
} from 'react-native';
import { styles } from './login.styles';
import CustomButton from '../../components/buttons/custom-button.component';
import Icon from 'react-native-vector-icons/FontAwesome';


class Login extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.welcomeWrapper}>
          <Icon
            style={styles.logo}
            name='bolt'
            size={50}
          />
          <Text style={styles.welcomeText}>
            Welcome to Killowallet
          </Text>
          <CustomButton
            text='Log in with Facebook'
            color='white'
            title='Facebook'
            backgroundColor='#3b5998'
            icon={<Icon name='facebook' size={20} style={styles.icon} color='white' />} />
          <CustomButton
            text='Log in with Google'
            color='white'
            title='Google'
            backgroundColor='red'
            icon={<Icon name='google' size={20} style={styles.icon} />} />
          <CustomButton text='Create an Account'
            backgroundColor={colors.green01}
            title="Create Account"
            color='white' />
          <Text style={styles.subText}>
            Continue without signing in
          </Text>
          <View style={styles.termsAndConditions}>
            <Text style={styles.termsText}>
              By tapping Continue, Create Account or More
            </Text>
            <Text style={styles.termsText}>{'options, '}</Text>
            <Text style={styles.termsText}>{'I agree to the '}</Text>
            <TouchableHighlight style={styles.linkButton}>
              <Text style={styles.termsText}>Terms of Service</Text>
            </TouchableHighlight>
            <Text style={styles.termsText}>, </Text>
            <TouchableHighlight style={styles.linkButton}>
              <Text style={styles.termsText}>Payments Terms of Service</Text>
            </TouchableHighlight>
            <Text style={styles.termsText}>, </Text>
            <TouchableHighlight style={styles.linkButton}>
              <Text style={styles.termsText}>Privacy Policy</Text>
            </TouchableHighlight>
            <Text style={styles.termsText}>, and</Text>
            <TouchableHighlight style={styles.linkButton}>
              <Text style={styles.termsText}>Nondiscrimination Policy</Text>
            </TouchableHighlight>
            <Text style={styles.termsText}>.</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Login;