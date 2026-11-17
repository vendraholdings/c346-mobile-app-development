import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// Step 2: data for the FlatList (filled up to 'z')
const datasource = [
  { key: 'a' }, { key: 'b' }, { key: 'c' }, { key: 'd' }, { key: 'e' },
  { key: 'f' }, { key: 'g' }, { key: 'h' }, { key: 'i' }, { key: 'j' },
  { key: 'k' }, { key: 'l' }, { key: 'm' }, { key: 'n' }, { key: 'o' },
  { key: 'p' }, { key: 'q' }, { key: 'r' }, { key: 's' }, { key: 't' },
  { key: 'u' }, { key: 'v' }, { key: 'w' }, { key: 'x' }, { key: 'y' },
  { key: 'z' },
];

// Step 3: StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  opacityStyle: {
    borderWidth: 1,
  },
  textStyle: {
    fontSize: 15,
    margin: 10,
    textAlign: 'left',
  },
});

// Step 4: renderItem
const renderItem = ({ item }) => {
  return (
    <TouchableOpacity style={styles.opacityStyle}>
      <Text style={styles.textStyle}>{item.key}</Text>
    </TouchableOpacity>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* Step 5 */}
      <FlatList data={datasource} renderItem={renderItem} />
    </View>
  );
}
