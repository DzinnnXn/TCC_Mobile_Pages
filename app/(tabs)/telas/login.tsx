import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Modal, Alert } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

interface LoginScreenProps {
  onNavigate: (screen: string) => void; // Adiciona a prop onNavigate
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onNavigate }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [usuario, setUsuario] = useState(''); // Alterado de email para usuario
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // Para mostrar carregamento se necessário

  const handleLogin = async () => {
    setLoading(true); // Começa o estado de carregamento
    try {
      const response = await fetch('http://192.168.0.215:8000/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: usuario, // Usar o nome de usuário capturado
          password: password,
        }),
      });

      const data = await response.json();
      setLoading(false); // Finaliza o estado de carregamento

      if (response.ok) {
        Alert.alert('Sucesso', 'Login bem-sucedido!');
        setModalVisible(false); // Fecha a modal
        onNavigate('ServiceHome'); // Redireciona para a tela ServiceHome após login
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
      {/* Header com ícones */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton}>
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

      {/* Botão de Entrar */}
      <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      {/* Modal de Login */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Login</Text>

            {/* Campos de Usuario e Senha na Modal */}
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

            {/* Botão de Confirmar Login */}
            <TouchableOpacity style={styles.modalButton} onPress={handleLogin} disabled={loading}>
              <Text style={styles.modalButtonText}>{loading ? 'Entrando...' : 'Confirmar'}</Text>
            </TouchableOpacity>

            {/* Botão para Fechar a Modal */}
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
