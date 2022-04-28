import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';

const App = () => {
  const [name, setName] = useState('Style Test')

  const onClickHandler = () => {
    setName('Style Test is Done!')
  }

  return (
    <View style={styles.body}>
      <Text style={styles.text}>{name}</Text>
      <View style={styles.button}>
        <Button title='Update State' onPress={onClickHandler}></Button>
      </View>
    </View>
  );
};
// https://reactnative.dev/docs/stylesheet
// 
const styles = StyleSheet.create({
  body: {
    width:300,
    height: 100,
    backgroundColor: '#ffff00',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 10,
    borderColor: '#ff00ff',
    borderRadius: 10,
    margin: 40
  },
  text: {
    color: '#000000',
    fontSize: 15,
    fontStyle: 'italic',
    margin: 10,
    textTransform: 'uppercase'
  },
  button: {
    width: 200,
    height: 60,
  }
});

export default App;