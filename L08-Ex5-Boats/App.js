import React from 'react';
import { ScrollView, View, Text, StyleSheet, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
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
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="#0B1022" />
      <LinearGradient colors={['#0B1022', '#16213E', '#0B1022']} style={StyleSheet.absoluteFill} />
      <View style={styles.glowIndigo} pointerEvents="none" />
      <View style={styles.glowTeal} pointerEvents="none" />

      <View style={styles.header}>
        <View style={styles.logo}>
          <Ionicons name="boat" size={22} color="#FFFFFF" />
        </View>
        <Text style={styles.kicker}>C346 · FOR SALE</Text>
        <Text style={styles.title}>GetABoat</Text>
        <Text style={styles.subtitle}>Premium vessels, handpicked.</Text>
      </View>

      <ScrollView contentContainerStyle={styles.list} showsVerticalScrollIndicator={false}>
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
  root: { flex: 1, backgroundColor: '#0B1022' },
  glowIndigo: { position: 'absolute', top: -130, right: -90, width: 360, height: 360, borderRadius: 999, backgroundColor: 'rgba(99,102,241,0.28)' },
  glowTeal: { position: 'absolute', bottom: -150, left: -110, width: 380, height: 380, borderRadius: 999, backgroundColor: 'rgba(20,184,166,0.20)' },

  header: { paddingTop: 66, paddingHorizontal: 22, paddingBottom: 14 },
  logo: { width: 48, height: 48, borderRadius: 16, backgroundColor: '#6366F1', alignItems: 'center', justifyContent: 'center', marginBottom: 14 },
  kicker: { color: '#8B93C9', fontSize: 12, fontWeight: '700', letterSpacing: 3, textTransform: 'uppercase' },
  title: { color: '#F5F7FF', fontSize: 38, fontWeight: '800', letterSpacing: 0.3, marginTop: 6 },
  subtitle: { color: '#9AA0C7', fontSize: 15, marginTop: 6 },

  list: { paddingTop: 16, paddingBottom: 34 },
});
