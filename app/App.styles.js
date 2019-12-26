import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: 'rgb(72,179,0)',
        flex: 1,
    }
})

const text = StyleSheet.create({
    primary: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: 20,
        fontFamily: 'sans-serif',
        textAlign: "center",
    }
})

export { styles, text }
