import * as React from "react";
import { View, StyleSheet, Button } from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";
import Swiper from "react-native-swiper";
import ReelsVideo from "./reels/ReelsVideo";
import ReelsVideoI from "./reels/ReelsVideoI";
import ReelsVideoII from "./reels/ReelsVideoII";
import { useState } from "react";
import reels from "../data/Reels";

export default function ReelScreen() {

  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [currentIndex, setCurrentIndex] = useState(1);

  return (
    <Swiper onIndexChanged={(e) => setCurrentIndex(e)} loop={false} horizontal={false} showsPagination={false}>
      <View style={{ flex: 1 }}>
        <ReelsVideo index={1} postView={false} currentIndex={currentIndex}/>
      </View>
      <View style={{ flex: 1 }}>
        <ReelsVideoI index={2} postView={false} currentIndex={currentIndex} />
      </View>
      <View style={{ flex: 1 }}>
        <ReelsVideoII index={3} postView={false} currentIndex={currentIndex} />
      </View>
      {/* <View style={{ flex: 1 }}>
        <ReelsVideo index={1} postView={false} />
      </View>
     
      <View style={{ flex: 1 }}>
        <ReelsVideo index={1} postView={false} />
      </View>
      <View style={{ flex: 1 }}>
        <ReelsVideo index={1} postView={false} />
      </View> */}
    </Swiper>
  );
}

const styles = StyleSheet.create({});
