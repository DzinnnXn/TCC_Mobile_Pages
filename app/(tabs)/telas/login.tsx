import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

interface LoginScreenProps {
  onNavigate: (screen: string) => void; 
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onNavigate }) => {
  return (
    <View style={styles.container}>
      {/* Header com ícones */}
      <View style={styles.header}>
        {/* Botão de "Voltar" para ir à tela anterior (Home) */}
        <TouchableOpacity style={styles.iconButton} onPress={() => onNavigate('Home')}>
          <Ionicons name="arrow-back" size={25} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="menu" size={25} color="white" />
        </TouchableOpacity>
      </View>

      {/* Logo e Título */}
      <View style={styles.logoContainer}>
        <Image source={require('@/assets/images/Logo.png')} />
        <Text style={styles.subtitle}>Patrimônios em ordem</Text>
      </View>

      {/* Campos de Email e Senha*/}
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <MaterialIcons name="email" size={20} color="#B01818" style={styles.icon} />
          <TextInput placeholder="Insira seu email" style={styles.input} />
        </View>
        <View style={styles.inputWrapper}>
          <MaterialIcons name="lock" size={20} color="#B01818" style={styles.icon} />
          <TextInput placeholder="Insira sua senha" secureTextEntry style={styles.input} />
          <TouchableOpacity>
            <Ionicons name="eye-off" size={20} color="#B01818" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Botão de Entrar */}
      <TouchableOpacity style={styles.button} onPress={() => onNavigate('ServiceHome')}>
        <Text style={styles.buttonText} >Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  iconButton: {
    backgroundColor: '#8B0000',
    borderRadius: 20,
    padding: 15,
  },
  logoContainer: {
    alignItems: 'center',
    marginVertical: 40,
    padding: 30,
  },
  subtitle: {
    fontSize: 18,
    color: 'black',
    padding: 16,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    padding: 5,
  },
  icon: {
    marginRight: 10,
    padding: 5,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
  },
  button: {
    backgroundColor: '#8B0000',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
