import React from 'react';
import { StyleSheet, Text, View, SectionList, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// Step 2: SectionList data (filled up to letter 's')
const datasource = [
  {
    data: [
      { key: 'a' },
      { key: 'e' },
      { key: 'i' },
      { key: 'o' },
    ],
    title: 'Vowels',
  },
  {
    data: [
      { key: 'b' }, { key: 'c' }, { key: 'd' }, { key: 'f' }, { key: 'g' },
      { key: 'h' }, { key: 'j' }, { key: 'k' }, { key: 'l' }, { key: 'm' },
      { key: 'n' }, { key: 'p' }, { key: 'q' }, { key: 'r' }, { key: 's' },
    ],
    title: 'Consonants',
  },
];

// Step 5: a different header colour for each section
const headerColours = {
  Vowels: '#FFB3BA',
  Consonants: '#BAE1FF',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  list: {
    // white space around the list
    marginHorizontal: 20,
    marginBottom: 20,
  },
  opacityStyle: {
    borderWidth: 1,
  },
  textStyle: {
    fontSize: 15,
    margin: 10,
    textAlign: 'left',
  },
  // Step 3: new style object
  headerText: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  header: {
    borderWidth: 1,
    marginTop: 10,
  },
});

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
      {/* Step 4: SectionList replaces the FlatList */}
      <SectionList
        style={styles.list}
        sections={datasource}
        renderItem={renderItem}
        renderSectionHeader={({ section: { title } }) => (
          <View style={[styles.header, { backgroundColor: headerColours[title] }]}>
            <Text style={styles.headerText}>{title}</Text>
          </View>
        )}
      />
    </View>
  );
}
