import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Main from './src/components/Main';
// import ParkingMap from './src/components/ParkingMap';

export default function App() {
  return (
    <>
    <View style={styles.container}>
      <Text>Prime park ddd</Text>
      <StatusBar style="auto" />
      <Main></Main>
    </View>
    {/* <ParkingMap></ParkingMap> */}
    </>
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
