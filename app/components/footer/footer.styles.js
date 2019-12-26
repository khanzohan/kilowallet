import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between",
        backgroundColor: 'white',
        alignItems: 'flex-end',
        flex: 1,
        borderWidth: 1,
        borderColor: "lightgray",
        padding: 5,
    },
    item: {
        flex: 1,
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
        fontFamily: 'sans-serif',
        textAlign: "center",
    }
})

export { styles, text }
