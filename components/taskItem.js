import { StyleSheet } from "react-native";
import { View, Text, Button, Alert } from "react-native";





const TaskItem = (props) => {

    function handleDelete() {
      props.onDelete(props.id)
    }

    return ( 
        <View style={styles.todos}>
                  <Text>{props.text}</Text>
                  {/* Button to delete item */} 
                  <Button title="Delete" onPress={handleDelete} />
                 </View>
     );
}
 
export default TaskItem;

const styles = StyleSheet.create({
    todos: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
    },
  });