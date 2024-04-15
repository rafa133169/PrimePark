import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    // Aquí puedes agregar la lógica para manejar el inicio de sesión
    console.log('Correo:', email);
    console.log('Contraseña:', password);

    // Navegar a HomeScreen
    navigation.navigate('Home');
  };

  const navigateToRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/primepark.jpg')}
        style={styles.logo}
      />
      <View style={styles.formContainer}>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Correo</Text>
        </View>
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Contraseña</Text>
        </View>
        <TextInput
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
        <Button mode="contained" onPress={handleLogin} style={styles.button}>
          Iniciar Sesión
        </Button>
        <TouchableOpacity onPress={navigateToRegister}>
          <Text style={styles.registerText}>Registrate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#656CEE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200, // Ajusta el ancho de la imagen según sea necesario
    height: 200, // Ajusta el alto de la imagen según sea necesario
    resizeMode: 'contain', // Ajusta el modo de redimensionamiento de la imagen según sea necesario
    marginBottom: 20, // Ajusta el margen inferior según sea necesario
  },
  formContainer: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  labelContainer: {
    marginBottom: 5,
  },
  label: {
    color: '#9695A8',
    fontFamily: 'sans-serif',
    fontSize: 12,
  },
  input: {
    marginVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    paddingVertical: 2,
    backgroundColor: 'white',
  },
  button: {
    marginVertical: 10,
    backgroundColor: '#656CEE',
    borderRadius: 5,
  },
  registerText: {
    marginTop: 20, // Ajusta el margen superior según sea necesario
    textAlign: 'center',
    color: '#656CEE',
    fontSize: 16, // Ajusta el tamaño del texto según sea necesario
    textDecorationLine: 'none',
  },
});

export default LoginScreen;
