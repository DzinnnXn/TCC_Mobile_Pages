import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Ionicons name="home-outline" size={30} color="#8B0000" />
      <FontAwesome6 name="door-open" size={29} color="#8B0000" />
      <Ionicons name="search-outline" size={30} color="#8B0000" />
      <Ionicons name="qr-code-outline" size={30} color="#8B0000" />
    </View>
  );
}

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
