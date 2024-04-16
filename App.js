import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen';
import MapScreen from './src/screens/MapScreen';
import ResumenScreen from './src/screens/ResumenScreen';
import PagoScreen from './src/screens/PagoScreen';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Main from './src/components/Main';
// import ParkingMap from './src/components/ParkingMap';



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator>
  <Stack.Screen name="Login" component={LoginScreen} />
  <Stack.Screen name="Register" component={RegisterScreen} />
  <Stack.Screen name="Home" component={HomeScreen} />
  <Stack.Screen name="Map" component={MapScreen} />
  <Stack.Screen name="Resumen" component={ResumenScreen} />
<<<<<<< HEAD
  <Stack.Screen name="Pago" component={PagoScreen} />
=======
  <Stack.Screen name= "Main" component={Main} />
>>>>>>> 83e4b9376c1318a3adbae63918cb3acaa3452309
</Stack.Navigator>

    </NavigationContainer>
  );
}

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
