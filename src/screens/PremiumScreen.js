import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Importa las imágenes de los coches
const carImages = [
  require('../../assets/car.png'),
  require('../../assets/car2.png'),
  require('../../assets/car3.png'),
  require('../../assets/car4.png'),
  // Agrega más imágenes según sea necesario
];

const PremiumScreen = ({ route }) => {
    const { zona, precio } = route.params;
  
    const [selectedSpot, setSelectedSpot] = useState(null);
    const occupiedSpots = [
      { row: 1, col: 0, carIndex: 3 },
      { row: 1, col: 1, carIndex: 2 },
      { row: 0, col: 1, carIndex: 1 },
      // Agrega más posiciones de coches ocupados según sea necesario
    ];
  
    const handleSpotPress = (row, col) => {
      if (!occupiedSpots.some((spot) => spot.row === row && spot.col === col)) {
        setSelectedSpot({ row, col });
      }
    };
  
    const navigation = useNavigation();
  
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.welcomeText}>Mapa</Text>
        </View>
        <View style={styles.parkingLot}>
          <Text style={styles.entrance}>Entrada</Text>
          {Array.from({ length: 2 }, (_, row) =>
            Array.from({ length: 2 }, (_, col) => {
              const occupiedSpot = occupiedSpots.find((spot) => spot.row === row && spot.col === col);
              const isSelected = selectedSpot && selectedSpot.row === row && selectedSpot.col === col;
              return (
                <TouchableOpacity
                  key={`${row}-${col}`}
                  style={[
                    styles.spotContainer,
                    {
                      top: `${(row + 0.5) * 40}%`,
                      left: `${col * 60}%`,
                      backgroundColor: isSelected ? '' : 'transparent',
                    },
                  ]}
                  onPress={() => handleSpotPress(row, col)}
                >
                  {occupiedSpot ? (
                    <Image source={carImages[occupiedSpot.carIndex]} style={styles.carImage} />
                  ) : (
                    <Text style={[styles.spot, { backgroundColor: isSelected ? '#56D6F0' : '#f1f1f1' }]}>
                      {`A0${row * 2 + col + 1}`}
                    </Text>
                  )}
                </TouchableOpacity>
              );
            })
          )}
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: selectedSpot ? '#656CEE' : '#B3B3B3' }]}
            onPress={() => navigation.navigate('ResumenPremium', { zona, precio, spot: selectedSpot })}
            disabled={!selectedSpot}
          >
            <Text style={styles.buttonText}>Confirmar</Text>
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
    backgroundColor: '#656CEE',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingVertical: 20, // Ajusta el espacio vertical
  },
  welcomeText: {
    color: 'white',
    fontSize: 24,
  },
  parkingLot: {
    width: '90%',
    height: 400,
    borderWidth: 2,
    borderColor: '#333',
    position: 'relative',
    marginVertical: 50,
    marginLeft:20
  },
  entrance: {
    position: 'absolute',
    top: -20,
    left: '55%',
    transform: [{ translateX: -50 }],
    backgroundColor: '#ccc',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  spotContainer: {
    position: 'absolute',
    top: 0,
    left: 40,
    width: '40%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  spot: {
    borderWidth: 1,
    borderColor: '#ccc',
    textAlign: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    width: '80%',
    height: '80%',
  },
  carImage: {
    width: '90%',
    height: '90%',
    resizeMode: 'contain',
  },
  bottomContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#656CEE',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    width: '80%',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PremiumScreen;
