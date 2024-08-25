import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = ({onPress, isPlaying}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{isPlaying ? 'Pause' : 'Play'}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ffffff',
    padding: 10,
    width: 140,
    height: 40,
    borderRadius: 100,
    margin: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#111111',
    fontSize: 14,
    fontWeight: '800',
    textAlign: 'center',
  },
});

export default Button;
