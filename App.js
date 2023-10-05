import { useState} from 'react';
import {Alert, StyleSheet, View , FlatList} from 'react-native';

import TaskItem from './components/taskItem';
import Taskinput from './components/taskInput';

export default function App() {
//  defining a state to store the task
 
  const [taskList, setTaskList] = useState([]);

  
// writing a function to add the task to the list
  function addTask(task) {
    // console.log("Added task -> ",task);
    // task should not be empty
    if(task.length >= 1){
     
      setTaskList([...taskList,{text:task , id:Math.random().toString()}]);
    }
    console.log("Task List -> ",...taskList);
  }

  const handleDelete = (id) => {
    console.log("Delete task with id -> ",id);
    setTaskList(taskList.filter(task => task.id !== id));
  };
  return (
    <View style={styles.container}>
      <Taskinput onTodoAdded ={addTask} />
      <FlatList style={styles.taskListContainer} data={taskList} 
          renderItem={(todoItem) => {
              return (
                
                <TaskItem text={todoItem.item.text} id={todoItem.item.id} onDelete={handleDelete}/>
              );
          }}
          keyExtractor={(item,index) => {
            return (
              item.id
            );
          }}
      />  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    borderColor: 'green',
    borderWidth: 3,
  }
});
