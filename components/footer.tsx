import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

// Define a interface para as props do Footer
interface FooterProps {
  onNavigate: (screen: string) => void;
}

// Componente Footer utilizando React.FC e a interface FooterProps
const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <View style={styles.footer}>
      {/* Quando o usuário clicar no ícone "home", navega para Inventario */}
      <TouchableOpacity onPress={() => onNavigate('ServiceHome')}>
        <Ionicons name="home-outline" size={30} color="#8B0000" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onNavigate('Inventario')}>
        <FontAwesome6 name="door-open" size={29} color="#8B0000" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onNavigate('Patrimonio')}>
        <Ionicons name="search-outline" size={30} color="#8B0000" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onNavigate('Leitor')}>
        <Ionicons name="qr-code-outline" size={30} color="#8B0000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 2,
    borderTopColor: '#8B0000',
  },
});

export default Footer;
