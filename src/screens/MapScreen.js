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

const MapScreen = ({ route }) => {
  const { zona, precio } = route.params;

  const [selectedSpot, setSelectedSpot] = useState(null);
  const occupiedSpots = [
    { row: 0, col: 0, carIndex: 0 },
    { row: 1, col: 1, carIndex: 1 },
    { row: 2, col: 2, carIndex: 2 },
    { row: 0, col: 1, carIndex: 3 },
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
        <Text style={styles.exit}>Salida</Text>
        {Array.from({ length: 4 }, (_, row) =>
          Array.from({ length: 3 }, (_, col) => {
            const occupiedSpot = occupiedSpots.find((spot) => spot.row === row && spot.col === col);
            const isSelected = selectedSpot && selectedSpot.row === row && selectedSpot.col === col;
            return (
              <TouchableOpacity
                key={`${row}-${col}`}
                style={[
                  styles.spotContainer,
                  {
                    top: `${(row + 1) * 20}%`,
                    left: `${col * 33.33 + 1}%`,
                    backgroundColor: isSelected ? '' : 'transparent',
                    ':hover': {
                      backgroundColor: isSelected ? '' : '#f1f1f1',
                    },
                  },
                ]}
                onPress={() => handleSpotPress(row, col)}
              >
                {occupiedSpot ? (
                  <Image source={carImages[occupiedSpot.carIndex]} style={styles.carImage} />
                ) : (
                  <Text style={[styles.spot, { backgroundColor: isSelected ? '#56D6F0' : '#f1f1f1' }]}>
                    {`A0${row * 3 + col + 1}`}
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
  onPress={() => navigation.navigate('Resumen', { zona, precio, spot: selectedSpot })}
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
    width: '100%',
    height: 400,
    borderWidth: 2,
    borderColor: '#333',
    position: 'relative',
    marginVertical: 50,
  },
  entrance: {
    position: 'absolute',
    top: -20,
    left: '50%',
    transform: [{ translateX: -50 }],
    backgroundColor: '#ccc',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  exit: {
    position: 'absolute',
    bottom: -20,
    left: '50%',
    transform: [{ translateX: -50 }],
    backgroundColor: '#ccc',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  spotContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '32%',
    height: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  spot: {
    borderWidth: 1,
    borderColor: '#ccc',
    textAlign: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    width: '80%',
    height: '80%',
  },
  carImage: {
    width: '80%',
    height: '80%',
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

export default MapScreen;
