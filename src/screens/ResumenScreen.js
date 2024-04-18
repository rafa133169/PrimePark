import React from "react";
import { View, StyleSheet, Text, _View, TouchableOpacity } from "react-native";
import { IconButton, TextInput, useTheme, Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const ResumenScreen = ({ route }) => {
  const { zona, precio, spot } = route.params;

  const { colors } = useTheme();
  const fechaActual = new Date().toLocaleDateString();
  const horaActual = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const navigation = useNavigation();

  return (
    <View>
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.title}>Resumen de Reservación</Text>
          <View style={styles.row}>
            <IconButton
              icon="calendar"
              onPress={() => console.log("Pressed")}
              color={colors.text}
              size={20}
            />
            <TextInput
              label="Fecha"
              value={fechaActual}
              editable={false}
              style={[styles.textInput, { color: colors.text }]}
              theme={{ colors: { primary: colors.primary } }}
            />
            <IconButton
              icon="clock"
              onPress={() => console.log("Pressed")}
              color={colors.text}
              size={20}
            />
            <TextInput
              label="Hora"
              value={horaActual}
              editable={false}
              style={[styles.textInput, { color: colors.text }]}
              theme={{ colors: { primary: colors.primary } }}
            />
          </View>
          <View style={styles.areaContainer}>
            <Text style={[styles.text, { color: colors.text }]}>
              Área seleccionada:{" "}
            </Text>
            <Text style={[styles.areaText, { color: colors.text }]}>
            {zona}
            </Text>
          </View>
          <View style={styles.areaContainer}>
            <Text style={[styles.text, { color: colors.text }]}>Espacio seleccionado: </Text>
            <Text style={[styles.areaText, { color: colors.text }]}>
            {spot ? `A0${spot.row * 3 + spot.col + 1}` : 'Ninguno'}
            </Text>
          </View>
          <View style={styles.totalContainer}>
            <Text style={[styles.totalLabel, { color: "green" }]}>
              Total a pagar:
            </Text>
            <Card style={[styles.totalButton, { backgroundColor: "#FFBA82" }]}>
            <Text style={[styles.totalText, { color: "white" }]}>{precio}</Text>
            </Card>
          </View>
        </Card.Content>
      </Card>
      <View style={styles.bottomContainer}>
        <Text style={styles.buttonText}>Elige metodo de pago</Text>
      </View>
      <Card style={styles.card}>
        <Card.Content>
          {/* Botones de opciones de pago */}
          <TouchableOpacity
            style={styles.paymentButton}
            onPress={() => navigation.navigate("Pago")}
          >
            <Text style={styles.paymentButtonText}>Tarjeta</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.paymentButton}
            onPress={() => console.log("Pago con Mercado Pago")}
          >
            <Text style={styles.paymentButtonText}>Mercado Pago</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.paymentButton}
            onPress={() => console.log("Otro método de pago")}
          >
            <Text style={styles.paymentButtonText}>Otro Método de Pago</Text>
          </TouchableOpacity>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 20,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  textInput: {
    flex: 1,
    marginLeft: 10,
    backgroundColor: "transparent",
  },
  text: {
    fontSize: 16,
    marginLeft: 5,
  },
  areaText: {
    fontStyle: "italic",
    paddingBottom: 20,
  },
  totalContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  totalLabel: {
    fontSize: 16,
    color: "green",
    marginRight: 10,
  },
  totalButton: {
    borderRadius: 5,
    padding: 5,
  },
  totalText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  areaText: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 5,
  },
  areaContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  button: {
    marginTop: 10,
    backgroundColor: "#B3B3B3",
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: "center",
    width: "80%",
    alignSelf: "center",
  },
  buttonText: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 10,
    marginTop: 10,
  },
  card: {
    margin: 20,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  paymentTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  paymentButton: {
    marginTop: 20,
    backgroundColor: "#656CEE",
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: "center",
  },
  paymentButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ResumenScreen;
