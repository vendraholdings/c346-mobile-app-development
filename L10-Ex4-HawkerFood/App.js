import React from 'react';
import {
  StyleSheet, Text, View, Image, SectionList, TouchableOpacity, Alert,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Singapore hawker centre favourites, grouped by course.
const datasource = [
  {
    title: 'Rice & Noodles',
    icon: 'noodles',
    colour: '#C0392B',
    data: [
      { key: 'Hainanese Chicken Rice', price: '$4.50', desc: 'Poached chicken, fragrant rice, chilli', image: require('./img/chickenrice.jpg') },
      { key: 'Laksa', price: '$5.00', desc: 'Spicy coconut curry noodle soup', image: require('./img/laksa.jpg') },
      { key: 'Char Kway Teow', price: '$5.00', desc: 'Wok-fried flat rice noodles', image: require('./img/charkwayteow.jpg') },
      { key: 'Nasi Lemak', price: '$4.00', desc: 'Coconut rice with sambal', image: require('./img/nasilemak.jpg') },
    ],
  },
  {
    title: 'Snacks & Sides',
    icon: 'food-drumstick',
    colour: '#D68910',
    data: [
      { key: 'Roti Prata', price: '$1.50', desc: 'Crispy flatbread with curry', image: require('./img/rotiprata.jpg') },
      { key: 'Satay', price: '$0.80 / stick', desc: 'Grilled skewers with peanut sauce', image: require('./img/satay.jpg') },
      { key: 'Chwee Kueh', price: '$2.50', desc: 'Steamed rice cakes with chai poh', image: require('./img/chweekueh.jpg') },
      { key: 'Kaya Toast', price: '$2.00', desc: 'Toast with coconut jam and butter', image: require('./img/kayatoast.jpg') },
    ],
  },
  {
    title: 'Desserts',
    icon: 'ice-cream',
    colour: '#8E44AD',
    data: [
      { key: 'Ice Kachang', price: '$3.00', desc: 'Shaved ice with syrup and red beans', image: require('./img/aiskacang.jpg') },
      { key: 'Bubur Cha Cha', price: '$2.50', desc: 'Sweet potato and yam in coconut milk', image: require('./img/buburchacha.jpg') },
    ],
  },
];

const renderItem = ({ item, section }) => (
  <TouchableOpacity
    style={styles.item}
    onPress={() => Alert.alert(item.key, `${item.desc}\n${item.price}`)}
  >
    <Image source={item.image} style={styles.image} resizeMode="cover" />
    <View style={styles.info}>
      <Text style={styles.name}>{item.key}</Text>
      <Text style={styles.desc}>{item.desc}</Text>
      <Text style={[styles.price, { color: section.colour }]}>{item.price}</Text>
    </View>
  </TouchableOpacity>
);

const renderSectionHeader = ({ section }) => (
  <View style={[styles.header, { backgroundColor: section.colour }]}>
    <MaterialCommunityIcons name={section.icon} size={22} color="#fff" />
    <Text style={styles.headerText}>{section.title}</Text>
    <Text style={styles.count}>{section.data.length}</Text>
  </View>
);

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.topBar}>
        <Text style={styles.title}>Hawker Favourites</Text>
        <Text style={styles.subtitle}>Singapore hawker centre classics</Text>
      </View>
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
    backgroundColor: '#FBF6EE',
  },
  topBar: {
    backgroundColor: '#1F3A5F',
    paddingTop: 55,
    paddingBottom: 18,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 13,
    color: '#C9D6E8',
    marginTop: 4,
    letterSpacing: 1,
  },
  list: {
    padding: 16,
    paddingBottom: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
    marginTop: 12,
    marginBottom: 8,
  },
  headerText: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 8,
  },
  count: {
    color: '#fff',
    fontWeight: 'bold',
    backgroundColor: 'rgba(255,255,255,0.25)',
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 10,
    overflow: 'hidden',
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 10,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: 110,
    height: 95,
  },
  info: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
  },
  desc: {
    fontSize: 13,
    color: '#666',
    marginTop: 2,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 6,
  },
});
