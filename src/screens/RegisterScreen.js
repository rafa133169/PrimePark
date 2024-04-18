import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import CheckBox from "@react-native-community/checkbox";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [agreeTerms, setAgreeTerms] = React.useState(false);

  const navigation = useNavigation();

  const handleRegister = () => {
    // Aquí puedes agregar la lógica para registrar al usuario
    console.log("Nombres:", firstName);
    console.log("Apellidos:", lastName);
    console.log("Correo:", email);
    console.log("Contraseña:", password);
    console.log("Confirmar Contraseña:", confirmPassword);
    console.log("Aceptar Términos y Condiciones:", agreeTerms);
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Nombres</Text>
        <TextInput
          placeholder="Diego"
          value={firstName}
          onChangeText={setFirstName}
          style={styles.input}
        />
        <Text style={styles.label}>Apellidos</Text>
        <TextInput
          placeholder="Aleman Mena"
          value={lastName}
          onChangeText={setLastName}
          style={styles.input}
        />
        <Text style={styles.label}>Correo</Text>
        <TextInput
          placeholder="diego@gmail.com"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          placeholder="********"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
        <Text style={styles.label}>Confirmar contraseña</Text>
        <TextInput
          placeholder="********"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          style={styles.input}
        />
        {/* <View style={styles.checkboxContainer}>
          <CheckBox
            value={agreeTerms}
            onValueChange={setAgreeTerms}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Aceptar Términos y Condiciones</Text>
        </View> */}
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Registrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.link}>Ya tienes una cuenta? Inicia sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  formContainer: {
    width: "80%",
  },
  input: {
    marginVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC",
    paddingVertical: 2,
    backgroundColor: "white",
    marginBottom: 30,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    color: "#9695A8",
    fontFamily: "sans-serif",
    fontSize: 12,
  },
  button: {
    marginTop: 10,
    backgroundColor: "#656CEE",
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  link: {
    marginTop: 20,
    color: "blue",
    textDecorationLine: "none",
    textAlign: "center",
  },
});

export default RegisterScreen;
