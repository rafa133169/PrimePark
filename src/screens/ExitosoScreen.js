import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ExitosoScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../../assets/exitosoicon.png')} style={styles.image} />
      </View>
      <Text style={styles.successText}>¡Tu pago fue exitoso!</Text>
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Codigo')}>
          <Text style={styles.buttonText}>Listo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  successText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  bottomContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  button: {
    marginTop: 40,
    backgroundColor: '#656CEE',
    paddingVertical: 12,
    paddingHorizontal: 20, // Añade este estilo para ajustar el ancho del botón
    borderRadius: 5,
    alignItems: 'center',
    width: '90%', // Puedes ajustar este valor para cambiar el ancho del botón
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ExitosoScreen;
