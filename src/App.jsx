import React, { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import TrackPlayer, { useProgress } from 'react-native-track-player';

import Artwork from './components/Artwork';
import Button from './components/Button';
import Headline from './components/Headline';
import LiveBadge from './components/LiveBadge';
import ProgressTime from './components/ProgressTime';


const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { position } = useProgress();

  async function setup() {
    await TrackPlayer.setupPlayer()
      .then(() => {
        console.log('Player setup');
        addTrack();
      })
      .catch(error => {
        console.log(error);
      });
  }

  async function addTrack() {
    await TrackPlayer.add({
      id: 1,
      url: 'http://192.168.1.4:8082/hls/audio.m3u8', // Replace with your own HLS URL
      type: 'hls',
      title: 'Track Title',
      artist: 'Track Artist',
    })
      .then(() => {
        console.log('Track added');
      })
      .catch(error => {
        console.log(error);
      });
  }

  async function play() {
    await TrackPlayer.play()
      .then(() => {
        console.log('Playing');
        setIsPlaying(true);
      })
      .catch(error => {
        console.log(error);
      });
  }

  async function pause() {
    await TrackPlayer.pause()
      .then(() => {
        console.log('Paused');
        setIsPlaying(false);
      })
      .catch(error => {
        console.log(error);
      });
  }

  useEffect(() => {
    setup();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.playerContainer}>
        <Artwork />
        <View style={styles.infoContainer}>
          <Headline />
          <LiveBadge />
          <ProgressTime position={position} />
        </View>
      </View>
      <Button onPress={isPlaying ? pause : play} isPlaying={isPlaying} />
      <StatusBar barStyle="light-content" backgroundColor="#000C26" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000C26',
  },
  playerContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  infoContainer: {
    flexDirection: 'column',
  },
});

export default App;
