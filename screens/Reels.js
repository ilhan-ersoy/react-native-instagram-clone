import * as React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import Swiper from 'react-native-swiper';
import ReelsVideo from './reels/ReelsVideo';
import ReelsVideoT from './reels/ReelsVideoT';

export default function ReelScreen() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  return (
    <Swiper loop={false} horizontal={false} showsPagination={false}>
      <View>
        <ReelsVideo />
      </View>
      <View>
        <ReelsVideo />
      </View>
    </Swiper>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
});