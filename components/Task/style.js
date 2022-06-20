import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        backgroundColor: 'white',
        marginTop: 10,
        alignItems: 'center',
        borderRadius: 15,
        justifyContent: 'space-between',
    },
    sequence: {
        height: 35,
        width: 35,
        borderRadius: 10,
        backgroundColor: '#53d6f2',
        alignItems: 'center',
        justifyContent: 'center',
        width: '10%',
        margin: 4,
    },
    sequenceText: {
        fontSize: 16,
        fontWeight: '700',
        color: '#fff',
    },
    work: {
        justifyContent: 'center',
        width: '90%',
        fontSize: 16,
    },
});

export default styles;
