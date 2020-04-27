import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 20,
    },
    item: {
        borderWidth: 1,
        borderColor: "lightgray"
    },
    icons: {
        width: 20,
        height: 20,
        textAlign: "center",
    }
})

const text = StyleSheet.create({
    primary: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: "left",
    }
})

export { styles, text }
