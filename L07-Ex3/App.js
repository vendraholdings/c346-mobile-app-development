import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Final state = 3E (last justifyContent). Earlier steps kept as comments.
export default function App() {
  return (
    <View style={styles.Parent}>
      {/* 3A/3B: <Text style={[styles.Child, { backgroundColor: 'powderblue' }]}>Child One</Text> */}
      {/* 3C: Child One maxWidth: 90, Child Three maxHeight: 120 */}
      {/* <Text style={[styles.Child, { backgroundColor: 'powderblue', maxWidth: 90 }]}>Child One</Text> */}
      {/* <Text style={[styles.Child, { backgroundColor: 'steelblue', maxHeight: 120 }]}>Child Three</Text> */}
      {/* 3D: inline flex 1 : 2 : 3 (with Parent flexDirection 'row') */}
      {/* <Text style={[styles.Child, { backgroundColor: 'powderblue', flex: 1 }]}>Child One</Text> */}
      {/* <Text style={[styles.Child, { backgroundColor: 'skyblue', flex: 2 }]}>Child Two</Text> */}
      {/* <Text style={[styles.Child, { backgroundColor: 'steelblue', flex: 3 }]}>Child Three</Text> */}
      <Text style={[styles.Child, { backgroundColor: 'powderblue' }]}>Child One</Text>
      <Text style={[styles.Child, { backgroundColor: 'skyblue' }]}>Child Two</Text>
      <Text style={[styles.Child, { backgroundColor: 'steelblue' }]}>Child Three</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Parent: {
    // 3A: flexDirection: 'row',
    flex: 1, // 3B
    flexDirection: 'column', // 3B
    backgroundColor: '#F5fcff',
    borderColor: '#0099AA',
    borderWidth: 5,
    marginTop: 30,
    // 3E:
    // justifyContent: 'flex-start',
    // justifyContent: 'flex-end',
    // justifyContent: 'space-around',
    justifyContent: 'space-between',
  },
  Child: {
    borderWidth: 2,
    textAlign: 'center',
    fontSize: 24,
    // flex: 1, // 3B (comment out for 3E)
  },
});
