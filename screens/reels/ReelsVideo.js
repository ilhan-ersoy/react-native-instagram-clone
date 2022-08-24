
import * as React from 'react';
import { View, StyleSheet, Button, Text, Image } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';
import { useState, useRef, useEffect } from 'react';
import ReelsVideoBanner from './ReelsVideoBanner';

const ReelsVideo = ({postView}) => {

    const video = useRef(null);
    const [status, setStatus] = useState({});
    const [mute, setMute] = useState(false);

    useEffect(() => {
      video.current.pauseAsync();
    }, []);

    const handleMute =  () => {
      setMute(!mute);
      console.log('clicked')
    }

    return (
        <TouchableOpacity activeOpacity={1} 
              onLongPress = {()=>video.current.pauseAsync()}
              onPressOut={()=>video.current.playAsync()}
              onPress={() => handleMute()}
            >
                <Video
                    shouldPlay={true}
                    ref={video}
                    style={styles.video}
                    source={require(`../../assets/video/reels3.mp4`)}
                    resizeMode={'cover'}
                    isLooping
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                    volume={mute ? 0 : 1}
                >
                  <View style={{width:'100%',height:'100%',zIndex:999}}>
                    <ReelsVideoBanner setMute={setMute} postView={postView} mute={mute} photo={'https://instagram.fsaw3-1.fna.fbcdn.net/v/t51.2885-19/289329021_552196606376038_7855624414260327761_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fsaw3-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=fmk74a_IsTUAX_N_OPm&edm=AEF8tYYBAAAA&ccb=7-5&oh=00_AT_IWyy-HIFw5-VCN2uMSmhMqhbX_K1Vw4hOhThMjc11Zg&oe=62EE95EB&_nc_sid=a9513d'} username={'nightcinematic'} desc={'I wish that photographs were...'} music={'nightcinematic'} likes={'15.2k'} comments={'344'} />
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


export default ReelsVideo;