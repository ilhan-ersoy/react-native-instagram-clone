
import * as React from 'react';
import { View, StyleSheet, Button, Text, Image } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';
import { useState } from 'react';

const ReelsVideoT = () => {

    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    const [mute, setMute] = useState(false);

    return (
        <TouchableOpacity activeOpacity={1} 
        onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
        }
            >
           
                <Video
                    shouldPlay={true}
                    ref={video}
                    style={styles.video}
                    source={require(`../../data/reels2.mp4`)}
                    resizeMode={'cover'}
                    isLooping
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                    volume={mute ? 0 : 1}
                    
                >
                    <View style={{flex:1,justifyContent:'space-between',zIndex:99}}>
                        <View style={styles.storyHeader}>
                            <Text style={{fontSize:24,zIndex:99,fontWeight:'700',color:'#fff'}}>Reels</Text>
                            <View style={{alignSelf:'center',justifyContent:'center'}}>
                                <Text style={{fontSize:24,zIndex:99,fontWeight:'700',color:'#fff'}}>{mute ? 'MUTE X' : ''}</Text>
                            </View> 
                        </View>
                    </View>
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
export default ReelsVideoT;