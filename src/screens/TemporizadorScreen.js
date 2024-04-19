import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Easing, Button, Image } from 'react-native';

const TemporizadorScreen = () => {
  const [segundos, setSegundos] = useState(0);
  const [temporizadorActivo, setTemporizadorActivo] = useState(true);
  const progress = new Animated.Value(0);

  useEffect(() => {
    let temporizador = null;
    if (temporizadorActivo) {
      temporizador = setInterval(() => {
        setSegundos((prevSegundos) => prevSegundos + 1);
        progress.setValue(segundos / 60); // Actualiza el valor de progreso de la animación
      }, 1000);
    } else if (!temporizadorActivo && segundos !== 0) {
      clearInterval(temporizador);
    }
    return () => clearInterval(temporizador);
  }, [temporizadorActivo, segundos]);

  const handleMarcarSalida = () => {
    setTemporizadorActivo(false); // Detiene el temporizador sin reiniciar
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/tempo.png')} style={styles.imagenTemporizador} />
      <Text style={styles.temporizadorText}>
        {Math.floor(segundos / 60)}:{segundos % 60 < 10 ? '0' + (segundos % 60) : segundos % 60}
      </Text>
      <Animated.View style={[styles.progressContainer, { transform: [{ rotate: '90deg' }] }]}>
        <Animated.View
          style={[
            styles.progressBar,
            {
              height: 200,
              width: 200,
              borderRadius: 100,
              backgroundColor: '#3498db',
              transform: [{ translateY: progress.interpolate({ inputRange: [0, 1], outputRange: [200, 0] }) }],
            },
          ]}
        />
      </Animated.View>
      <Button
  title="Marcar Salida"
  onPress={handleMarcarSalida}
  disabled={!temporizadorActivo || segundos === 0}
  color="#656CEE" // Cambia el color del texto del botón
  style={{ width: 300, marginBottom: 20, borderRadius: 50  }} // Ajusta la longitud y el margen inferior del botón
/>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagenTemporizador: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  temporizadorText: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  progressContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 200,
  },
  progressBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
});

export default TemporizadorScreen;
