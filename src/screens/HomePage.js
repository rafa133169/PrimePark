import { StyleSheet, Text, View } from 'react-native';

export default function HomePage(){
    return (
        <View>
            <TextInput defaultValue="Correo electrónico">INGRESA TU CORREO</TextInput>
            <TextInput defaultValue="Contraseña">CONTRASEÑA</TextInput>
        </View>
    )
}