import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    wrapper: {
        padding: 15,
        display: 'flex',
        borderRadius: 40,
        borderWidth: 1,
        marginBottom: 15,
        alignItems: 'center',
        borderColor: 'transparent'
    },
    buttonText: {
        fontSize: 16,
        width: '100%',
        textAlign: 'center'
    },
    buttonTextWrapper: {
        display: 'flex',
        flexDirection: 'row'
    }
})

export { styles };