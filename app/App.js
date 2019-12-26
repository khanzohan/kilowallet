import React from 'react';
import {Text, View} from 'react-native';
import Header from './components/header/header.component';
import Main from './components/main/main.component';
import Footer from './components/footer/footer.component';
import { styles, text } from './App.styles';

const App = () => (
    <View style={styles.container}>
        <Header />
        <Main />
        <Footer />
    </View>
)

export default App;