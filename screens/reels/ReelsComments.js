import * as React from "react";
import { Video } from "expo-av";
import { View, StyleSheet, Text, Touchable } from "react-native";
import ReelsVideoBanner from "./ReelsVideoBanner";
import { useRef, useState, useEffect } from "react";
import { TouchableOpacity, Image, ScrollView, TextInput } from "react-native";
import { LeftArrow, Message, MessageReels, Messenger, Mute } from "../../Icons";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomSheet from "react-native-gesture-bottom-sheet";
import ReelsComment from "./ReelsComment"
import { Faker, faker } from "@faker-js/faker";
import SendStory from "../home/components/InstaStory/SendStory";
import { LinearGradient } from "expo-linear-gradient";

const ReelsComments = ({ postView, navigator }) => {

      return (
            <View style={styles.container}>
                  <View style={styles.top}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10 }}>
                              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <LeftArrow size={24} color={'#000'} />
                                    <Text style={{ marginLeft: 20, fontSize: 18, fontWeight: '600' }}>
                                          Comments
                                    </Text>
                              </View>
                              <View>
                                    <Message size={24} />
                              </View>
                        </View>
                  </View>
                  <View style={styles.userBanner}>
                        <View style={{ flexDirection: 'row', paddingHorizontal: 10 }}>

                              <LinearGradient
                                    style={{ width: 50, height: 50, borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}
                                    colors={['#DE0046', '#F7A34B']}>
                                    <Image
                                          style={{ width: 45, height: 45, borderRadius: 40, borderWidth: 3, borderColor: '#fff' }}
                                          source={{
                                                uri: faker.image.avatar(),
                                          }}
                                    />
                              </LinearGradient>
                              <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                                    <View style={{ flexDirection: 'row' }}>
                                          <Text style={{ fontWeight: '700' }}>Lorem</Text>
                                          <Text style={{ marginHorizontal: 5 }}>•</Text>
                                          <Text style={{ fontWeight: '600', color: '#3797f0', marginHorizontal: 5, fontSize: 14 }}>Follow</Text>
                                          <Text style={{ fontSize: 12, opacity: 0.6, fontWeight: '600', marginLeft: 5 }}>6w</Text>
                                    </View>
                                    <View style={{ marginTop: 8 }}>
                                          <Text>
                                                Lorem ipsum dolor sit  corrupti?
                                          </Text>
                                    </View>
                                    <View>
                                          <Text style={{ fontWeight: '600', opacity: 0.6, fontSize: 11, marginTop: 8 }}>See translation</Text>
                                    </View>
                              </View>
                        </View>
                  </View>

                  <View style={{ height: 1, borderBottomWidth: 1, opacity: 0.2, width: '100%' }} />

                  <ScrollView style={{ height: '100%', width: '100%' }}>
                        <View style={styles.commentsContainer}>
                              {Array.from(Array(20), (_, i) => <ReelsComment key={i} likeCount={'5625'} comment={faker.lorem.words(5)} img={faker.internet.avatar()} username={faker.internet.userName()} />)}
                        </View>
                  </ScrollView>
                  <View style={styles.writeCommentContainer}>
                        <View style={{ height: 1, borderBottomWidth: 1, opacity: 0.2, width: '100%' }} />
                        <View style={{ width: '100%', flexDirection: 'row', paddingVertical: 12, paddingHorizontal: 14 }}>
                              <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 26 }}>
                                          ❤️
                                    </Text>
                              </View>
                              <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 26 }}>
                                          🙌
                                    </Text>
                              </View>
                              <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 26 }}>
                                          🔥
                                    </Text>
                              </View>
                              <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 26 }}>
                                          👏
                                    </Text>
                              </View>
                              <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 26 }}>
                                          😰
                                    </Text>
                              </View>
                              <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 26 }}>
                                          😍
                                    </Text>
                              </View>
                              <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 26 }}>
                                          😮
                                    </Text>
                              </View>

                              <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 26 }}>
                                          😂
                                    </Text>
                              </View>

                        </View>
                        <View style={{ height: 1, borderBottomWidth: 1, opacity: 0.2, width: '100%' }} />
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                              <View style={{ paddingHorizontal: 12, paddingVertical: 2 }}>
                                    <Image style={{ width: 38, height: 38, borderWidth: 1, borderColor: '#BABABA', borderRadius: 100 }} source={require('../../assets/img/ilhan_ers.jpg')} />
                                    <TextInput style={styles.sendMessage} placeholder="Search" placeholderTextColor="#fff" />

                              </View>
                        </View>
                  </View>
            </View>
      )
}


const styles = StyleSheet.create({
      container: {
            backgroundColor: '#fff',
            height: 120,
            flex: 3 / 4,
      },
      top: {
            height: 50,
            justifyContent: 'center',
            paddingHorizontal: 10
      },
      userBanner: {
            height: 80,
            marginTop: 12,
            paddingHorizontal: 8
      },
      commentsContainer: {
            width: '100%',
      },
      writeCommentContainer: {
            height: 102
      },
      sendMessage: {
            width: '75%',
            borderWidth: 1,
            borderColor: '#fff',
            height: 40,
            borderRadius: 21,
            padding: 10,
            color: '#fff'
      },
})

export default ReelsComments;
