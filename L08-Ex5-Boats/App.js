import React from 'react';
import { ScrollView, View, Text, StyleSheet, StatusBar } from 'react-native';
import Boat from './Boat';

// The 6 boats GetABoat is selling (from Boats.txt)
const boats = [
  {
    name: 'Sea Ray 500 Sundancer',
    description:
      'Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away.',
    picture: require('./img/sea_ray.jpg'),
  },
  {
    name: 'Four Winns Horizon 180',
    description: 'A sporty look and refined details truly set the Horizon 180 above all others.',
    picture: require('./img/four_winns.jpg'),
  },
  {
    name: 'Flipper 640 ST',
    description: 'A modern take on the classic, traditional hardtop and perfect for a family picnic.',
    picture: require('./img/flipper.jpg'),
  },
  {
    name: 'Princess V48',
    description:
      'There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior.',
    picture: require('./img/princess.jpg'),
  },
  {
    name: 'Bayliner 175 Bowrider',
    description: 'Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance.',
    picture: require('./img/bayliner.jpg'),
  },
  {
    name: 'Fairline Targa 47',
    description:
      'Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit.',
    picture: require('./img/fairline.jpg'),
  },
];

export default function App() {
  return (
    <View style={styles.screen}>
      <StatusBar barStyle="light-content" backgroundColor="#13315C" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>GetABoat</Text>
        <Text style={styles.headerSub}>For Sale</Text>
      </View>
      <ScrollView contentContainerStyle={styles.list}>
        {boats.map((boat, i) => (
          <Boat
            key={boat.name}
            index={i}
            name={boat.name}
            description={boat.description}
            picture={boat.picture}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#EEF4FA' },
  header: { backgroundColor: '#13315C', paddingTop: 52, paddingBottom: 18, paddingHorizontal: 20 },
  headerTitle: { color: '#FFFFFF', fontSize: 28, fontWeight: '800' },
  headerSub: { color: '#8DA9C4', fontSize: 14, letterSpacing: 2, textTransform: 'uppercase', marginTop: 2 },
  list: { paddingTop: 20, paddingBottom: 30 },
});
