import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Switch, TouchableOpacity, Alert } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ConfigProps {
  onNavigate: (screen: string) => void; 
  token: string; 
}

const Menu: React.FC<ConfigProps> = ({ onNavigate, token }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [userName, setUserName] = useState<string | null>('Carregando...');
  const [userId, setUserId] = useState<string | null>('Carregando...');

  const toggleSwitch = () => setIsDarkMode(previousState => !previousState);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('authToken'); 
      await AsyncStorage.removeItem('username'); 
      onNavigate('Home'); 
      Alert.alert('Logout', 'Você foi desconectado com sucesso!');
    } catch (error) {
      console.error('Erro ao realizar logout:', error);
      Alert.alert('Erro', 'Não foi possível realizar logout.');
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://192.168.0.215:8000/api/get-user-info/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, 
          },
        });

        if (!response.ok) {
          throw new Error('Erro ao buscar o nome do usuário');
        }

        const data = await response.json();
        setUserName(data.username || 'Usuário Desconhecido');
        setUserId(data.id ? data.id.toString() : null);

      } catch (error) {
        console.error('Erro ao buscar o nome do usuário:', error);
        setUserName('Usuário Desconhecido');
        setUserId(null);
      }
    };

    fetchUserData();
  }, [token]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('@/assets/images/image 46.png')} style={styles.user_icon} />
        <View>
          <Text style={styles.user_name}>{userName}</Text>
          <Text style={styles.user_id}>{userId ? `ID: ${userId}` : 'ID Desconhecido'}</Text>
        </View>
        <TouchableOpacity onPress={() => onNavigate('ServiceHome')}>
          <AntDesign name="closecircle" size={48} color="#B01818" style={styles.close_icon} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.logout_button} onPress={handleLogout}>
        <Ionicons name="exit-outline" size={24} color="white" />
        <Text style={styles.logout_text}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 25,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  user_icon: {
    height: 53,
    width: 53,
    borderRadius: 26.5,
    marginLeft: 26,
  },
  user_name: {
    marginLeft: 10,
    fontSize: 17,
    fontWeight: 'bold',
  },
  user_id: {
    marginLeft: 10,
    fontSize: 14,
    color: '#555',
  },
  close_icon: {
    marginRight: 26,
  },
  menu_item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    paddingVertical: 25,
    paddingHorizontal: 40, 
  },
  menu_item_color: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    paddingVertical: 10,
    paddingHorizontal: 40, 
  },
  menu_label: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menu_text: {
    fontSize: 18,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  logout_button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#B01818',
    borderRadius: 5,
  },
  logout_text: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
  },
});

export default Menu;
