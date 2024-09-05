import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function Footer_Dark() {
  return (
    <View style={styles.footer_dark}>
      <Ionicons name="home-outline" size={30} color="#fff" />
      <FontAwesome6 name="door-open" size={28} color="#fff" />
      <Ionicons name="search-outline" size={30} color="#fff" />
      <Ionicons name="qr-code-outline" size={30} color="#fff" />
    </View>
  );
}

const styles = StyleSheet.create({
  footer_dark: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#B01818',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 2,
    borderTopColor: '#8B0000',
  },
});
