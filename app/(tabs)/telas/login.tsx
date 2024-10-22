import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Modal, Alert } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '@/components/CustomButton';
import IconButton from '@/components/IconButton';

interface LoginScreenProps {
  onNavigate: (screen: string) => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onNavigate }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // Função para salvar o token no AsyncStorage
  const saveToken = async (token: string) => {
    try {
      await AsyncStorage.setItem('authToken', token);
    } catch (error) {
      console.error('Erro ao salvar o token:', error);
    }
  };

  // Função para salvar o tipo de usuário
  const saveUserType = async (tipoUsuario: string) => {
    try {
      await AsyncStorage.setItem('userType', tipoUsuario);
    } catch (error) {
      console.error('Erro ao salvar o tipo de usuário:', error);
    }
  };

  // Função para realizar o login
  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://192.168.0.215:8000/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: usuario.trim(),
          password: password.trim(),
        }),
      });
  
      const data = await response.json();
      console.log('Resposta da API:', data); // Log da resposta para depuração
      setLoading(false);
  
      if (response.ok) {
        if (data.user && data.user_type) {
          // Salvando o user_type no AsyncStorage
          await saveUserType(data.user_type);
          Alert.alert('Sucesso', `Login bem-sucedido!`);
          setModalVisible(false);
          // Redireciona para a tela ServiceHome
          onNavigate('ServiceHome');
        } else {
          Alert.alert('Erro', 'Dados de usuário não encontrados.');
        }
      } else {
        Alert.alert('Erro', data.message || 'Erro ao fazer login, tente novamente.');
      }
    } catch (error) {
      setLoading(false);
      Alert.alert('Erro', 'Não foi possível conectar ao servidor, tente mais tarde.');
      console.error('Erro ao realizar login:', error);
    }
    
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <IconButton iconName="arrow-back" onPress={() => onNavigate('Home')} />
        <IconButton iconName="menu" onPress={() => {/***/}} />
      </View>

      <View style={styles.logoContainer}>
        <Image source={require('@/assets/images/Logo.png')} />
        <Text style={styles.subtitle}>Patrimônios em ordem</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
        <CustomButton
          title="Entrar"
          onPress={() => setModalVisible(true)}
          loading={false}
        />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Login</Text>

            <View style={styles.inputContainer}>
              <View style={styles.inputWrapper}>
                <MaterialIcons name="person" size={20} color="#B01818" style={styles.icon} />
                <TextInput
                  placeholder="Insira o usuário"
                  style={styles.input}
                  value={usuario}
                  onChangeText={setUsuario}
                />
              </View>
              <View style={styles.inputWrapper}>
                <MaterialIcons name="lock" size={20} color="#B01818" style={styles.icon} />
                <TextInput
                  placeholder="Insira sua senha"
                  secureTextEntry
                  style={styles.input}
                  value={password}
                  onChangeText={setPassword}
                />
              </View>
            </View>

            <TouchableOpacity style={styles.modalButton} onPress={handleLogin} disabled={loading}>
              <Text style={styles.modalButtonText}>{loading ? 'Entrando...' : 'Confirmar'}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.modalCloseButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.modalCloseButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  button: {
    backgroundColor: '#8B0000',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
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
  },
  input: {
    flex: 1,
    paddingVertical: 10,
  },
  modalButton: {
    backgroundColor: '#8B0000',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  modalCloseButton: {
    marginTop: 10,
    alignItems: 'center',
  },
  modalCloseButtonText: {
    color: '#B01818',
  },
});

export default LoginScreen;
