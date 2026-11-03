import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={{ marginTop: 10 }}>
      <View style={styles.greenBox}>
        <Text style={[styles.boxText, styles.title]}>Who We Are</Text>
      </View>
      <View style={styles.greenBox}>
        <Text style={styles.boxText}>Our People</Text>
      </View>
      <View style={styles.greenBox}>
        <Text style={styles.boxText}>Our Campus</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  greenBox: { width: 100, height: 100, marginTop: 30, backgroundColor: 'green', borderWidth: 1, borderColor: 'black' },
  boxText: { textAlign: 'center', color: 'white' },
  title: { fontWeight: 'bold' },
});
