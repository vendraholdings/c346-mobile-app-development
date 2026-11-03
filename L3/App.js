import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ToastAndroid, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

// Exercise 1G (final state of 1A-1G)
// 1D/1E (Alert version): Alert.alert('Welcome!');
export default function App() {
  const [userType, setUserType] = useState('Admin');
  const [userName, setUserName] = useState('');

  const doLogin = () => {
    ToastAndroid.show('Welcome ' + userType + ' ' + userName, ToastAndroid.SHORT);
  };

  return (
    <View style={styles.container}>
      <Text>User Type:</Text>
      <Picker selectedValue={userType} onValueChange={(value) => setUserType(value)}>
        <Picker.Item label="Admin" value="Admin" />
        <Picker.Item label="Guest" value="Guest" />
      </Picker>
      <Text>User Name:</Text>
      <TextInput style={styles.input} onChangeText={(text) => setUserName(text)} />
      <Text>Password:</Text>
      <TextInput style={styles.input} secureTextEntry={true} />
      <TouchableOpacity onPress={doLogin}>
        <Text style={styles.login}>LOG IN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 40 },
  input: { borderWidth: 1, marginBottom: 10 },
  login: { fontWeight: 'bold', marginTop: 10 },
});
