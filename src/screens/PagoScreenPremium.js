import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Card, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Platform } from 'react-native';


const PagoScreen = ({ route }) => {
  const { precio } = route.params;

  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <Text style={styles.welcomeText}>Método de pago</Text>
          </View>
          <Text style={[styles.paymentText, { marginLeft: 20 }]}>Pago con tarjeta</Text>
          <View style={styles.totalContainer}>
            <Text style={[styles.totalLabel, { color: 'green', marginLeft: 20 }]}>Total a pagar:</Text>
            <Card style={[styles.totalButton, { backgroundColor: '#FFBA82' }]}>
              <Text style={[styles.totalText, { color: 'white' }]}>{precio}</Text>
            </Card>
          </View>
          <View style={styles.imageContainer}>
            <Image source={require('../../assets/credit.png')} style={styles.image} />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              mode="outlined"
              label="Número de tarjeta"
              style={styles.input}
            />
            <TextInput
              mode="outlined"
              label="Nombre completo"
              style={styles.input}
            />
            <View style={styles.row}>
              <TextInput
                mode="outlined"
                label="MM/YY"
                style={[styles.input, { flex: 1 }]}
              />
              <TextInput
                mode="outlined"
                label="CVV"
                style={[styles.input, { flex: 1 }]}
              />
            </View>
          </View>
          <View style={styles.bottomContainer}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ExitosoPremium')}>
              <Text style={styles.buttonText}>Pagar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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
    paddingVertical: 20,
  },
  welcomeText: {
    color: 'white',
    fontSize: 24,
  },
  paymentText: {
    marginVertical: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  totalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  totalLabel: {
    fontSize: 16,
    color: 'green',
    marginRight: 10,
  },
  totalButton: {
    borderRadius: 5,
    padding: 15,
  },
  totalText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: 370,
    height: 200,
  },
  inputContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    borderRadius: 5,
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PagoScreen;
