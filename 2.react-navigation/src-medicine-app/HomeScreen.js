import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Pressable,
    TouchableOpacity
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import QRScanner from './QRScanner';
const Tab = createMaterialBottomTabNavigator();
export default function HomeScreen({ navigation, route }) {
    
    const name = route.params;
    const onPressQRScanner = () => {
        navigation.navigate('QRScanner');
      }
      const onPressSearchNearBy = () => {
        navigation.navigate('SearchNearBy');
      }
    return (
        
        <View style={styles.body}>
            <Text style={styles.text}>
                You are registered as {name}
            </Text>
            <TouchableOpacity style={styles.button}
                onPress={onPressQRScanner}
            >
                <Text style={styles.buttonText}>QR Scan</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}
                onPress={onPressSearchNearBy}
            >
                <Text style={styles.buttonText}>Search Nearest Hospitals</Text>
            </TouchableOpacity>
        </View>
        
        
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        margin: 10,
    }
})

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import {
//   StyleSheet,
//   View,
//   Text,
//   Pressable,
// } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import ScreenA from './ScreenA';
// import ScreenB from './ScreenB';
// import QrScanner from './test_qr_1';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// // const Tab = createBottomTabNavigator();
// const Tab = createMaterialBottomTabNavigator();
// // const Tab = createMaterialTopTabNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={[({ route }) => ({
//             tabBarIcon: ({ focused, size, color }) => {
//                 let iconName;
//                 if (route.name === 'Screen_A') {
//                 iconName = 'autoprefixer';
//                 size = focused ? 25 : 20;
//                 // color = focused ? '#f0f' : '#555';
//                 } else if (route.name === 'Screen_B') {
//                 iconName = 'btc';
//                 size = focused ? 25 : 20;
//                 // color = focused ? '#f0f' : '#555';
//                 } else if (route.name === 'QrScanner'){
//                   iconName = 'btc';
//                   size = focused ? 25 : 20;
//                 }
//                 return (
//                 <FontAwesome5
//                     name={iconName}
//                     size={size}
//                     color={color}
//                 />
//                 )
//             }
//             }),
//             {
//                 "tabBarActiveTintColor": "#f0f",
//                 "tabBarInactiveTintColor": "#555",
//                 "tabBarShowLabel": true,
//                 "tabBarShowIcon": true,
//                 "tabBarLabelStyle": {
//                   "fontSize": 14
//                 }
//             }
//           ]
//         }
//         activeColor='#f0edf6'
//         inactiveColor='#3e2465'
//         barStyle={{ backgroundColor: '#694fad' }}
//       >
//         <Tab.Screen
//           name="Screen_A"
//           component={ScreenA}
//           options={{ tabBarIcon: () => <Text>😍</Text> }}
//         />
//         <Tab.Screen
//           name="Screen_B"
//           component={ScreenB}
//           options={{ tabBarIcon: () => <Text>😝</Text>}}
//         />
//         <Tab.Screen
//           name="QrScanner"
//           component={QrScanner}
//           options={{ tabBarIcon: () => <Text>😎</Text>}}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   )
// }

// export default App;