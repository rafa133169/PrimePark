import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen';
import MapScreen from './src/screens/MapScreen';
import ResumenScreen from './src/screens/ResumenScreen';
import { NavigationContainer } from '@react-navigation/native';



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
</Stack.Navigator>

    </NavigationContainer>
  );
}

export default App;
