import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function Home() {
  return (
    <View style={styles.container}>

      <Image source={require('@/assets/images/Vector 1.png')} style={styles.vector1} />

      <Image source={require('@/assets/images/Vector 2.png')} style={styles.vector2} />

      <View style={styles.background}>
        <View style={styles.content}>
          <Text style={styles.subtitle}>Patrimônios em ordem</Text> 
          <Image source={require('@/assets/images/Logo.png')} style={styles.logo} />
          <Text style={styles.title}>Bem vindo!</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative', 
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  subtitle: {
    fontSize: 20,
    color: '#000',
    marginBottom: 10,
  },
  logo: {
    width: 160,
    height: 55,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#A90E13',
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  vector1: {
    position: 'absolute',
    left: -37,
    bottom: 0,
    width: width * 0.4, 
    height: height * 0.7, 
    resizeMode: 'contain',
    zIndex: 1, 
  },
  vector2: {
    position: 'absolute',
    right: -37,
    top: 0,
    width: width * 0.4, 
    height: height * 0.7, 
    resizeMode: 'contain',
    zIndex: 1,
  },
});
