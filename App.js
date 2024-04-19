import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen';
import MapScreen from './src/screens/MapScreen';
import EstandarScreen from './src/screens/EstandarScreen';
import PremiumScreen from './src/screens/PremiumScreen';
import ResumenPremium from './src/screens/ResumenPremium';
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
import ResumenEstandar from './src/screens/ResumenEstandar';
import PagoScreenEstandar from './src/screens/PagoScreenEstandar';
import ExitosoEstandarScreen from './src/screens/ExitosoEstandarScreen';
import CodigoScreenEstandar from './src/screens/CodigoScreenEstandar';
import TemporizadorScreenEstatic from './src/screens/TemporizadorScreenEstatic';
import PagoScreenPremium from './src/screens/PagoScreenPremium';
import ExitosoPremium from './src/screens/ExitosoPremiumScreen';
import CodigoScreenPremium from './src/screens/CodigoScreenPremium';
import TemporizadorScreenEstaticPremium from './src/screens/TemporizadorScreenEstaticPremium';
import TemporizadorScreenPremium from './src/screens/TemporizadorScreenPremium';
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
  <Stack.Screen name="ResumenPremium" component={ResumenPremium} />
  <Stack.Screen name="Pago" component={PagoScreen} />
  <Stack.Screen name="PagoEstandar" component={PagoScreenEstandar} />
  <Stack.Screen name="PagoPremium" component={PagoScreenPremium} />
  <Stack.Screen name="Exitoso" component={ExitosoScreen} />
  <Stack.Screen name="ExitosoPremium" component={ExitosoPremium} />

  <Stack.Screen name="Codigo" component={CodigoScreen} />
  <Stack.Screen name="AbrirPlumPrime" component={CodigoScreenPremium} />

  <Stack.Screen name="Plan" component={PlanScreen} />
  <Stack.Screen name="Temporizador" component={TemporizadorScreen} />
  <Stack.Screen name="TemporizadorEstaticPremium" component={TemporizadorScreenEstaticPremium} />

  <Stack.Screen name= "Main" component={Main} />
  <Stack.Screen name= "GetAddress" component={GetAddress} />
  <Stack.Screen name= "ResumenEstandar" component={ResumenEstandar} />
  <Stack.Screen name= "ExitoEstandar" component={ExitosoEstandarScreen} />
  <Stack.Screen name= "AbrirPlumaEs" component={CodigoScreenEstandar} />
  <Stack.Screen name= "TemporizadorEstatic" component={TemporizadorScreenEstatic} />
  <Stack.Screen name= "TemporizadorPremium" component={TemporizadorScreenPremium} />

  

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