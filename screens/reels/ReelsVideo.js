
import * as React from 'react';
import { View, StyleSheet, Button, Text, Image } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';
import { useState, useRef, useEffect } from 'react';
import ReelsVideoBanner from './ReelsVideoBanner';

const ReelsVideo = () => {

    const video = useRef(null);
    const [status, setStatus] = useState({});
    const [mute, setMute] = useState(false);

    useEffect(() => {
      video.current.pauseAsync();
    }, []);



    return (
        <TouchableOpacity activeOpacity={1} 
              style={{zIndex:99}}
              onLongPress = {()=>video.current.pauseAsync()}
              onPressOut={()=>video.current.playAsync()}
              onPress={()=>setMute(!mute)}
            >
           
                <Video
                    shouldPlay={true}
                    ref={video}
                    style={styles.video}
                    source={require(`../../data/reels3.mp4`)}
                    resizeMode={'cover'}
                    isLooping
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                    volume={mute ? 0 : 1}
                >
                  <ReelsVideoBanner mute={mute} />
                </Video>
                
        </TouchableOpacity>
    )
}
    
const styles = StyleSheet.create({
  container: {
    flex:1
  },
  video: {
    alignSelf: 'center',
    width: '100%',
    height: '100%',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  storyHeader:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:20,
    paddingVertical:20
  }
});
export default ReelsVideo;