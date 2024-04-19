import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CodigoScreen = () => {
  const navigation = useNavigation();

  // Función para generar un código aleatorio de 6 caracteres alfabéticos
  const generateRandomCode = () => {
    let result = '';
    const characters = '0123456789ABCD';
    const charactersLength = characters.length;
    for (let i = 0; i < 4; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  const randomCode = generateRandomCode();

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/llave.jpg')} style={styles.image} />
      <Text style={styles.title}>Código generado</Text>
      <Text style={styles.code}>{randomCode}</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Temporizador')}>
        <Text style={styles.buttonText}>Siguiente</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  code: {
    fontSize: 36,
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#656CEE',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: 300,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CodigoScreen;
