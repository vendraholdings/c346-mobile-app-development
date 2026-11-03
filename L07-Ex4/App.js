import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.Parent}>
      <View style={[styles.Child, { backgroundColor: 'skyblue' }]}><Text>Square 1</Text></View>
      <View style={[styles.Child, { backgroundColor: 'mediumaquamarine' }]}><Text>Square 2</Text></View>
      <View style={[styles.Child, { backgroundColor: 'crimson' }]}><Text>Square 3</Text></View>
    </View>
  );
}

const styles = StyleSheet.create({
  Parent: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  Child: { width: 80, height: 80, justifyContent: 'center', alignItems: 'center' },
});
