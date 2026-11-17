import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Image, Pressable, Animated, ActivityIndicator, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { cardUrl, dexNo } from './data';

// One list item: name + badges on the LEFT, card picture on the RIGHT.
// - Fades/slides in when it first appears (staggered by `order`).
// - Shrinks slightly while pressed (press feedback).
// - Shows a pokeball spinner until the online card image has loaded.
export default function PokemonRow({ item, section, order, onPress }) {
  const [main, dark] = section.colours;

  // Entrance animation: 0 -> 1
  const enter = useRef(new Animated.Value(0)).current;
  // Press animation: scale 1 -> 0.96
  const press = useRef(new Animated.Value(1)).current;
  // Image fade-in once loaded
  const imgFade = useRef(new Animated.Value(0)).current;
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    Animated.timing(enter, {
      toValue: 1,
      duration: 480,
      delay: 120 + order * 70,
      useNativeDriver: true,
    }).start();
  }, []);

  const springTo = (value) =>
    Animated.spring(press, { toValue: value, useNativeDriver: true, speed: 30, bounciness: 6 }).start();

  const onImageLoad = () => {
    setLoaded(true);
    Animated.timing(imgFade, { toValue: 1, duration: 350, useNativeDriver: true }).start();
  };

  const animatedStyle = {
    opacity: enter,
    transform: [
      { translateY: enter.interpolate({ inputRange: [0, 1], outputRange: [30, 0] }) },
      { scale: press },
    ],
  };

  return (
    <Animated.View style={[styles.wrap, animatedStyle]}>
      <Pressable
        onPress={() => onPress(item, section)}
        onPressIn={() => springTo(0.96)}
        onPressOut={() => springTo(1)}
        // Type-tinted glow around the card (boxShadow works on iOS + Android new arch)
        style={[styles.card, { borderColor: main + '55', boxShadow: `0 6px 22px ${main}40` }]}
      >
        {/* Soft type-coloured wash across the card */}
        <LinearGradient
          colors={[main + '33', 'transparent']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={StyleSheet.absoluteFill}
        />

        {/* LEFT: number, name, badges */}
        <View style={styles.info}>
          <Text style={styles.dex}>{dexNo(item.card)}</Text>
          <Text style={styles.name} numberOfLines={1}>{item.key}</Text>

          <View style={styles.badges}>
            <LinearGradient colors={[main, dark]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.typePill}>
              <MaterialCommunityIcons name={section.icon} size={13} color="#fff" />
              <Text style={styles.typePillText}>{section.title.toUpperCase()}</Text>
            </LinearGradient>
            <View style={styles.cardPill}>
              <MaterialCommunityIcons name="cards-outline" size={12} color="#C9CFE8" />
              <Text style={styles.cardPillText}>{item.card}/165</Text>
            </View>
          </View>

          <View style={styles.hint}>
            <MaterialCommunityIcons name="gesture-tap" size={14} color="#7C84A8" />
            <Text style={styles.hintText}>Tap for details</Text>
          </View>
        </View>

        {/* RIGHT: online card picture with loading placeholder */}
        <View style={[styles.artFrame, { boxShadow: `0 8px 18px ${dark}66` }]}>
          {!loaded && (
            <View style={styles.placeholder}>
              <MaterialCommunityIcons name="pokeball" size={34} color={main + '99'} />
              <ActivityIndicator size="small" color={main} style={{ marginTop: 8 }} />
            </View>
          )}
          <Animated.Image
            source={{ uri: cardUrl(item.card) }}
            style={[styles.art, { opacity: imgFade }]}
            resizeMode="cover"
            onLoad={onImageLoad}
          />
        </View>
      </Pressable>
    </Animated.View>
  );
}

const CARD_W = 108;
const CARD_H = 151; // real card ratio is about 5:7

const styles = StyleSheet.create({
  wrap: {
    marginHorizontal: 16,
    marginTop: 12,
  },
  card: {
    flexDirection: 'row', // info left, art right
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 14,
    borderRadius: 22,
    borderWidth: 1,
    backgroundColor: '#161B33',
    overflow: 'hidden',
  },
  info: {
    flex: 1,
    paddingRight: 12,
  },
  dex: {
    color: '#7C84A8',
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 1,
  },
  name: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '800',
    marginTop: 2,
    letterSpacing: 0.3,
  },
  badges: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
    gap: 6,
  },
  typePill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 999,
    gap: 4,
  },
  typePillText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
  },
  cardPill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderRadius: 999,
    backgroundColor: 'rgba(255,255,255,0.08)',
    gap: 4,
  },
  cardPillText: {
    color: '#C9CFE8',
    fontSize: 11,
    fontWeight: '700',
  },
  hint: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 14,
    gap: 4,
  },
  hintText: {
    color: '#7C84A8',
    fontSize: 12,
  },
  artFrame: {
    width: CARD_W,
    height: CARD_H,
    borderRadius: 10,
    backgroundColor: '#0E1226',
    overflow: 'hidden',
  },
  placeholder: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  art: {
    width: CARD_W,
    height: CARD_H,
  },
});
