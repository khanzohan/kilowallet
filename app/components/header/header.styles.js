import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between",
        backgroundColor: 'rgb(72,179,0)',
        padding: 10,
        paddingTop: 50,
        flex: 1,
    }, 
    logo: {
        position: "absolute",
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
        fontFamily: 'sans-serif',
        zIndex: 3,
        justifyContent: "center",
        alignItems: "center",
        top: 30,
        left: 0, 
        right: 0,
        bottom: 0
    }
})

const text = StyleSheet.create({
    primary: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'sans-serif'
    },
    logo: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
        fontFamily: 'sans-serif',
    }
})

export { styles, text }
