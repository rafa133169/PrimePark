import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation desde react-navigation/native
import axios from 'axios';
import GetAddress from '../components/getAdress';




const HomeScreen = () => {
  const [isPressed, setIsPressed] = useState(false);
  const navigation = useNavigation(); // Obtiene el objeto de navegación
  const [ipAddress, setIPAddress] = useState('');
  const ip = GetAddress();
  


  const realizarPeticion = () => {
    axios.get(`http://${ip}:4001/arduino/`)
  .then(response => {
    // Manejar los datos de la respuesta
    console.log(response.data);
  })
  .catch(error => {
    // Manejar cualquier error
    console.error('Error al obtener datos:', error);
  });
  };

  const abrirPrime = () => {
    axios.put(`http://${ip}:4001/caseta/abrir-caseta-prime`)
  .then(response => {
    // Manejar los datos de la respuesta
    console.log(response.data);
  })
  .catch(error => {
    // Manejar cualquier error
    console.error('Error al abrir prime', error);
  });
  };
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.topText}>Inicio</Text>
        <Text style={styles.welcomeText}>Hola, Diego!</Text>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.reserveText}>Reservar estacionamiento</Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={realizarPeticion}
          style={[
            styles.card,
            isPressed && { backgroundColor: '#FFBA82' },
          ]}
        >
          <Card.Content style={styles.cardContent}>
            <Text style={styles.cardText}>Elegir lugar</Text>
            <Image
              source={require('../../assets/parking.png')}
              style={{ width: 100, height: 100 }}
            />
          </Card.Content>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={abrirPrime}
          style={[
            styles.card,
            isPressed && { backgroundColor: '#FFBA82' },
          ]}
        >
          <Card.Content style={styles.cardContent}>
            <Text style={styles.cardText}>AbrirPrime</Text>
            <Image
              source={require('../../assets/parking.png')}
              style={{ width: 100, height: 100 }}
            />
          </Card.Content>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topContainer: {
    flex: 1,
    backgroundColor: '#656CEE',
    justifyContent: 'center',
    paddingLeft: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  topText: {
    color: 'white',
    fontSize: 24,
    marginBottom: 10,
    textAlign: 'center',
    paddingBottom: 60,
  },
  welcomeText: {
    color: 'white',
    fontSize: 32,
  },
  bottomContainer: {
    flex: 3,
    backgroundColor: 'white',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  reserveText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  card: {
    width: '80%',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 10,
   
    backgroundColor: 'white',
    borderLeftColor: '#FFBA82', // Color del borde izquierdo
    borderLeftWidth: 5, // Ancho del borde izquierdo
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardText: {
    fontSize: 18,
    marginRight: 30,
    fontSize: 24,
  },
});

export default HomeScreen;
