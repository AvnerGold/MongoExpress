import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import{ NavigationContainer } from '@react-navigation/native';
import{ createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import{ createStackNavigator } from '@react-navigation/stack'
import{ MaterialCommunityIcons } from '@expo/vector-icons';
import Login from './src/screens/Login';
import Register from './src/screens/Register';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// const AdminTabs = () => {
//   return (
//     <Tab.Navigator>
    
//       <Tab.Screen
//         name="InOrder"
//         component={InOrder}
//       />
//       <Tab.Screen
//         name="InPackage"
//         component={InPackage}
//       />
//        <Tab.Screen
//         name="CReceived"
//         component={CReceived}
//       />    
//     </Tab.Navigator>
//   );
// };

// const UserTabs = () => {
//   return (
//     <Tab.Navigator>
//        <Tab.Screen
//         name="store"
//         component={Store}
//       />
//      <Tab.Screen
//         name="Cart"
//         component={Cart}
//       />
//         <Tab.Screen
//         name="Profile"
//         component={Profile}
//       />
//     </Tab.Navigator>
//   );
// };


export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
      />
      <Stack.Screen
        name="register"
        component={Register}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
