import * as React from "react";
import { Video } from "expo-av";
import { View, StyleSheet, Text, Touchable } from "react-native";
import ReelsVideoBanner from "./ReelsVideoBanner";
import { useRef, useState, useEffect } from "react";
import { TouchableOpacity, Image, ScrollView } from "react-native";
import { LeftArrow, Mute } from "../../Icons";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomSheet from "react-native-gesture-bottom-sheet";

const ReelsComment = ({ comment }) => {

      const [x, setX] = useState(false);


      return (
            <View style={styles.container}>
                  <TouchableOpacity activeOpacity={1} onPress={() => setX(!x)}>
                        <Text>
                              TEST
                        </Text>
                  </TouchableOpacity>
                  <Text>
                        {comment}
                        {x ? '1' : '0'}
                  </Text>
            </View>
      )
}


const styles = StyleSheet.create({
      container: {
            height: 50,
            width: '100%'
      }
})

export default ReelsComment;
