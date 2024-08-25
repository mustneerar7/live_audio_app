import React from 'react';
import { StyleSheet, View } from 'react-native';

const Artwork = () => {
  return <View style={styles.artwork} />;
};

const styles = StyleSheet.create({
  artwork: {
    marginTop: 20,
    width: 140,
    height: 140,
    backgroundColor: '#6DF5B9',
    borderRadius: 8,
    marginBottom: 16,
  },
});

export default Artwork;
