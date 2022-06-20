import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

import styles from './style';

const Task = (props) => {
    return (
        <TouchableOpacity onPress={props.onDeleteTask}>
            <View style={styles.item}>
                <View style={styles.sequence}>
                    <Text style={styles.sequenceText}>{props.number}</Text>
                </View>
                <Text style={styles.work}>{props.content}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default Task;
