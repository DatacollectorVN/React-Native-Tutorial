import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function App() {
  return (
    <View style={style.container}>
      <Text>Hello Nathan Ngo!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
export default App;
