import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen';
import MapScreen from './src/screens/MapScreen';
import EstandarScreen from './src/screens/EstandarScreen';
import PremiumScreen from './src/screens/PremiumScreen';
import ResumenScreen from './src/screens/ResumenScreen';
import PagoScreen from './src/screens/PagoScreen';
import ExitosoScreen from './src/screens/ExitosoScreen';
import CodigoScreen from './src/screens/CodigoScreen';
import PlanScreen from './src/screens/PlanScreen';
import TemporizadorScreen from './src/screens/TemporizadorScreen';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Main from './src/components/Main';
import GetAddress from './src/components/getAdress';
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
  <Stack.Screen name="Estandar" component={EstandarScreen} />
  <Stack.Screen name="Premium" component={PremiumScreen} />
  <Stack.Screen name="Resumen" component={ResumenScreen} />
  <Stack.Screen name="Pago" component={PagoScreen} />
  <Stack.Screen name="Exitoso" component={ExitosoScreen} />
  <Stack.Screen name="Codigo" component={CodigoScreen} />
  <Stack.Screen name="Plan" component={PlanScreen} />
  <Stack.Screen name="Temporizador" component={TemporizadorScreen} />
  <Stack.Screen name= "Main" component={Main} />
  <Stack.Screen name= "GetAddress" component={GetAddress} />

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