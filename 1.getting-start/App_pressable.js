import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
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
            <Pressable
              onLongPress={onPressHandler}
              hitSlop={{top: 10, bottom: 10, right:10, left:10}}
              android_ripple={{color:'#00f'}}
              style={({pressed}) => [
                {backgroundColor: pressed ? '#dddddd' : '#00ff00'},
                styles.button
              ]}
            >
<             Text style={[styles.text, {marginVertical: 10}]}>
                {submitted ? 'clear' : 'Submit'}
              </Text>
            </Pressable>
              
            
            {submitted ? 
                <Text style={styles.text}>
                    You are registered as {name}
                </Text>
                :
                <Image source={require('')}/>
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