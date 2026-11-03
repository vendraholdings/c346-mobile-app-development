import React, { useState } from 'react';
import { View, Text, Image, Button, Alert, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [answer3, setAnswer3] = useState('');

  const checkAnswers = () => {
    let correct = 0;
    if (answer1 === 'Elephant') correct++;
    if (answer2 === 'Leopard') correct++;
    if (answer3 === 'Giraffe') correct++;
    Alert.alert('You have ' + correct + ' correct answers!');
  };

  return (
    <ScrollView style={{ marginTop: 40 }}>
      <Image source={require('./img/elephant.jpg')} style={{ width: '100%', height: 250 }} />
      <Text>What animal is this?</Text>
      <Picker selectedValue={answer1} onValueChange={(value) => setAnswer1(value)}>
        <Picker.Item label="Select an item..." value="" />
        <Picker.Item label="Rhino" value="Rhino" />
        <Picker.Item label="Elephant" value="Elephant" />
        <Picker.Item label="Hippo" value="Hippo" />
      </Picker>

      <Image source={require('./img/leopard.jpg')} style={{ width: '100%', height: 250 }} />
      <Text>What animal is this?</Text>
      <Picker selectedValue={answer2} onValueChange={(value) => setAnswer2(value)}>
        <Picker.Item label="Select an item..." value="" />
        <Picker.Item label="Tiger" value="Tiger" />
        <Picker.Item label="Cheetah" value="Cheetah" />
        <Picker.Item label="Leopard" value="Leopard" />
      </Picker>

      <Image source={require('./img/giraffe.jpg')} style={{ width: '100%', height: 250 }} />
      <Text>What animal is this?</Text>
      <Picker selectedValue={answer3} onValueChange={(value) => setAnswer3(value)}>
        <Picker.Item label="Select an item..." value="" />
        <Picker.Item label="Giraffe" value="Giraffe" />
        <Picker.Item label="Zebra" value="Zebra" />
        <Picker.Item label="Camel" value="Camel" />
      </Picker>

      <View style={{ marginBottom: 40 }}>
        <Button title="Submit Answers" onPress={checkAnswers} />
      </View>
    </ScrollView>
  );
}
