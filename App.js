import React, { useState } from 'react';
import { Text, View, ScrollView, Alert } from 'react-native';
import Task from './components/Task/Task';
import styles from './App.style';
import Form from './components/Form/Form';
const YourApp = () => {
    const [taskList, setTaskList] = useState([]);
    const handleAddTask = (task) => {
        setTaskList([...taskList, task]);
    };
    const handleDeleteTask = (index) => {
        Alert.alert('Thông báo', 'Bạn có chắc chắn muốn xóa?', [
            {
                text: 'Cancel',
                onPress: () => {},
                style: 'cancel',
            },
            {
                text: 'OK',
                onPress: () => {
                    let taskListTmp = [...taskList];
                    taskListTmp.splice(index, 1);
                    setTaskList(taskListTmp);
                },
            },
        ]);
    };
    return (
        <View style={styles.container}>
            <Text style={styles.header}>To do list</Text>
            <View style={styles.body}>
                <ScrollView style={styles.items}>
                    {taskList.map((item, index) => {
                        return (
                            <Task
                                number={index}
                                content={item}
                                key={index}
                                onDeleteTask={() => handleDeleteTask(index)}
                            />
                        );
                    })}
                </ScrollView>
            </View>
            <Form onAddTask={handleAddTask} />
        </View>
    );
};

export default YourApp;
