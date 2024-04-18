import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const TemporizadorScreen = () => {
  const [segundos, setSegundos] = useState(0);
  const [temporizadorActivo, setTemporizadorActivo] = useState(true);

  useEffect(() => {
    let temporizador = null;
    if (temporizadorActivo) {
      temporizador = setInterval(() => {
        setSegundos((prevSegundos) => prevSegundos + 1);
      }, 1000);
    } else if (!temporizadorActivo && segundos !== 0) {
      clearInterval(temporizador);
    }
    return () => clearInterval(temporizador);
  }, []);

  const handleIniciarTemporizador = () => {
    setTemporizadorActivo(true);
  };

  const handleMarcarSalida = () => {
    setTemporizadorActivo(false);
    setSegundos(0);
  };

  const minutos = Math.floor(segundos / 60);
  const segundosRestantes = segundos % 60;

  return (
    <View style={styles.container}>
      <Text style={styles.temporizadorText}>
        {minutos < 10 ? '0' + minutos : minutos}:{segundosRestantes < 10 ? '0' + segundosRestantes : segundosRestantes}
      </Text>
      <Button title="Marcar Salida" onPress={handleMarcarSalida} disabled={!temporizadorActivo || segundos === 0} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  temporizadorText: {
    fontSize: 48,
    fontWeight: 'bold',
  },
});

export default TemporizadorScreen;
