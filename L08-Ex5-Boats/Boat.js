import React, { useEffect, useRef } from 'react';
import { Text, View, Image, StyleSheet, Animated } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

// Custom component for one boat.
// props: name, description, picture, index (staggers the entrance animation)
const Boat = (props) => {
  const enter = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(enter, {
      toValue: 1,
      duration: 600,
      delay: (props.index || 0) * 150,
      useNativeDriver: true,
    }).start();
  }, []);

  const translateY = enter.interpolate({ inputRange: [0, 1], outputRange: [40, 0] });

  return (
    <Animated.View style={[styles.card, { opacity: enter, transform: [{ translateY }] }]}>
      <View style={styles.titleRow}>
        <View style={styles.iconCircle}>
          <FontAwesome6 name="ship" size={16} color="#FFFFFF" />
        </View>
        <Text style={styles.name}>{props.name}</Text>
      </View>
      <Text style={styles.description}>{props.description}</Text>
      <Image source={props.picture} style={styles.picture} resizeMode="cover" />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    marginHorizontal: 16,
    marginBottom: 22,
    overflow: 'hidden',
    elevation: 6,
    shadowColor: '#0B2545',
    shadowOpacity: 0.18,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  titleRow: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingTop: 16 },
  iconCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#13315C',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  name: { flex: 1, color: '#0B2545', fontSize: 19, fontWeight: '800', textTransform: 'uppercase' },
  description: { color: '#4A5568', fontSize: 14, lineHeight: 20, paddingHorizontal: 16, paddingVertical: 10 },
  picture: { width: '100%', height: 230 },
});

export default Boat;
