import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Home from './telas/home';
import ServiceHomeScreen from './telas/ServiceHome'; 
import LoginScreen from './telas/login';
import InventarioScreen from './telas/inventario'; 
import Menu from './telas/menu';
import ScannerScreen from './telas/LeitorScreen';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState('Home');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Home':
        return <Home onNavigate={setCurrentScreen} />;
      case 'ServiceHome':
        return <ServiceHomeScreen onNavigate={setCurrentScreen} />; 
      case 'Login':
        return <LoginScreen onNavigate={setCurrentScreen} />;
      case 'Inventario':
        return <InventarioScreen onNavigate={setCurrentScreen} />; 
      case 'Menu':
        return <Menu onNavigate={setCurrentScreen}/>;
      case 'Leitor':
        return <ScannerScreen onNavigate={setCurrentScreen}/>;
      default:
        return <Home onNavigate={setCurrentScreen} />;
    }
  };

  return (
    <View style={styles.container}>
      {renderScreen()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
});

export default App;
