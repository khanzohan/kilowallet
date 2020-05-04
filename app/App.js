import React from 'react';
import { View } from 'react-native';
import Header from './components/header/header.component';
import Main from './components/main/main.component';
import Footer from './components/footer/footer.component';
import { styles } from './App.styles';
import Login from './pages/login/login.component'

const App = () => (
    <View style={styles.container}>
        {/* <Header />
        <Main />
        <Footer /> */}
        <Login />
    </View>
)

export default App;