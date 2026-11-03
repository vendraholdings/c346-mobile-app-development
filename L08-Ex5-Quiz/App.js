import React, { useState } from 'react';
import { View, Text, Image, Button, Alert, ScrollView, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Question = ({ image, options, value, onChange }) => (
  <View style={styles.card}>
    <Image source={image} style={styles.image} />
    <Text style={styles.question}>What animal is this?</Text>
    <Picker selectedValue={value} onValueChange={onChange} style={styles.picker}>
      <Picker.Item label="Select an item..." value="" />
      {options.map((o) => (
        <Picker.Item key={o} label={o} value={o} />
      ))}
    </Picker>
  </View>
);

export default function App() {
  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [answer3, setAnswer3] = useState('');

  const checkAnswers = () => {
    let correct = 0;
    if (answer1 === 'Elephant') correct++;
    if (answer2 === 'Leopard') correct++;
    if (answer3 === 'Giraffe') correct++;
    let msg = correct === 3 ? 'Well done!' : 'You can do better next time.';
    Alert.alert('You have ' + correct + ' correct answers!', msg);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Animal Quiz</Text>
      <Question image={require('./img/elephant.jpg')} options={['Rhino', 'Elephant', 'Hippo']} value={answer1} onChange={setAnswer1} />
      <Question image={require('./img/leopard.jpg')} options={['Tiger', 'Cheetah', 'Leopard']} value={answer2} onChange={setAnswer2} />
      <Question image={require('./img/giraffe.jpg')} options={['Giraffe', 'Zebra', 'Camel']} value={answer3} onChange={setAnswer3} />
      <View style={styles.button}>
        <Button title="Submit Answers" color="#2e7d32" onPress={checkAnswers} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#eef5ee', paddingTop: 40 },
  title: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', color: '#2e7d32', marginBottom: 10 },
  card: { backgroundColor: 'white', margin: 10, borderRadius: 10, overflow: 'hidden', borderWidth: 1, borderColor: '#ccc' },
  image: { width: '100%', height: 220 },
  question: { fontSize: 18, fontWeight: 'bold', padding: 10, textAlign: 'center' },
  picker: { marginHorizontal: 10 },
  button: { margin: 20, marginBottom: 60 },
});
