import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Config() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSwitch = () => setIsDarkMode(previousState => !previousState);

  return (
    <View style={styles.container}>
      {/* Header com Avatar, Nome e Botão Fechar */}
      <View style={styles.header}>
        <Image source={require('@/assets/images/image 46.png')} style={styles.user_icon} />
        <View>
          <Text style={styles.user_name}>Guilherme Augusto</Text>
          <Text style={styles.user_id}>548554</Text>
        </View>
        <AntDesign name="closecircle" size={48} color="#B01818" style={styles.close_icon} />
      </View>

      {/* Opção Modo Claro */}
      <View style={styles.menu_item_color}>
        <View style={styles.menu_label}>
          <MaterialIcons name="wb-sunny" size={24} color="black" />
          <Text style={styles.menu_text}>Modo Claro</Text>
        </View>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={toggleSwitch}
          value={isDarkMode}
        />
      </View>

      {/* Opções do Menu */}
      <TouchableOpacity style={styles.menu_item}>
        <View style={styles.menu_label}>
          <FontAwesome5 name="user" size={22} color="black" />
          <Text style={styles.menu_text}>Perfil</Text>
        </View>
        <AntDesign name="right" size={24} color="black" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.menu_item}>
        <View style={styles.menu_label}>
          <AntDesign name="adduser" size={24} color="black" />
          <Text style={styles.menu_text}>Cadastrar</Text>
        </View>
        <AntDesign name="right" size={24} color="black" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.menu_item}>
        <View style={styles.menu_label}>
          <AntDesign name="question" size={24} color="black" />
          <Text style={styles.menu_text}>Ajuda</Text>
        </View>
        <AntDesign name="right" size={24} color="black" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.menu_item}>
        <View style={styles.menu_label}>
          <AntDesign name="setting" size={24} color="black" />
          <Text style={styles.menu_text}>Configurações</Text>
        </View>
        <AntDesign name="right" size={24} color="black" />
      </TouchableOpacity>

      {/* Botão de Sair */}
      <TouchableOpacity style={styles.logout_button}>
        <Ionicons name="exit-outline" size={24} color="white" />
        <Text style={styles.logout_text}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

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
