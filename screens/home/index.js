import {View} from "react-native"
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { StyleSheet, ScrollView, TextInput, Text } from 'react-native';

import Header from "./components/Header";
import Post from "./components/Post";
import Stories from "./components/Stories";
import posts from "../../data/Posts";
import Swiper from 'react-native-swiper';
import DirectMessage from "./components/DirectMessage";
import InstaStory from 'react-native-insta-story';
import { HearthReels, MessageReels } from "../../Icons";
import { TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import BottomSheet from "react-native-gesture-bottom-sheet";


const HomeScreen = ({navigation}) => {
  
    const [index, setIndex] = useState(0);
    const [showComments, setShowComments] = useState(false);
    const show = useSelector(state => state.app.show);
    const bottomSheet = useRef();
    
    const data = [
        {
            user_id: 1,
            user_image: 'https://instagram.fsaw3-1.fna.fbcdn.net/v/t51.2885-19/240936026_508945976807276_3878467107109739721_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fsaw3-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=tviEQGwQpCIAX-YR6pg&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AT9Ea9hI2ve_bZEoXmcwlla819vuOHsO-ywfSw1yM7z1ag&oe=62E9BFE7&_nc_sid=8fd12b',
            user_name: "ilhan.ers",
            stories: [
                {
                    story_id: 1,
                    story_image: "https://instagram.fsaw3-1.fna.fbcdn.net/v/t51.2885-15/292416937_5489123251130525_92558065084481252_n.jpg?stp=dst-jpg_e35_p480x480&cb=2d435ae8-326fec31&_nc_ht=instagram.fsaw3-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=QHimw6BysywAX_tOLPN&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg3NzIwNjIxMTUxMjEwNjk2MA%3D%3D.2-ccb7-5&oh=00_AT_EY2hRn1fKwHMOvOTdShXjiuRX_XHXZmCu-UU30JkUkw&oe=62E9BFA7&_nc_sid=30a2ef",
                    swipeText:'Custom swipe text for this story',
                    onPress: () => console.log('story 1 swiped'),
                },
                {
                    story_id: 2,
                    story_image: "https://instagram.fsaw3-1.fna.fbcdn.net/v/t51.2885-15/279077000_165685705821499_5895923453112369210_n.jpg?stp=dst-jpg_e35_p480x480&cb=2d435ae8-326fec31&_nc_ht=instagram.fsaw3-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=BtEiHxT8K4wAX9Cy9zF&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjgyNDI5NzAxOTg3MzEwNzgzNw%3D%3D.2-ccb7-5&oh=00_AT9lNj4uAbiR08zxCV655qEHSsOkJIJwJhhNBdu8VBtbqw&oe=62E9EDB7&_nc_sid=30a2ef",
                    wipeText:'Custom swipe text for this story',
                    onPress: () => console.log('story 1 swiped'),
                }]
        },
        {
            user_id: 2,
            user_image: 'https://instagram.fsaw3-1.fna.fbcdn.net/v/t51.2885-19/244692226_282680550394602_6025779403371137870_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fsaw3-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=44-FvdYjgbEAX-_Szb0&tn=KRN-Xfh86jfLlR-R&edm=AHG7ALcBAAAA&ccb=7-5&oh=00_AT-KQ6eve8XlDWxugKoKkKeNXpL0MQA8otStTuK7-jQySQ&oe=62E9F2AF&_nc_sid=5cbaad',
            user_name: "bursaharunburak",
            stories: [
                {
                    story_id: 1,
                    story_image: "https://instagram.fsaw3-1.fna.fbcdn.net/v/t51.2885-15/279077000_165685705821499_5895923453112369210_n.jpg?stp=dst-jpg_e35_p480x480&cb=2d435ae8-326fec31&_nc_ht=instagram.fsaw3-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=BtEiHxT8K4wAX9Cy9zF&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjgyNDI5NzAxOTg3MzEwNzgzNw%3D%3D.2-ccb7-5&oh=00_AT9lNj4uAbiR08zxCV655qEHSsOkJIJwJhhNBdu8VBtbqw&oe=62E9EDB7&_nc_sid=30a2ef",
                    swipeText:'Custom swipe text for this story',
                    onPress: () => console.log('story 1 swiped'),
                },
                {
                    story_id: 2,
                    story_image: "https://instagram.fsaw3-1.fna.fbcdn.net/v/t51.2885-15/292416937_5489123251130525_92558065084481252_n.jpg?stp=dst-jpg_e35_p480x480&cb=2d435ae8-326fec31&_nc_ht=instagram.fsaw3-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=QHimw6BysywAX_tOLPN&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg3NzIwNjIxMTUxMjEwNjk2MA%3D%3D.2-ccb7-5&oh=00_AT_EY2hRn1fKwHMOvOTdShXjiuRX_XHXZmCu-UU30JkUkw&oe=62E9BFA7&_nc_sid=30a2ef",
                    swipeText:'Custom swipe text for this story',
                    onPress: () => console.log('story 2 swiped'),
                },
                {
                    story_id: 3,
                    story_image: "https://instagram.fsaw3-1.fna.fbcdn.net/v/t51.2885-15/292416937_5489123251130525_92558065084481252_n.jpg?stp=dst-jpg_e35_p480x480&cb=2d435ae8-326fec31&_nc_ht=instagram.fsaw3-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=QHimw6BysywAX_tOLPN&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg3NzIwNjIxMTUxMjEwNjk2MA%3D%3D.2-ccb7-5&oh=00_AT_EY2hRn1fKwHMOvOTdShXjiuRX_XHXZmCu-UU30JkUkw&oe=62E9BFA7&_nc_sid=30a2ef",
                    swipeText:'Custom swipe text for this story',
                    onPress: () => console.log('story 1 swiped'),
                },
            ]
        },
        {
            user_id: 1,
            user_image: 'https://instagram.fsaw3-1.fna.fbcdn.net/v/t51.2885-19/240936026_508945976807276_3878467107109739721_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fsaw3-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=tviEQGwQpCIAX-YR6pg&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AT9Ea9hI2ve_bZEoXmcwlla819vuOHsO-ywfSw1yM7z1ag&oe=62E9BFE7&_nc_sid=8fd12b',
            user_name: "ilhan.ers",
            stories: [
                {
                    story_id: 1,
                    story_image: "https://instagram.fsaw3-1.fna.fbcdn.net/v/t51.2885-15/292416937_5489123251130525_92558065084481252_n.jpg?stp=dst-jpg_e35_p480x480&cb=2d435ae8-326fec31&_nc_ht=instagram.fsaw3-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=QHimw6BysywAX_tOLPN&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg3NzIwNjIxMTUxMjEwNjk2MA%3D%3D.2-ccb7-5&oh=00_AT_EY2hRn1fKwHMOvOTdShXjiuRX_XHXZmCu-UU30JkUkw&oe=62E9BFA7&_nc_sid=30a2ef",
                    swipeText:'Custom swipe text for this story',
                    onPress: () => console.log('story 1 swiped'),
                },
                {
                    story_id: 2,
                    story_image: "https://instagram.fsaw3-1.fna.fbcdn.net/v/t51.2885-15/279077000_165685705821499_5895923453112369210_n.jpg?stp=dst-jpg_e35_p480x480&cb=2d435ae8-326fec31&_nc_ht=instagram.fsaw3-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=BtEiHxT8K4wAX9Cy9zF&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjgyNDI5NzAxOTg3MzEwNzgzNw%3D%3D.2-ccb7-5&oh=00_AT9lNj4uAbiR08zxCV655qEHSsOkJIJwJhhNBdu8VBtbqw&oe=62E9EDB7&_nc_sid=30a2ef",
                    wipeText:'Custom swipe text for this story',
                    onPress: () => console.log('story 1 swiped'),
                }]
        },
        {
            user_id: 2,
            user_image: 'https://instagram.fsaw3-1.fna.fbcdn.net/v/t51.2885-19/244692226_282680550394602_6025779403371137870_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fsaw3-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=44-FvdYjgbEAX-_Szb0&tn=KRN-Xfh86jfLlR-R&edm=AHG7ALcBAAAA&ccb=7-5&oh=00_AT-KQ6eve8XlDWxugKoKkKeNXpL0MQA8otStTuK7-jQySQ&oe=62E9F2AF&_nc_sid=5cbaad',
            user_name: "bursaharunburak",
            stories: [
                {
                    story_id: 1,
                    story_image: "https://instagram.fsaw3-1.fna.fbcdn.net/v/t51.2885-15/279077000_165685705821499_5895923453112369210_n.jpg?stp=dst-jpg_e35_p480x480&cb=2d435ae8-326fec31&_nc_ht=instagram.fsaw3-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=BtEiHxT8K4wAX9Cy9zF&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjgyNDI5NzAxOTg3MzEwNzgzNw%3D%3D.2-ccb7-5&oh=00_AT9lNj4uAbiR08zxCV655qEHSsOkJIJwJhhNBdu8VBtbqw&oe=62E9EDB7&_nc_sid=30a2ef",
                    swipeText:'Custom swipe text for this story',
                    onPress: () => console.log('story 1 swiped'),
                },
                {
                    story_id: 2,
                    story_image: "https://instagram.fsaw3-1.fna.fbcdn.net/v/t51.2885-15/292416937_5489123251130525_92558065084481252_n.jpg?stp=dst-jpg_e35_p480x480&cb=2d435ae8-326fec31&_nc_ht=instagram.fsaw3-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=QHimw6BysywAX_tOLPN&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg3NzIwNjIxMTUxMjEwNjk2MA%3D%3D.2-ccb7-5&oh=00_AT_EY2hRn1fKwHMOvOTdShXjiuRX_XHXZmCu-UU30JkUkw&oe=62E9BFA7&_nc_sid=30a2ef",
                    swipeText:'Custom swipe text for this story',
                    onPress: () => console.log('story 2 swiped'),
                },
                {
                    story_id: 3,
                    story_image: "https://instagram.fsaw3-1.fna.fbcdn.net/v/t51.2885-15/292416937_5489123251130525_92558065084481252_n.jpg?stp=dst-jpg_e35_p480x480&cb=2d435ae8-326fec31&_nc_ht=instagram.fsaw3-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=QHimw6BysywAX_tOLPN&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg3NzIwNjIxMTUxMjEwNjk2MA%3D%3D.2-ccb7-5&oh=00_AT_EY2hRn1fKwHMOvOTdShXjiuRX_XHXZmCu-UU30JkUkw&oe=62E9BFA7&_nc_sid=30a2ef",
                    swipeText:'Custom swipe text for this story',
                    onPress: () => console.log('story 1 swiped'),
                },
            ]
        },
        {
            user_id: 1,
            user_image: 'https://instagram.fsaw3-1.fna.fbcdn.net/v/t51.2885-19/240936026_508945976807276_3878467107109739721_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fsaw3-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=tviEQGwQpCIAX-YR6pg&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AT9Ea9hI2ve_bZEoXmcwlla819vuOHsO-ywfSw1yM7z1ag&oe=62E9BFE7&_nc_sid=8fd12b',
            user_name: "ilhan.ers",
            stories: [
                {
                    story_id: 1,
                    story_image: "https://instagram.fsaw3-1.fna.fbcdn.net/v/t51.2885-15/292416937_5489123251130525_92558065084481252_n.jpg?stp=dst-jpg_e35_p480x480&cb=2d435ae8-326fec31&_nc_ht=instagram.fsaw3-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=QHimw6BysywAX_tOLPN&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg3NzIwNjIxMTUxMjEwNjk2MA%3D%3D.2-ccb7-5&oh=00_AT_EY2hRn1fKwHMOvOTdShXjiuRX_XHXZmCu-UU30JkUkw&oe=62E9BFA7&_nc_sid=30a2ef",
                    swipeText:'Custom swipe text for this story',
                    onPress: () => console.log('story 1 swiped'),
                },
                {
                    story_id: 2,
                    story_image: "https://instagram.fsaw3-1.fna.fbcdn.net/v/t51.2885-15/279077000_165685705821499_5895923453112369210_n.jpg?stp=dst-jpg_e35_p480x480&cb=2d435ae8-326fec31&_nc_ht=instagram.fsaw3-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=BtEiHxT8K4wAX9Cy9zF&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjgyNDI5NzAxOTg3MzEwNzgzNw%3D%3D.2-ccb7-5&oh=00_AT9lNj4uAbiR08zxCV655qEHSsOkJIJwJhhNBdu8VBtbqw&oe=62E9EDB7&_nc_sid=30a2ef",
                    wipeText:'Custom swipe text for this story',
                    onPress: () => console.log('story 1 swiped'),
                }]
        },
        {
            user_id: 2,
            user_image: 'https://instagram.fsaw3-1.fna.fbcdn.net/v/t51.2885-19/244692226_282680550394602_6025779403371137870_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fsaw3-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=44-FvdYjgbEAX-_Szb0&tn=KRN-Xfh86jfLlR-R&edm=AHG7ALcBAAAA&ccb=7-5&oh=00_AT-KQ6eve8XlDWxugKoKkKeNXpL0MQA8otStTuK7-jQySQ&oe=62E9F2AF&_nc_sid=5cbaad',
            user_name: "bursaharunburak",
            stories: [
                {
                    story_id: 1,
                    story_image: "https://instagram.fsaw3-1.fna.fbcdn.net/v/t51.2885-15/279077000_165685705821499_5895923453112369210_n.jpg?stp=dst-jpg_e35_p480x480&cb=2d435ae8-326fec31&_nc_ht=instagram.fsaw3-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=BtEiHxT8K4wAX9Cy9zF&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjgyNDI5NzAxOTg3MzEwNzgzNw%3D%3D.2-ccb7-5&oh=00_AT9lNj4uAbiR08zxCV655qEHSsOkJIJwJhhNBdu8VBtbqw&oe=62E9EDB7&_nc_sid=30a2ef",
                    swipeText:'Custom swipe text for this story',
                    onPress: () => console.log('story 1 swiped'),
                },
                {
                    story_id: 2,
                    story_image: "https://instagram.fsaw3-1.fna.fbcdn.net/v/t51.2885-15/292416937_5489123251130525_92558065084481252_n.jpg?stp=dst-jpg_e35_p480x480&cb=2d435ae8-326fec31&_nc_ht=instagram.fsaw3-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=QHimw6BysywAX_tOLPN&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg3NzIwNjIxMTUxMjEwNjk2MA%3D%3D.2-ccb7-5&oh=00_AT_EY2hRn1fKwHMOvOTdShXjiuRX_XHXZmCu-UU30JkUkw&oe=62E9BFA7&_nc_sid=30a2ef",
                    swipeText:'Custom swipe text for this story',
                    onPress: () => console.log('story 2 swiped'),
                },
                {
                    story_id: 3,
                    story_image: "https://instagram.fsaw3-1.fna.fbcdn.net/v/t51.2885-15/292416937_5489123251130525_92558065084481252_n.jpg?stp=dst-jpg_e35_p480x480&cb=2d435ae8-326fec31&_nc_ht=instagram.fsaw3-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=QHimw6BysywAX_tOLPN&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg3NzIwNjIxMTUxMjEwNjk2MA%3D%3D.2-ccb7-5&oh=00_AT_EY2hRn1fKwHMOvOTdShXjiuRX_XHXZmCu-UU30JkUkw&oe=62E9BFA7&_nc_sid=30a2ef",
                    swipeText:'Custom swipe text for this story',
                    onPress: () => console.log('story 1 swiped'),
                },
            ]
        },
        {
            user_id: 1,
            user_image: 'https://instagram.fsaw3-1.fna.fbcdn.net/v/t51.2885-19/240936026_508945976807276_3878467107109739721_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fsaw3-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=tviEQGwQpCIAX-YR6pg&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AT9Ea9hI2ve_bZEoXmcwlla819vuOHsO-ywfSw1yM7z1ag&oe=62E9BFE7&_nc_sid=8fd12b',
            user_name: "ilhan.ers",
            stories: [
                {
                    story_id: 1,
                    story_image: "https://instagram.fsaw3-1.fna.fbcdn.net/v/t51.2885-15/292416937_5489123251130525_92558065084481252_n.jpg?stp=dst-jpg_e35_p480x480&cb=2d435ae8-326fec31&_nc_ht=instagram.fsaw3-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=QHimw6BysywAX_tOLPN&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg3NzIwNjIxMTUxMjEwNjk2MA%3D%3D.2-ccb7-5&oh=00_AT_EY2hRn1fKwHMOvOTdShXjiuRX_XHXZmCu-UU30JkUkw&oe=62E9BFA7&_nc_sid=30a2ef",
                    swipeText:'Custom swipe text for this story',
                    onPress: () => console.log('story 1 swiped'),
                },
                {
                    story_id: 2,
                    story_image: "https://instagram.fsaw3-1.fna.fbcdn.net/v/t51.2885-15/279077000_165685705821499_5895923453112369210_n.jpg?stp=dst-jpg_e35_p480x480&cb=2d435ae8-326fec31&_nc_ht=instagram.fsaw3-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=BtEiHxT8K4wAX9Cy9zF&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjgyNDI5NzAxOTg3MzEwNzgzNw%3D%3D.2-ccb7-5&oh=00_AT9lNj4uAbiR08zxCV655qEHSsOkJIJwJhhNBdu8VBtbqw&oe=62E9EDB7&_nc_sid=30a2ef",
                    wipeText:'Custom swipe text for this story',
                    onPress: () => console.log('story 1 swiped'),
                }]
        },
        {
            user_id: 2,
            user_image: 'https://instagram.fsaw3-1.fna.fbcdn.net/v/t51.2885-19/244692226_282680550394602_6025779403371137870_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fsaw3-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=44-FvdYjgbEAX-_Szb0&tn=KRN-Xfh86jfLlR-R&edm=AHG7ALcBAAAA&ccb=7-5&oh=00_AT-KQ6eve8XlDWxugKoKkKeNXpL0MQA8otStTuK7-jQySQ&oe=62E9F2AF&_nc_sid=5cbaad',
            user_name: "bursaharunburak",
            stories: [
                {
                    story_id: 1,
                    story_image: "https://instagram.fsaw3-1.fna.fbcdn.net/v/t51.2885-15/279077000_165685705821499_5895923453112369210_n.jpg?stp=dst-jpg_e35_p480x480&cb=2d435ae8-326fec31&_nc_ht=instagram.fsaw3-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=BtEiHxT8K4wAX9Cy9zF&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjgyNDI5NzAxOTg3MzEwNzgzNw%3D%3D.2-ccb7-5&oh=00_AT9lNj4uAbiR08zxCV655qEHSsOkJIJwJhhNBdu8VBtbqw&oe=62E9EDB7&_nc_sid=30a2ef",
                    swipeText:'Custom swipe text for this story',
                    onPress: () => console.log('story 1 swiped'),
                },
                {
                    story_id: 2,
                    story_image: "https://instagram.fsaw3-1.fna.fbcdn.net/v/t51.2885-15/292416937_5489123251130525_92558065084481252_n.jpg?stp=dst-jpg_e35_p480x480&cb=2d435ae8-326fec31&_nc_ht=instagram.fsaw3-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=QHimw6BysywAX_tOLPN&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg3NzIwNjIxMTUxMjEwNjk2MA%3D%3D.2-ccb7-5&oh=00_AT_EY2hRn1fKwHMOvOTdShXjiuRX_XHXZmCu-UU30JkUkw&oe=62E9BFA7&_nc_sid=30a2ef",
                    swipeText:'Custom swipe text for this story',
                    onPress: () => console.log('story 2 swiped'),
                },
                {
                    story_id: 3,
                    story_image: "https://instagram.fsaw3-1.fna.fbcdn.net/v/t51.2885-15/292416937_5489123251130525_92558065084481252_n.jpg?stp=dst-jpg_e35_p480x480&cb=2d435ae8-326fec31&_nc_ht=instagram.fsaw3-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=QHimw6BysywAX_tOLPN&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg3NzIwNjIxMTUxMjEwNjk2MA%3D%3D.2-ccb7-5&oh=00_AT_EY2hRn1fKwHMOvOTdShXjiuRX_XHXZmCu-UU30JkUkw&oe=62E9BFA7&_nc_sid=30a2ef",
                    swipeText:'Custom swipe text for this story',
                    onPress: () => console.log('story 1 swiped'),
                },
            ]
        },
        
    ];

    return (
        <>
            <BottomSheet hasDraggableIcon ref={bottomSheet} height={'400'}>
                <View style={{width:'100%',backgroundColor:'red',height:100,marginTop:10}}>
                    
                </View>
            </BottomSheet>

            <Swiper index={index} loop={false} showsPagination={false} style={{paddingTop:30, backgroundColor:'#fff'}}>
                <View>
                    <Header />
                    <ScrollView style={{height:'100%'}}>
                        {!true 
                            ? 
                            <Stories />
                            :
                            <InstaStory data={data}
                                duration={10}
                                onStart={item => console.log(item)}
                                onClose={item => console.log('close: ', item)}
                                customSwipeUpComponent={<BottomComponent />}
                            />}

                        {posts.map((post) => <Post bottomSheet={bottomSheet} navigation={navigation} setShowComments={setShowComments} post={post} /> )}
                    </ScrollView>
                </View>

                <View>
                    <DirectMessage />
                </View>

            </Swiper> 
        </>
    );


}

export default HomeScreen;


const BottomComponent = () => {

    return(
        <View style={styles.bottomComponent}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.sendMessage} placeholder="Search" placeholderTextColor="#fff" />
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity style={{marginLeft:10}}>
                        <HearthReels size={24} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft:10}}>
                        <MessageReels size={24} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    ) 
}

const styles = StyleSheet.create({
    storyContainer: {
        flexDirection:'column'
    },
    story: {
       width:65,
       height:65,
       borderRadius:30,
       flexDirection:'column',
       alignItems:'center',
       justifyContent:'center',
       marginRight:30
   },
   bottomComponent: {
       backgroundColor:'black',
       position:'absolute',
       top:-40,
       height:300,
       width:'100%'
   },
   sendMessage: {
        width:'75%',
        borderWidth:1,
        borderColor:'#fff',
        height:40,
        borderRadius:21,
        padding:10,
        color:'#fff'
   },
   inputContainer: {
       padding:10,
       flexDirection:'row',
       alignItems:'center'
   },
   bottomSheet: {
     width:'100%'
   }
});
