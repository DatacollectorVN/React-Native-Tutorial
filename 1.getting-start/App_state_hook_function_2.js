import { Text, View, StyleSheet, Button} from 'react-native';
import {useState} from 'react';

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'rgb(255, 0, 255)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
  },
});

const App = () => {
  // Create 3 state objects
  const [name, setName] = useState('Nathan Ngo')
  const [session, setSession] = useState({number : 6, title : 'state'})
  const [current, setCurrent] = useState(true)

  // create function to update 3 state objects
  const onClickHandler = () => {
    setName('Programming with Nathan Ngo')
    setSession({number : session.number + 1, title : 'Style'})
    setCurrent(false)
  }
  return (
    <View style={styles.body}>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>This is session number {session.number} and about {session.title}</Text>
      <Text style={styles.text}>{current ? 'current session' : 'next session'}</Text>
      <Button title='Update State' onPress={onClickHandler}></Button>
    </View>
  )
};

export default App;