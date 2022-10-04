
import * as React from 'react';
import { View, StyleSheet, Button, Text, Image } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Swiper from 'react-native-swiper';
import { useState, useEffect } from 'react';
import { Camera, HearthReels, MessageReels, Mute, UnMute, CommentReels, LeftArrow } from '../../Icons';
import { Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setReelsOpacity, setShow } from '../../redux/appSlice';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ReelsVideoBanner = () => {

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
                        Reels
                    </Text>
                </View>
            </View>
            <View style={styles.rightSection}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        flexDirection: 'row',
        flex: 1,

    },
    leftSection: {
        width: '100%',
        height: '100%',
        flex: 1 / 2,
        paddingHorizontal: 20
    },
    rightSection: {
        width: '100%',
        height: '100%',
        flex: 1 / 2
    }
});

export default ReelsVideoBanner;



