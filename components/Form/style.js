import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    addTask: {
        bottom: 30,
        paddingHorizontal: 20,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    input: {
        width: '90%',
        height: 44,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#21a3d0',
        borderRadius: 20,
        paddingHorizontal: 20,
    },
    iconWrapper: {
        width: 44,
        height: 44,
        backgroundColor: '#21a3d0',
        borderRadius: 44,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 5,
    },
    icon: {
        fontSize: 24,
        color: '#fff',
    },
});
export default styles;
