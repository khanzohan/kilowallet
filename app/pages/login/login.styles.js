import { StyleSheet } from 'react-native';
import colors from '../../styles/color/color';


const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        display: 'flex',
        backgroundColor: 'white'
    },
    welcomeWrapper: {
        flex: 1,
        display: 'flex',
        padding: 20,
    },
    logo: {
        width: 50,
        height: 50,
        marginTop: 40,
        marginBottom: 40,
        left: 10,
        color: colors.green01
    },
    welcomeText: {
        fontSize: 30,
        color: colors.green01,
        fontWeight: '300',
        marginBottom: 40
    },
    subText: {
        fontSize: 15,
        color: colors.green01,
        fontWeight: '300',
        marginTop: 10,
        marginBottom: 20,
        textAlign: 'center',
        textDecorationLine: 'underline'
    },
    icon: {
        marginRight: -11,
        position: 'relative',
        zIndex: 8,
        color: 'white',
    },
    termsAndConditions: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
        marginTop: 30,
      },
      termsText: {
        color: colors.green01,
        fontSize: 16,
        fontWeight: '600',
      },
      linkButton: {
        borderBottomWidth: 1,
        borderBottomColor: colors.green01,
      },
})

export { styles };