import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';

const App = () => {
    const [name, setName] = useState('');
    const [submitted, SetSubmitted] = useState(false);
    const onPressHandler = () => {
        SetSubmitted(!submitted); // return true
    }
    return (
        <View style={styles.body}>
            <Text style={[styles.text, {marginTop: 20}]}>
                Please write your name:
            </Text>
            <TextInput 
                style={styles.input}
                placeholder='e.g. Nathan Ngo'
                onChangeText={(value) => setName(value)}
            />
            <Button
                title={!submitted ? 'Submit' : 'Clear'}
                onPress={onPressHandler} 
            /> 
            {submitted ? 
                <Text style={styles.text}>
                    You are registered as {name}
                </Text>
                :
                null
            }


        </View>
    )
}

const styles = StyleSheet.create({
    body: {
      flex: 1,
      backgroundColor: '#ffffff',
      alignItems: 'center',
    },
    text: {
      color: '#000000',
      fontSize: 20,
    },
    input: {
      width: 200,
      borderWidth: 1,
      borderColor: '#555',
      borderRadius: 5,
      textAlign: 'center',
      fontSize: 20,
      marginBottom: 10,
    },
    button: {
      width: 150,
      height: 50,
      alignItems: 'center',
    },
  });
  
  export default App;