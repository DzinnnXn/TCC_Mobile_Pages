import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

interface ConfigProps {
  onNavigate: (screen: string) => void;
}

const Menu: React.FC<ConfigProps> = ({ onNavigate }) => {
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const response = await fetch('http://192.168.0.215:8000/api/user/');
        if (!response.ok) throw new Error('Erro ao buscar o nome do usuário');
        const data = await response.json();
        setUserName(data.name);
      } catch (error) {
        console.error('Erro ao buscar o nome do usuário:', error);
        setUserName('Usuário Desconhecido');
      }
    };

    fetchUserName();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('@/assets/images/image 46.png')} style={styles.user_icon} />
        <Text style={styles.user_name}>{userName || 'Carregando...'}</Text>
        <TouchableOpacity onPress={() => onNavigate('ServiceHome')}>
          <AntDesign name="closecircle" size={48} color="#B01818" style={styles.close_icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  user_icon: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  user_name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  close_icon: {
    marginLeft: 'auto',
  },
});

export default Menu;
