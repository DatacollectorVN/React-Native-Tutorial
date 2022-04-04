import { Text, View, StyleSheet, Button} from 'react-native';
import {useState} from 'react';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View style={style.container}>
    <Text>Count with hook: {counter}</Text>
    <Button onPress={() => setCounter(counter+1)} title="+"></Button>
    <Button onPress={() => setCounter(counter-1)} title="-"></Button>
  </View>
  )
};

export default App;