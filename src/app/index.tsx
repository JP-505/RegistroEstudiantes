import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet
} from 'react-native';

export default function App() {

  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');

  const registrar = () => {

    if (nombre.trim() === '' || correo.trim() === '') {
      setMensaje('Por favor, completa todos los campos.');
      return;
    }

    if (!correo.includes('@')) {
      setMensaje('Ingresa un correo electrónico válido.');
      return;
    }

    setMensaje(`¡Bienvenido ${nombre}! Registro exitoso.`);
  };

  const limpiar = () => {
    setNombre('');
    setCorreo('');
    setMensaje('Limpiado correctamente');
  };

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Registro de estudiantes
      </Text>

      <Text style={styles.descripcion}>
        Completa los siguientes datos:
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre completo"
        value={nombre}
        onChangeText={setNombre}
      />

      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={correo}
        onChangeText={setCorreo}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Pressable
        style={styles.boton}
        onPress={registrar}
      >
        <Text style={styles.textoBoton}>
          Registrar estudiante
        </Text>
      </Pressable>

      <Pressable
        style={styles.botonLimpiar}
        onPress={limpiar}
      >
        <Text style={styles.textoBoton}>
          Limpiar formulario
        </Text>
      </Pressable>

      <Text style={styles.mensaje}>
        {mensaje}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F1F5F9',
    justifyContent: 'center',
    padding: 25
  },

  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#123456'
  },

  descripcion: {
    textAlign: 'center',
    marginBottom: 25,
    color: '#555'
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15
  },

  boton: {
    backgroundColor: '#2563EB',
    padding: 15,
    borderRadius: 10,
    marginTop: 5
  },

  botonLimpiar: {
    backgroundColor: '#64748B',
    padding: 15,
    borderRadius: 10,
    marginTop: 10
  },

  textoBoton: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold'
  },

  mensaje: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#123456',
    fontWeight: 'bold'
  }

});