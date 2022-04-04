import { Text, View, StyleSheet, Button} from 'react-native';
import { Component } from 'react';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class App extends Component{
  constructor() {
    super();
    this.state = {
      counter: 0
    };
  };
  
  incrementCount(){
    this.setState({
      counter: this.state.counter + 1
    });
  };

  decrementCount(){
    this.setState({
      counter: this.state.counter - 1
    });
  };

  render(){
    return(
      <View style={style.container}>
        <Text>Count: {this.state.counter}</Text>
        <Button onPress={this.incrementCount.bind(this)} title="+"></Button>
        <Button onPress={this.decrementCount.bind(this)} title="-"></Button>
      </View>
    )
  }
}

export default App;
