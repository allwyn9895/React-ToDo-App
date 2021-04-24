import React,{useState} from 'react';
import { Alert, StyleSheet, View, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header'
import TodoItem from './components/todoItem'
import AddTodo from './components/addTodo'

// import Sandbox from './components/sandbox'


export default function App() {

  const [todos, settodos] = useState([
    {text:'Click me after Task completion', key:'2'},
    {text:'Add a To Do to the List', key:'1'},
  ]);

  const pressHandler = (key) => {
    settodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key!= key );
    });
  }

  const submitHandler = (text) => {

    if(text.length >3 ) {
      settodos((prevTodos) => {
        return [
          {text: text , key:Math.random().toString() },
          ...prevTodos
        ]
      })
    }
    else  
    {
      Alert.alert('Oops!', 'To Dos must be over 3 chars long', [{text:'Cancel', onPress: () => console.log('alert closed')}])
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
    <View style={styles.container}>
    <Header />
      <View style={styles.content}>
      <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList 
          data = {todos}
          renderItem={({item}) => (
            <TodoItem item={item} pressHandler={pressHandler} />
          )}
          />
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback> 
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    // backgroundColor:'pink',
    padding:40,
    flex:1,
  },
  list: {
    flex: 1,
    // backgroundColor:'yellow',
    marginTop:20,
  }
});
