import React from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet, Image, SafeAreaView, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface InventarioScreenProps {
  onNavigate: (screen: string) => void; // Adicionando a função de navegação como uma prop
}

const InventarioScreen: React.FC<InventarioScreenProps> = ({ onNavigate }) => {
  const salas = [
    { id: 1, nome: 'C13', professor: 'Professor Carlos' },
    { id: 2, nome: 'C14', professor: 'Professor Thiago' },
    { id: 3, nome: 'C16', professor: 'Informatica' },
    { id: 4, nome: 'C13', professor: 'Professor Carlos' },
    { id: 5, nome: 'C13', professor: 'Professor Carlos' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Adiciona a barra de status com cor personalizada */}
      <StatusBar backgroundColor="#1c1c1c" barStyle="light-content" />
      
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton} onPress={() => onNavigate('ServiceHome')}>
          <Ionicons name="arrow-back" size={25} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={() => onNavigate('Menu')}>
          <Ionicons name="menu" size={25} color="white" />
        </TouchableOpacity>
      </View>

      {/* Logo e Título */}
      <View style={styles.logoContainer}>
        <Image source={require('@/assets/images/Logo.png')} />
        <Text style={styles.subtitle}>Salas</Text>
      </View>

      {/* Barra de pesquisa */}
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Buscar..." />
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="filter" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add-circle" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.editButton}>
          <Ionicons name="create" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Lista de salas com ScrollView */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {salas.map((sala) => (
          <View key={sala.id} style={styles.card}>
            <View style={styles.cardImagePlaceholder} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{sala.nome}</Text>
              <Text style={styles.cardSubtitle}>{sala.professor}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', // cor de fundo ajustada
    marginRight: 20,
    marginLeft: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#000',
    marginTop: 10,
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
  },
  iconButton: {
    backgroundColor: '#8B0000',
    borderRadius: 25,
    padding: 15,
  },
  title: {
    fontSize: 22,
    color: 'white',
    marginVertical: 15,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#9E9E9E',
  },
  filterButton: {
    marginLeft: 10,
    backgroundColor: '#B01818',
    borderRadius: 50,
    padding: 10,
  },
  addButton: {
    marginLeft: 10,
    backgroundColor: '#B01818',
    borderRadius: 50,
    padding: 10,
  },
  editButton: {
    marginLeft: 10,
    backgroundColor: '#B01818',
    borderRadius: 50,
    padding: 10,
  },
  scrollContent: {
    paddingBottom: 100, // Adiciona espaço para evitar sobreposição com o footer
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    overflow: 'hidden', // Garante que o conteúdo respeite o borderRadius
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8, // Necessário para o Android
  },
  cardImagePlaceholder: {
    width: 100,
    height: 100,
    backgroundColor: '#9e9e9e', // Cor de fundo para representar o espaço da imagem
    borderRadius: 10,
  },
  cardContent: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 18,
    color: '#000',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#000',
  },
});

export default InventarioScreen;
