import * as React from "react";
import { Video } from "expo-av";
import { View, StyleSheet, Text, Touchable } from "react-native";
import ReelsVideoBanner from "./ReelsVideoBanner";
import { useRef, useState, useEffect } from "react";
import { TouchableOpacity, Image } from "react-native";
import { Mute } from "../../Icons";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomSheet from "react-native-gesture-bottom-sheet";
const ReelsVideo = ({ postView, navigator }) => {
  const video = useRef();
  const [mute, setMute] = useState(false);
  const [showC, setShowC] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const bottomSheet = useRef();

  const handleClick = () => {
    setMute(!mute);
  };

  useEffect(() => {
    setMute(true);
  }, []);


  console.log("====================================");
  console.log(bottomSheet.current.props);
  console.log("====================================");

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={{ backgroundColor: "white", zIndex: 99 }}
        onPress={() => bottomSheet.current.show()}
      >
        <Text>CLICK</Text>
      </TouchableOpacity>
      <Video
        ref={video}
        source={require(`../../assets/video/reels3.mp4`)}
        rate={1.0}
        volume={1.0}
        isMuted={mute}
        resizeMode="contain"
        shouldPlay
        isLooping
        style={{ height: "50%" }}
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
      >
        <ReelsVideoBanner mute={mute} bottomSheet={showComments} />
        {false && (
          <View
            style={{
              position: "absolute",
              top: "50%",
              right: "45%",
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
      <View style={{ flex: 1 }}>
        <BottomSheet hasDraggableIcon ref={bottomSheet} height={370} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    flexDirection: "column",
  },
});

export default ReelsVideo;
