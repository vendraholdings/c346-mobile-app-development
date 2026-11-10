import React, { useEffect, useRef } from 'react';
import { Text, View, Image, StyleSheet, Animated } from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';

// Custom component for one boat, rendered as a liquid-glass card.
// props: name, description, picture, index (staggers the entrance animation)
const Boat = (props) => {
  const enter = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(enter, {
      toValue: 1,
      duration: 560,
      delay: (props.index || 0) * 130,
      useNativeDriver: true,
    }).start();
  }, []);

  const translateY = enter.interpolate({ inputRange: [0, 1], outputRange: [36, 0] });
  const scale = enter.interpolate({ inputRange: [0, 1], outputRange: [0.97, 1] });

  return (
    <Animated.View style={[styles.cardWrap, { opacity: enter, transform: [{ translateY }, { scale }] }]}>
      <BlurView intensity={40} tint="dark" style={styles.card}>
        <View style={styles.titleRow}>
          <View style={styles.iconCircle}>
            <Ionicons name="boat" size={16} color="#FFFFFF" />
          </View>
          <Text style={styles.name}>{props.name}</Text>
        </View>
        <Text style={styles.description}>{props.description}</Text>
        <Image source={props.picture} style={styles.picture} resizeMode="cover" />
      </BlurView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  cardWrap: {
    borderRadius: 24,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.14)',
    backgroundColor: 'rgba(255,255,255,0.02)',
    marginHorizontal: 18,
    marginBottom: 20,
  },
  card: { paddingBottom: 0 },
  titleRow: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingTop: 16 },
  iconCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#6366F1',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 11,
  },
  name: { flex: 1, color: '#F5F7FF', fontSize: 16, fontWeight: '800', letterSpacing: 0.4, textTransform: 'uppercase' },
  description: { color: '#AEB4D8', fontSize: 14, lineHeight: 20, paddingHorizontal: 16, paddingVertical: 12 },
  picture: { width: '100%', height: 210 },
});

export default Boat;
