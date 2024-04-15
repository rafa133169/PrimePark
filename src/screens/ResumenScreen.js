import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput, IconButton } from 'react-native-paper';

const ResumenScreen = () => {
  const fechaActual = new Date().toLocaleDateString('es-MX', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  });
  const horaActual = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resumen de Reservación</Text>
      <View style={styles.row}>
        <IconButton
          icon="calendar"
          onPress={() => console.log('Pressed')}
          color={'#333'}
          size={20}
        />
        <TextInput
          label="Fecha"
          value={fechaActual}
          style={styles.textInput}
          editable={false}
        />
        <IconButton
          icon="clock"
          onPress={() => console.log('Pressed')}
          color={'#333'}
          size={20}
        />
        <TextInput
          label="Hora"
          value={horaActual}
          style={styles.textInput}
          editable={false}
        />
      </View>
      <Text style={styles.text}>Área seleccionada: VIP</Text>
      <Text style={styles.text}>Total a pagar: 150</Text>
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  textInput: {
    flex: 1,
    marginLeft: 10,
    backgroundColor: 'transparent',
  },
  text: {
    fontSize: 16,
    marginLeft: 5,
  },
});

export default ResumenScreen;
