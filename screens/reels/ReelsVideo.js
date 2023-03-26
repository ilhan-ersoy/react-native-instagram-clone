import * as React from "react";
import { Video } from "expo-av";
import { View, StyleSheet, Text, Touchable } from "react-native";
import ReelsVideoBanner from "./ReelsVideoBanner";
import { useRef, useState, useEffect } from "react";
import { TouchableOpacity, Image } from "react-native";
import { Mute } from "../../Icons";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomSheet from "react-native-gesture-bottom-sheet";
import ReelsComments from "./ReelsComments";
import { setHideTabBar, hideTabBar } from "../../redux/appSlice";
import { useSelector, useDispatch } from "react-redux";
import { Platform } from "react-native-web";
import { useIsFocused } from '@react-navigation/native';




const ReelsVideo = ({ postView, navigator, index, currentIndex }) => {
  const video = useRef();
  const [mute, setMute] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const bottomSheet = useRef();
  const dispatch = useDispatch();
  const [sPlay, setSPlay] = useState(true);
  const isFocused = useIsFocused();

  useEffect(() => {
   if(index != currentIndex + 1) {
    setMute(true)
    setSPlay(false)
   }
  },[currentIndex])


  const handleClick = () => {
    if (!showComments) setMute(!mute);
    setShowComments(false);
  };


  useEffect(() => setMute(true), []);

  useEffect(() => {
    dispatch(setHideTabBar(showComments))

    
  }, [showComments])



  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{ flexDirection: "column", flex: !showComments ? 1 : 2 / 4, backgroundColor: '#000' }}
      >
        <Video
          ref={video}
          source={require("../../assets/video/reels2.mp4")}
          rate={1.0}
          volume={1.0}
          isMuted={mute}
          resizeMode={showComments ? "contain" : "cover"}
          shouldPlay={sPlay}
          isLooping
          style={{ height: Platform.OS != 'android' ? '121%' : '200%' }}
        ></Video>

        <TouchableOpacity
          onPress={() => handleClick()}
          activeOpacity={1}
          style={{
            position: "absolute",
            zIndex: 97,
            height: "100%",
            width: "100%",
          }}
          onLongPress={() => setSPlay(false)}
          onPressOut={() => setSPlay(true)}
        >
          {sPlay && !showComments && (
            <ReelsVideoBanner
              mute={mute}
              showComments={showComments}
              setShowComments={setShowComments}
            />
          )}
          {false && (
            <View
              style={{
                position: "absolute",
                top: "50%",
                right: "45%",
                zIndex: 99,
              }}
            >
              <Image
                style={{ width: 75, height: 75 }}
                source={{
                  uri: "https://imgur.com/rksyGE8.png",
                }}
              />
            </View>
          )}
        </TouchableOpacity>
      </View>
      {showComments && <ReelsComments />}


    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
  },
});

export default ReelsVideo;
