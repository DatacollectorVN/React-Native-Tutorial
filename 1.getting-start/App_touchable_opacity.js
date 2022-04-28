import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
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
            <TouchableOpacity
              style={styles.button}
              onPress={onPressHandler}
            >
              <Text style={[styles.text, {marginVertical: 10}]}>
                {!submitted ? 'clear' : 'Submit'}
              </Text>
            </TouchableOpacity>
            {submitted ? 
                <Text style={styles.text}>
                    You are registered as {name}
                </Text>
                :
                null
            }
            <Text style={styles.text}>
                End of app!
            </Text>


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
      width: 100,
      height: 50,
      alignItems: 'center',
      backgroundColor : '#7fffd4'
    },
  });
  
  export default App;