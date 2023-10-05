import { useState} from 'react';
import { View,TextInput,Button,StyleSheet } from "react-native";


const Taskinput = (props) => {
    const [task, setTask] = useState('');

    function getText(text) {
        console.log(text);
        setTask(text);
    }

    function onPress() {
        props.onTodoAdded(task);
        setTask('');
    }
    return ( 
        <View style={styles.inputContainer}>
        <TextInput placeholder='Add your Task' value={getText} onChangeText={getText} />
        <Button title='Add' onPress={onPress} />
      </View>
    );
}
 
export default Taskinput;

const styles = StyleSheet.create({
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderWidth: 5,
      borderColor: '#ccc',
      borderRadius: 10,
      padding: 10,
      marginBottom: 10,
    }
  });
  