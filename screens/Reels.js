import * as React from "react";
import { View, StyleSheet, Button } from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";
import Swiper from "react-native-swiper";
import ReelsVideo from "./reels/ReelsVideo";
import ReelsVideoI from "./reels/ReelsVideoI";

export default function ReelScreen() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  return (
    <Swiper loop={false} horizontal={false} showsPagination={false}>
      <View style={{ flex: 1 }}>
        <ReelsVideo postView={false} />
      </View>
    </Swiper>
  );
}

const styles = StyleSheet.create({});
