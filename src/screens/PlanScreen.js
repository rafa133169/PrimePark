import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const PlanScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecciona tu zona</Text>
      <Card style={styles.card} onPress={() => navigation.navigate('Map', { zona: 'Zona Básica', precio: "$10.00" })}>
        <Card.Content style={styles.cardContent}>
          <View style={styles.textContainer}>
            <Text style={styles.buttonText}>Zona Básica</Text>
            <Text style={styles.priceText}>$10.00</Text>
          </View>
          <Image source={require('../../assets/star.png')} style={styles.image} />
        </Card.Content>
      </Card>
      <Card style={styles.card} onPress={() => navigation.navigate('Map', { zona: 'Zona Estándar', precio: "$20.00" })}>
        <Card.Content style={styles.cardContent}>
          <View style={styles.textContainer}>
            <Text style={styles.buttonText}>Zona Estándar</Text>
            <Text style={styles.priceText}>$20.00</Text>
          </View>
          <Image source={require('../../assets/check.png')} style={styles.image} />
        </Card.Content>
      </Card>
      <Card style={styles.card} onPress={() => navigation.navigate('Map', { zona: 'Zona Premium', precio: "$30.00" })}>
        <Card.Content style={styles.cardContent}>
          <View style={styles.textContainer}>
            <Text style={styles.buttonText}>Zona Premium</Text>
            <Text style={styles.priceText}>$30.00</Text>
          </View>
          <Image source={require('../../assets/medal.png')} style={styles.image} />
        </Card.Content>
      </Card>
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
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    marginBottom: 10,
    width: '90%',
    height: '20%',
    backgroundColor: 'white',
    marginVertical: 40,
    backgroundColor:'#656CEE',
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  buttonText: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  priceText: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 120,
    resizeMode: 'contain',
  },
});

export default PlanScreen;
