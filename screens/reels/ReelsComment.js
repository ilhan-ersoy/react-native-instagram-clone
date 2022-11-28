import * as React from "react";
import { Video } from "expo-av";
import { View, StyleSheet, Text, Touchable } from "react-native";
import ReelsVideoBanner from "./ReelsVideoBanner";
import { useRef, useState, useEffect } from "react";
import { TouchableOpacity, Image, ScrollView } from "react-native";
import { LeftArrow, Mute, RCLike, RcLikeFilled } from "../../Icons";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomSheet from "react-native-gesture-bottom-sheet";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const ReelsComment = ({ comment, img, username, likeCount }) => {
      const [like, setLike] = useState(false);

      return (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View style={styles.commentContainer}>
                        <Image
                              style={{ width: 38, height: 38, borderRadius: 40, borderWidth: 3, borderColor: '#fff' }}
                              source={{
                                    uri: 'https://freesvg.org/img/abstract-user-flat-4.png'
                              }}
                        />
                        <View style={{ flexDirection: 'column' }}>
                              <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 8 }}>
                                    <Text style={styles.userName}>
                                          {'pyromx11'}
                                    </Text>
                                    <Text style={{ fontSize: 10, opacity: 0.6, fontWeight: '600', marginLeft: 6 }}>
                                          10h
                                    </Text>
                              </View>
                              <View style={{ marginLeft: 8, marginTop: 10 }}>
                                    <Text>
                                          {'Lorem lipsum dolar mint it.'}
                                    </Text>
                              </View>
                              <View style={{ marginLeft: 8, marginTop: 10, flexDirection: 'row' }}>
                                    <TouchableOpacity activeOpacity={1}>
                                          <Text style={{ fontSize: 12, opacity: 0.6, fontWeight: '500' }}>
                                                {likeCount} likes
                                          </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity activeOpacity={1}>
                                          <Text style={{ fontSize: 12, marginLeft: 10, opacity: 0.6 }}>
                                                Reply
                                          </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity activeOpacity={1}>
                                          <Text style={{ fontSize: 12, marginLeft: 10, opacity: 0.6 }}>
                                                Send
                                          </Text>
                                    </TouchableOpacity>
                              </View>
                        </View>

                        <TouchableOpacity activeOpacity={1} style={{ position: 'absolute', right: 30, top: 14 }} onPress={() => setLike(!like)}>
                              {like ? <RcLikeFilled size={12} /> : <RCLike size={12} />}
                        </TouchableOpacity>
                  </View>

            </View>
      )
}


const styles = StyleSheet.create({
      commentContainer: {
            marginTop: 20,
            flexDirection: 'row',
            width: windowWidth,
            paddingHorizontal: 10,
      },
      profilePic: {
            width: 32,
            height: 32
      },
      userName: {
            fontSize: 13,
            fontWeight: '500',
      }
})

export default ReelsComment;
