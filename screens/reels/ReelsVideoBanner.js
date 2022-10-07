
import * as React from 'react';
import { View, StyleSheet, Button, Text, Image } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Swiper from 'react-native-swiper';
import { useState, useEffect } from 'react';
import { Camera, HearthReels, MessageReels, Mute, UnMute, CommentReels, LeftArrow, HearthLike, More, HeartLikeFilled } from '../../Icons';
import { Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setReelsOpacity, setShow } from '../../redux/appSlice';
import SendStory from '../home/components/InstaStory/SendStory';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { Keyframe } from 'react-native-reanimated';
import { faker } from '@faker-js/faker';
const ReelsVideoBanner = ({ mute, bottomSheet }) => {

    const reelsOpacity = useSelector(state => state.app.reelsOpacity);
    const show = useSelector(state => state.app.show);
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <View style={styles.leftSection}>
                <View style={{ flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => alert('left')} style={{ zIndex: 99 }}>
                            <LeftArrow size={24} color={'#fff'} />
                        </TouchableOpacity>
                        <Text style={{ marginLeft: 20, fontWeight: 'bold', fontSize: 22, color: '#fff' }}>
                            Reels {mute ? 'muted' : ''}
                        </Text>
                    </View>
                    <View style={{ height: 65, flexDirection: 'column' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image style={{ width: 32, height: 32, borderRadius: 100 }} source={{
                                uri: faker.image.sports(200, 400, true)
                            }} />
                            <Text style={{ marginLeft: 9, color: '#fff', fontSize: 12, fontWeight: '700' }}>pyromx11</Text>
                            <TouchableOpacity onPress={() => alert('left')} style={styles.followButton}>
                                <Text style={{ fontSize: 12, fontWeight: '500', color: '#fff' }}>
                                    Follow
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={{ color: '#fff', marginTop: 12, fontSize: 12 }}>
                                Oasyi Patra...
                            </Text>
                        </View>
                        <View>

                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.rightSection}>
                <View style={styles.rightSectionChild}>
                    <View style={{ flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
                        <TouchableOpacity onPress={() => alert('left')} style={{ zIndex: 99, flex: 1 / 4 }}>
                            <Camera size={24} />
                        </TouchableOpacity>
                        <View style={{ flex: 1.5 / 4, flexDirection: 'column', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => alert('left')} style={{ zIndex: 99, flex: 1 / 4, flexDirection: 'column', alignItems: 'center' }}>
                                {true ? <HeartLikeFilled size={24} /> :
                                    <HearthLike size={24} />}
                                <Text style={{ fontSize: 12, color: '#fff', fontWeight: '600', marginTop: 2 }}>
                                    23.1k
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => alert('left')} style={{ zIndex: 99, flex: 1 / 4, flexDirection: 'column', alignItems: 'center' }}>
                                <CommentReels size={24} />
                                <Text style={{ fontSize: 12, color: '#fff', fontWeight: '600', marginTop: 2 }}>
                                    1k
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => alert('left')} style={{ zIndex: 99, flex: 1 / 4, flexDirection: 'column', alignItems: 'center' }}>
                                <MessageReels size={24} />
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    leftSection: {
        width: '100%',
        height: '100%',
        flex: 1 / 2,
        paddingHorizontal: 20,
        justifyContent: 'flex-start'

    },
    rightSection: {
        width: '100%',
        height: '100%',
        flex: 1 / 2,
        marginTop: 12,
    },
    rightSectionChild: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingRight: 40,
        height: '100%',
    },
    followButton: {
        color: '#fff',
        paddingHorizontal: 13,
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 8,
        paddingVertical: 5,
        marginLeft: 14
    }

});

export default ReelsVideoBanner;



