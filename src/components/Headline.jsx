import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Headline = () => {
  return <Text style={styles.headline}>My Favorite{'\n'}Podcast</Text>;
};

const styles = StyleSheet.create({
  headline: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '800',
  },
});

export default Headline;
