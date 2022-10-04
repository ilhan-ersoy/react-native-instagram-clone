import * as React from 'react';
import { Video } from 'expo-av';
import { View, StyleSheet, Text, Touchable } from 'react-native';
import ReelsVideoBanner from './ReelsVideoBanner';
import { useRef, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Mute } from '../../Icons';
import { SafeAreaView } from 'react-native-safe-area-context';


const ReelsVideo = ({ postView, navigator }) => {

  const video = useRef();
  const [mute, setMute] = useState(false);

  const handleClick = () => {
    setMute(!mute);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Video
        ref={video}
        source={require(`../../assets/video/reels3.mp4`)}
        rate={1.0}
        volume={1.0}
        isMuted={mute}
        resizeMode="cover"
        shouldPlay
        isLooping
        style={{ height: '100%' }}
      >
      </Video>

      <TouchableOpacity onPress={() => handleClick()} activeOpacity={1} style={{ position: 'absolute', zIndex: 97, height: '100%', width: '100%' }}>
        <ReelsVideoBanner />
      </TouchableOpacity>

    </SafeAreaView >
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  }
})



export default ReelsVideo;