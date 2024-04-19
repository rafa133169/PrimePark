import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GetAddress from '../components/getAdress';

const CodigoScreenPremium = () => {
  const navigation = useNavigation();
  const ip = GetAddress();
  const [isPressed, setIsPressed] = useState(false);


 

  const handlePress = () => {
    setIsPressed(!isPressed);
    axios.put(`http://${ip}:4001/servo/abrir-caseta-prime`)
  .then(response => {
    // Manejar los datos de la respuesta
    console.log(response.data);
  })
  .catch(error => {
    // Manejar cualquier error
    
    console.error('Error al abrir prime', error);
  });
  navigation.navigate('TemporizadorEstaticPremium');

  
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.roundButton} onPress={handlePress}>
        <Text style={styles.buttonText}>Levantar Pluma</Text>
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
  roundButton: {
    backgroundColor: '#FF6B6B',
    borderRadius: 50,
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CodigoScreenPremium;
