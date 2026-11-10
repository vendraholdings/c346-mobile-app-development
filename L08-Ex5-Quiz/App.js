import React, { useRef, useState, useEffect } from 'react';
import { View, Text, Image, Pressable, ScrollView, StyleSheet, Animated, StatusBar } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

// Smooth staggered entrance (fade + rise + subtle scale).
const useEntrance = (delay = 0) => {
  const v = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(v, { toValue: 1, duration: 520, delay, useNativeDriver: true }).start();
  }, []);
  return {
    opacity: v,
    transform: [
      { translateY: v.interpolate({ inputRange: [0, 1], outputRange: [26, 0] }) },
      { scale: v.interpolate({ inputRange: [0, 1], outputRange: [0.97, 1] }) },
    ],
  };
};

// One quiz question as a liquid-glass card.
const Question = ({ index, image, options, value, onChange }) => {
  const anim = useEntrance(140 + index * 120);
  const answered = value !== '';
  return (
    <Animated.View style={[styles.cardWrap, answered && styles.cardWrapDone, anim]}>
      <BlurView intensity={40} tint="dark" style={styles.card}>
        <Image source={image} style={styles.image} resizeMode="cover" />
        <View style={styles.qRow}>
          <View style={styles.badge}><Text style={styles.badgeText}>{index + 1}</Text></View>
          <Text style={styles.question}>What animal is this?</Text>
          {answered && <Ionicons name="checkmark-circle" size={22} color="#34D399" style={styles.tick} />}
        </View>
        <View style={styles.pickerWrap}>
          <Picker
            selectedValue={value}
            onValueChange={onChange}
            style={styles.picker}
            itemStyle={styles.pickerItem}
            dropdownIconColor="#0B1022"
          >
            <Picker.Item label="Select an answer…" value="" color="#6B7280" />
            {options.map((o) => (
              <Picker.Item key={o} label={o} value={o} color="#0B1022" />
            ))}
          </Picker>
        </View>
      </BlurView>
    </Animated.View>
  );
};

