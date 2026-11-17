import React from 'react';
import {
  StyleSheet, Text, View, Image, SectionList, TouchableOpacity, Alert,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Card images come from the Pokemon TCG "151" gallery:
// https://tcg.pokemon.com/en-us/galleries/151/
// URL pattern: .../SV3pt5_EN_<cardNumber>-2x.png
const cardUrl = (num) =>
  `https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_${num}-2x.png`;

// Each section = one Element, with its own icon and colour scheme.
const datasource = [
  {
    title: 'Fire',
    icon: 'fire',
    colour: '#F08030',
    light: '#FDE3CF',
    data: [
      { key: 'Charmander', card: 4 },
      { key: 'Vulpix', card: 37 },
      { key: 'Growlithe', card: 58 },
    ],
  },
  {
    title: 'Water',
    icon: 'water',
    colour: '#3D7DCA',
    light: '#D6E6FA',
    data: [
      { key: 'Squirtle', card: 7 },
      { key: 'Psyduck', card: 54 },
      { key: 'Poliwag', card: 60 },
    ],
  },
  {
    title: 'Grass',
    icon: 'leaf',
    colour: '#4E9A3A',
    light: '#DCF0D3',
    data: [
      { key: 'Bulbasaur', card: 1 },
      { key: 'Oddish', card: 43 },
    ],
  },
  {
    title: 'Lightning',
    icon: 'lightning-bolt',
    colour: '#E0B000',
    light: '#FFF4C2',
    data: [
      { key: 'Pikachu', card: 25 },
      { key: 'Voltorb', card: 100 },
    ],
  },
];

const renderItem = ({ item, section }) => (
  <TouchableOpacity
    style={[styles.item, { backgroundColor: section.light, borderColor: section.colour }]}
    onPress={() => Alert.alert(item.key, `${section.title} type, card #${item.card}`)}
  >
    <Text style={styles.itemName}>{item.key}</Text>
    <Image source={{ uri: cardUrl(item.card) }} style={styles.card} resizeMode="contain" />
  </TouchableOpacity>
);

const renderSectionHeader = ({ section }) => (
  <View style={[styles.header, { backgroundColor: section.colour }]}>
    <MaterialCommunityIcons name={section.icon} size={26} color="#fff" />
    <Text style={styles.headerText}>{section.title}</Text>
  </View>
);

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Text style={styles.title}>Pokemon Cards</Text>
      {/* A) Add Pokemon button above the list (used next lesson) */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => Alert.alert('Add Pokemon', 'Coming next lesson!')}
      >
        <MaterialCommunityIcons name="plus-circle" size={20} color="#fff" />
        <Text style={styles.addButtonText}>ADD POKEMON</Text>
      </TouchableOpacity>
      <SectionList
        sections={datasource}
        keyExtractor={(item) => item.key}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        contentContainerStyle={styles.list}
        stickySectionHeadersEnabled={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#F4F4F8',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2A2A2A',
    marginBottom: 10,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E3350D',
    marginHorizontal: 16,
    marginBottom: 10,
    paddingVertical: 12,
    borderRadius: 10,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  list: {
    paddingHorizontal: 16,
    paddingBottom: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    marginTop: 14,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 8,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // name on the left, card on the right
    borderWidth: 1,
    borderTopWidth: 0,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  itemName: {
    flex: 1,
    fontSize: 18,
    fontWeight: '600',
    color: '#222',
    textAlign: 'left',
  },
  card: {
    width: 110,
    height: 154,
  },
});
