
import * as React from 'react';
import { View, StyleSheet, Button, Text, Image } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';
import { useState, useRef, useEffect } from 'react';
import ReelsVideoBanner from './ReelsVideoBanner';

const ReelsVideoI = ({postView}) => {

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
                    source={require(`../../assets/video/reels2.mp4`)}
                    resizeMode={'cover'}
                    isLooping
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                    volume={mute ? 0 : 1}
                >
                  <ReelsVideoBanner postView={postView} mute={mute} photo={'https://instagram.fsaw3-1.fna.fbcdn.net/v/t51.2885-19/25008450_723325174522045_2932113532335947776_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fsaw3-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=VQEMvCUBHhEAX85AENu&edm=AEF8tYYBAAAA&ccb=7-5&oh=00_AT9pBdlPOdO-rCbLhBA-kCtnDXU3cFypReJX-tmoXL4CRg&oe=62EDF3B8&_nc_sid=a9513d'} username={'bolek_3d'} desc={'Unknown Place No. 8'} music={'bolek_3d'} likes={'153.2k'} comments={'3.344'} />
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
export default ReelsVideoI;