export default function App() {
  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [answer3, setAnswer3] = useState('');
  const [result, setResult] = useState(null);

  const header = useEntrance(0);
  const scale = useRef(new Animated.Value(1)).current;
  const resultAnim = useRef(new Animated.Value(0)).current;

  const checkAnswers = () => {
    let correct = 0;
    if (answer1 === 'Elephant') correct++;
    if (answer2 === 'Leopard') correct++;
    if (answer3 === 'Giraffe') correct++;
    setResult({ correct, perfect: correct === 3 });
    resultAnim.setValue(0);
    Animated.spring(resultAnim, { toValue: 1, friction: 7, tension: 60, useNativeDriver: true }).start();
  };

  const pressIn = () => Animated.spring(scale, { toValue: 0.97, useNativeDriver: true }).start();
  const pressOut = () => Animated.spring(scale, { toValue: 1, friction: 4, useNativeDriver: true }).start();

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="#0B1022" />
      <LinearGradient colors={['#0B1022', '#16213E', '#0B1022']} style={StyleSheet.absoluteFill} />
      <View style={styles.glowIndigo} pointerEvents="none" />
      <View style={styles.glowTeal} pointerEvents="none" />

      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <Animated.View style={header}>
          <View style={styles.logo}>
            <Ionicons name="paw" size={22} color="#FFFFFF" />
          </View>
          <Text style={styles.kicker}>C346 · MOBILE</Text>
          <Text style={styles.title}>Animal Quiz</Text>
          <Text style={styles.subtitle}>Pick the right animal for each photo.</Text>
        </Animated.View>

        <Question index={0} image={require('./img/elephant.jpg')} options={['Rhino', 'Elephant', 'Hippo']} value={answer1} onChange={setAnswer1} />
        <Question index={1} image={require('./img/leopard.jpg')} options={['Tiger', 'Cheetah', 'Leopard']} value={answer2} onChange={setAnswer2} />
        <Question index={2} image={require('./img/giraffe.jpg')} options={['Giraffe', 'Zebra', 'Camel']} value={answer3} onChange={setAnswer3} />

        {result && (
          <Animated.View
            style={[
              styles.resultWrap,
              { opacity: resultAnim, transform: [
                { translateY: resultAnim.interpolate({ inputRange: [0, 1], outputRange: [18, 0] }) },
                { scale: resultAnim.interpolate({ inputRange: [0, 1], outputRange: [0.95, 1] }) },
              ] },
            ]}
          >
            <BlurView intensity={55} tint="dark" style={styles.resultCard}>
              <Ionicons name={result.perfect ? 'trophy' : 'ribbon'} size={30} color={result.perfect ? '#FBBF24' : '#60A5FA'} />
              <Text style={styles.resultScore}>{result.correct} / 3 correct</Text>
              <Text style={styles.resultMsg}>{result.perfect ? 'Perfect score — well done!' : 'Good try — you can do better next time.'}</Text>
            </BlurView>
          </Animated.View>
        )}

        <Animated.View style={{ transform: [{ scale }], marginTop: 10, marginBottom: 36 }}>
          <Pressable onPressIn={pressIn} onPressOut={pressOut} onPress={checkAnswers}>
            <LinearGradient colors={['#34D399', '#22C55E']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.button}>
              <Ionicons name="checkmark-done" size={20} color="#06260F" />
              <Text style={styles.buttonText}>Submit Answers</Text>
            </LinearGradient>
          </Pressable>
        </Animated.View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#0B1022' },
  glowIndigo: { position: 'absolute', top: -130, right: -90, width: 360, height: 360, borderRadius: 999, backgroundColor: 'rgba(99,102,241,0.28)' },
  glowTeal: { position: 'absolute', bottom: -150, left: -110, width: 380, height: 380, borderRadius: 999, backgroundColor: 'rgba(20,184,166,0.20)' },

  scroll: { paddingTop: 72, paddingHorizontal: 18, paddingBottom: 48 },

  logo: { width: 48, height: 48, borderRadius: 16, backgroundColor: '#6366F1', alignItems: 'center', justifyContent: 'center', marginLeft: 2, marginBottom: 14 },
  kicker: { color: '#8B93C9', fontSize: 12, fontWeight: '700', letterSpacing: 3, textTransform: 'uppercase', marginLeft: 4 },
  title: { color: '#F5F7FF', fontSize: 38, fontWeight: '800', letterSpacing: 0.3, marginTop: 6, marginLeft: 2 },
  subtitle: { color: '#9AA0C7', fontSize: 15, marginTop: 6, marginBottom: 26, marginLeft: 3 },

  cardWrap: { borderRadius: 26, overflow: 'hidden', borderWidth: 1, borderColor: 'rgba(255,255,255,0.14)', marginBottom: 18, backgroundColor: 'rgba(255,255,255,0.02)' },
  cardWrapDone: { borderColor: 'rgba(52,211,153,0.45)' },
  card: { padding: 14 },
  image: { width: '100%', height: 200, borderRadius: 18 },

  qRow: { flexDirection: 'row', alignItems: 'center', marginTop: 14, marginBottom: 12 },
  badge: { width: 26, height: 26, borderRadius: 13, backgroundColor: '#6366F1', alignItems: 'center', justifyContent: 'center', marginRight: 10 },
  badgeText: { color: '#FFFFFF', fontSize: 13, fontWeight: '800' },
  question: { color: '#F5F7FF', fontSize: 16, fontWeight: '700', letterSpacing: 0.2 },
  tick: { marginLeft: 'auto' },

  pickerWrap: { backgroundColor: 'rgba(255,255,255,0.92)', borderRadius: 14, borderWidth: 1, borderColor: 'rgba(255,255,255,0.35)', overflow: 'hidden' },
  picker: { color: '#0B1022' },
  pickerItem: { color: '#0B1022', fontSize: 16 },

  resultWrap: { borderRadius: 22, overflow: 'hidden', borderWidth: 1, borderColor: 'rgba(255,255,255,0.16)', marginTop: 4 },
  resultCard: { paddingVertical: 20, paddingHorizontal: 18, alignItems: 'center' },
  resultScore: { color: '#F5F7FF', fontSize: 22, fontWeight: '800', marginTop: 8 },
  resultMsg: { color: '#9AA0C7', fontSize: 14, marginTop: 4, textAlign: 'center' },

  button: { flexDirection: 'row', gap: 8, borderRadius: 16, paddingVertical: 16, alignItems: 'center', justifyContent: 'center', shadowColor: '#22C55E', shadowOpacity: 0.5, shadowRadius: 18, shadowOffset: { width: 0, height: 8 }, elevation: 6 },
  buttonText: { color: '#06260F', fontSize: 17, fontWeight: '800', letterSpacing: 0.4 },
});
