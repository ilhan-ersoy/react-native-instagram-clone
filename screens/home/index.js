import { View } from "react-native"
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { StyleSheet, ScrollView, TextInput, Text, RefreshControl, AppRegistry } from 'react-native';
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
import PostMore from "./components/BottomSheets/PostMore";
import SendStory from "./components/InstaStory/SendStory";
import { faker } from "@faker-js/faker";
import Snap from "../snap/Snap";



const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

const HomeScreen = ({ navigation }) => {

    const [index, setIndex] = useState(0);
    const [showComments, setShowComments] = useState(false);
    const homeOpacity = useSelector(state => state.app.homeOpacity);
    const bottomSheet = useRef();

    const data = [
        {
            user_image: 'https://pps.whatsapp.net/v/t61.24694-24/160010280_136974141658152_1790592786303292064_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AVxPD6SPv7F5Gxun4Nk-3mwvYJzp3F0kPr538J3rY9ra2Q&oe=62F8A793',
            user_name: "ilhan.ers",
            stories: [
                {
                    story_image: "https://pps.whatsapp.net/v/t61.24694-24/160010280_136974141658152_1790592786303292064_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AVxPD6SPv7F5Gxun4Nk-3mwvYJzp3F0kPr538J3rY9ra2Q&oe=62F8A793",
                    swipeText: 'Custom swipe text for this story',
                    onPress: () => console.log('story 1 swiped'),
                },
                {
                    story_image: "https://pps.whatsapp.net/v/t61.24694-24/160010280_136974141658152_1790592786303292064_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AVxPD6SPv7F5Gxun4Nk-3mwvYJzp3F0kPr538J3rY9ra2Q&oe=62F8A793",
                    wipeText: 'Custom swipe text for this story',
                    onPress: () => console.log('story 1 swiped'),
                }]
        }
    ];

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => { setRefreshing(false) });
    }, []);

    const testData = new Array(10).fill(
        {
            user_image: faker.image.image(300, 400, true),
            user_name: faker.internet.userName(),
            stories: [
                {
                    story_image: faker.image.abstract(1200, 1200, true),
                    swipeText: 'Custom swipe text for this story',
                    onPress: () => console.log('story 1 swiped'),
                },
                {
                    story_image: faker.image.abstract(1200, 1200, true),
                    wipeText: 'Custom swipe text for this story',
                    onPress: () => console.log('story 1 swiped'),
                }]
        }
    )


    return (
        <>
            <BottomSheet hasDraggableIcon ref={bottomSheet} height={'400'}>
                <PostMore />
            </BottomSheet>

            <Swiper index={index} loop={false} showsPagination={false} style={{ paddingTop: 30, backgroundColor: '#fff' }}>
                <View>
                    <Header />
                    <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />} style={{ height: '100%' }}>
                        <InstaStory data={testData}
                            duration={10}
                            onStart={item => console.log(item)}
                            onClose={item => console.log('close: ', item)}
                            customSwipeUpComponent={<BottomComponent />}
                        />
                        {posts.map((post) => <Post bottomSheet={bottomSheet} navigation={navigation} setShowComments={setShowComments} post={post} />)}
                    </ScrollView>
                </View>

                <View>
                    <DirectMessage setIndex={setIndex} navigation={navigation} />
                </View>

            </Swiper>

            {false && <View style={{ backgroundColor: 'black', position: 'absolute', height: '100%', width: '100%', opacity: 0.4 }} />}

        </>
    );
}

export default HomeScreen;

const BottomComponent = () => {

    const sendStory = useRef();

    return (

        <View style={styles.bottomComponent}>
            <BottomSheet hasDraggableIcon ref={sendStory} height={'610'}>
                <SendStory />
            </BottomSheet>
            <View style={styles.inputContainer}>
                <TextInput style={styles.sendMessage} placeholder="Search" placeholderTextColor="#fff" />
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={{ marginLeft: 10 }}>
                        <HearthReels size={26} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => sendStory.current.show()} style={{ marginLeft: 20 }}>
                        <MessageReels size={26} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    storyContainer: {
        flexDirection: 'column'
    },
    story: {
        width: 65,
        height: 65,
        borderRadius: 30,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 30
    },
    bottomComponent: {
        backgroundColor: 'black',
        position: 'absolute',
        top: -40,
        height: 300,
        width: '100%'
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
    inputContainer: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    bottomSheet: {
        width: '100%'
    }
});