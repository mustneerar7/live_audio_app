import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const LiveBadge = () => {
  return (
    <View style={styles.liveBadge}>
      <Text style={styles.liveText}>LIVE</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  liveBadge: {
    marginTop: 10,
    width: 64,
    height: 30,
    backgroundColor: 'red',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  liveText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '800',
    textAlign: 'center',
  },
});

export default LiveBadge;
