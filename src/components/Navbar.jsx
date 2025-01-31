import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.title}>Event Manager</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: { height: 60, backgroundColor: '#6200EE', justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, color: '#fff', fontWeight: 'bold' },
});

export default Navbar;
