import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';

const App = () => {
  return (
    // BODY VIEW
    <View style={styles.body}> 
      <View style={styles.row1}>
        
        <View style={styles.view1}>
          <Text style={styles.text}>
            1
          </Text>
        </View>

        <View style={styles.view2}>
          <Text style={styles.text}>
            2
          </Text>
        </View>

        <View style={styles.view3}>
          <Text style={styles.text}>
            3
          </Text>
        </View>

      </View>

      <View style={styles.row2}>
        
        <View style={styles.view3}>
          <Text style={styles.text}>
            4
          </Text>
        </View>

        <View style={styles.view2}>
          <Text style={styles.text}>
            5
          </Text>
        </View>

        <View style={styles.view1}>
          <Text style={styles.text}>
            6
          </Text>
        </View>

      </View>

      <View style={styles.big_row}>
        
        <View style={styles.col1}>
          
          <View style={styles.view1}>
            <Text style={styles.text}>
              7
            </Text>
          </View>

          <View style={styles.view2}>
            <Text style={styles.text}>
              8
            </Text>
          </View>

        </View>

        <View style={styles.col2}>
          
          <View style={styles.view2}>
            <Text style={styles.text}>
              9
            </Text>
          </View>

          <View style={styles.view1}>
            <Text style={styles.text}>
              10
            </Text>
          </View>

        </View>

      </View>
      

      <View style={styles.row3}>
        <Text style={styles.text}>
          End of app!
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#7fffd4',
  },
  row1: {
    flexDirection: 'row',
    backgroundColor: '#f0ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row2: {
    flexDirection: 'row',
    backgroundColor: '#ffe4c4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row3: {
    width:400,
    height:60,
    flexDirection: 'row',
    backgroundColor: '#f0ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  big_row: {
    flex:1,
    flexDirection: 'row',
    backgroundColor: '#f5f5dc',
    // alignItems: 'baseline',
    // justifyContent: 'flex-start',
  },
  col1 :{
    margin: 40,
    flexDirection: 'column',
    backgroundColor: '#0000ff',
    width: 100,
    height: 300
  },

  col2 :{
    margin: 40,
    flexDirection: 'column',
    backgroundColor: '#8a2be2',
    width: 100,
    height: 300
  },

  view1: {
    margin: 25,
    flex: 1,
    backgroundColor: '#00ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view2: {
    margin: 25,
    flex: 2,
    backgroundColor: '#ff00ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view3: {
    margin: 25,
    flex: 3,
    backgroundColor: '#ffff00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view4: {
    margin: 25,
    flex: 1,
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view5: {
    margin: 25,
    flex: 1,
    backgroundColor: '#0fff0f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view6: {
    margin: 25,
    flex: 1,
    backgroundColor: '#5f9ea0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view7: {
    flex: 1,
    backgroundColor: '#0000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
  },
});

export default App;