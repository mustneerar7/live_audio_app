import React from 'react';
import { Text, StyleSheet } from 'react-native';

const ProgressTime = ({ position }) => {
  const formattedTime = new Date(position * 1000).toISOString().substr(11, 8);

  return (
    <Text style={styles.progressTime}>
      {formattedTime}
    </Text>
  );
};

const styles = StyleSheet.create({
  progressTime: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default ProgressTime;
