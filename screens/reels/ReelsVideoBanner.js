
import * as React from 'react';
import { View, StyleSheet, Button, Text, Image } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Swiper from 'react-native-swiper';
import { useState, useEffect } from 'react';
import { Camera, HearthReels, MessageReels, Mute, UnMute, CommentReels, LeftArrow, HearthLike } from '../../Icons';
import { Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setReelsOpacity, setShow } from '../../redux/appSlice';
import SendStory from '../home/components/InstaStory/SendStory';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ReelsVideoBanner = ({ mute }) => {

    const reelsOpacity = useSelector(state => state.app.reelsOpacity);
    const show = useSelector(state => state.app.show);
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <View style={styles.leftSection}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => alert('left')} style={{ zIndex: 99 }}>
                        <LeftArrow size={24} color={'#fff'} />
                    </TouchableOpacity>
                    <Text style={{ marginLeft: 20, fontWeight: 'bold', fontSize: 22, color: '#fff' }}>
                        Reels {mute ? 'muted' : ''}
                    </Text>
                </View>
            </View>
            <View style={styles.rightSection}>
                <View style={styles.rightSectionChild}>
                    <View style={{ flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
                        <TouchableOpacity onPress={() => alert('left')} style={{ zIndex: 99, flex: 1 / 4 }}>
                            <Camera size={24} />
                        </TouchableOpacity>
                        <View style={{ flex: 2 / 4 }}>
                            <TouchableOpacity onPress={() => alert('left')} style={{ zIndex: 99, flex: 1 / 4, flexDirection: 'column', alignItems: 'center' }}>
                                <HearthLike size={24} />
                                <Text style={{ fontSize: 12, color: '#fff', fontWeight: '600' }}>
                                    23.1k
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => alert('left')} style={{ zIndex: 99, flex: 1 / 4 }}>
                                <CommentReels size={24} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => alert('left')} style={{ zIndex: 99, flex: 1 / 4 }}>
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
    }

});

export default ReelsVideoBanner;



