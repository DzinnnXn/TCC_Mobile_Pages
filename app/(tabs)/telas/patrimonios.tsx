import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import Footer from '@/components/footer';

// Definindo a interface para o tipo dos itens da lista
interface Room {
  id: string;
  name: string;
}

const rooms: Room[] = [
  { id: '1', name: 'Computador'},
  { id: '2', name: 'Computador'},
  { id: '3', name: 'Computador'},
  { id: '4', name: 'Computador'},
  { id: '5', name: 'Computador'},
  { id: '6', name: 'Computador'},
];

interface PatrimonioScreenProps {
  onNavigate: (screen: string) => void;
}

const PatrimonioScreen: React.FC<PatrimonioScreenProps> = ({ onNavigate }) => {
  const renderItem = ({ item }: { item: Room }) => (
    <View style={styles.card}>
      <Image source={require('@/assets/images/Computador.png')} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.patrimonioName}>{item.name}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header com ícones */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton} onPress={() => onNavigate('ServiceHome')}>
          <Ionicons name="arrow-back" size={25} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={() => onNavigate('Menu')}>
          <Ionicons name="menu" size={25} color="white" />
        </TouchableOpacity>
      </View>

      <Image source={require('@/assets/images/Logo.png')} style={styles.logo} />
      <Text style={styles.subtitle}>Patrimônios</Text>

      {/* Search and Action Buttons */}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Pesquisar..."
          style={styles.searchInput}
        />
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.actionButton}>
            <MaterialIcons name="filter-list" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <MaterialIcons name="add" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <MaterialIcons name="edit" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Room List */}
      <View style={styles.listContainer}>
        <FlatList
          data={rooms}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.list}
        />
      </View>

      <Footer onNavigate={onNavigate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  iconButton: {
    backgroundColor: '#8B0000',
    borderRadius: 20,
    padding: 15,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 40,
    marginRight: 10,
  },
  actionButtons: {
    flexDirection: 'row',
  },
  actionButton: {
    backgroundColor: '#B30000',
    padding: 10,
    borderRadius: 50,
    marginLeft: 10,
  },
  listContainer: {
    flex: 1,
    marginTop: 10,
  },
  list: {
    paddingBottom: 80, 
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginVertical: 8,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  patrimonioName: {
    fontSize: 16,
    marginLeft: 20,
  },
  logo: {
    width: 170,
    height: 70,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 16,
    color: '#000000',
    fontWeight: 'bold',
  },
});

export default PatrimonioScreen;
