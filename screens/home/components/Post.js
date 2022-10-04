import { useState, useRef } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TextInput, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import BottomSheet from "react-native-gesture-bottom-sheet";
import { Hearth, More, Comment, Message, BookMark, Verified, HearthLike } from "../../../Icons";
import Swiper, { scrollTo } from 'react-native-swiper';
import SendStory from "./InstaStory/SendStory";
import DoubleClick from "react-native-double-tap";
import { setHomeOpacity } from "../../../redux/appSlice";
import { faker } from "@faker-js/faker";

const Post = ({ post, setShowComments, navigation, bottomSheet }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const dispatch = useDispatch();

    const postBottomSheet = useRef();

    const homeOpacity = useSelector(state => state.app.homeOpacity);


    const [showHeart, setShowHeart] = useState(false);

    const handleLike = () => {
        setShowHeart(true);
        setTimeout(() => {
            setShowHeart(false);
        }, 1000);

    }

    const [sendShort, setSendShort] = useState(true);

    return (

        <View key={post.id}>
            <View style={[styles.header]}>
                <View style={styles.user}>
                    <Image
                        style={styles.avatar}
                        source={{
                            uri: faker.image.people()
                        }}
                    />
                    <TouchableOpacity onPress={() => navigation.navigate('OtherProfile')} opacity={0.8}>
                        <Text style={{ fontSize: 12, fontWeight: 'bold', marginLeft: 5 }}>{post.user.name}</Text>
                    </TouchableOpacity>
                    {post.user.isVerified && <View style={{ marginLeft: 2 }}>
                        <Verified size={15} />
                    </View>}
                </View>
                <TouchableOpacity style={{ height: 40, width: 40, alignItems: 'center', justifyContent: 'center' }} onPress={() => bottomSheet.current.show()}>
                    <More width={22} />
                </TouchableOpacity>
            </View>

            <View style={{ position: 'absolute', top: '30%', right: '40%', zIndex: 999, opacity: 0 }}>
                <HearthLike size={64} />
            </View>

            <Swiper onIndexChanged={(e) => setCurrentIndex(e)} loop={false} showsPagination={false} style={{ height: 350 }}>
                <View>
                    <DoubleClick
                        singleTap={() => {
                            console.log("single tap");
                        }}
                        doubleTap={() => handleLike()}
                        delay={200}
                    >
                        <Image
                            style={styles.postImage}
                            source={{
                                uri: faker.image.food()
                            }}
                        />
                    </DoubleClick>
                </View>

                <View>
                    <DoubleClick
                        singleTap={() => {
                            console.log("single tap");
                        }}
                        doubleTap={() => handleLike()}
                        delay={200}
                    >
                        <Image
                            style={styles.postImage}
                            source={{
                                uri: faker.image.food()
                            }}
                        />
                    </DoubleClick>
                </View>

                <View>
                    <DoubleClick
                        singleTap={() => {
                            console.log("single tap");
                        }}
                        doubleTap={() => handleLike()}
                        delay={200}
                    >
                    </DoubleClick>
                </View>

            </Swiper>
            <View>

            </View>



            <View style={styles.postInfo}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View>
                        <Hearth size={24} />
                    </View>

                    <View style={{ marginLeft: 12 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Comments')}>
                            <Comment size={24} />
                        </TouchableOpacity>
                    </View>

                    {homeOpacity &&
                        <View style={{ width: 234, height: 60, backgroundColor: '#fff', zIndex: 999, position: 'absolute', bottom: 35, left: 50, borderRadius: 100, flexDirection: 'row', justifyContent: 'center', borderWidth: 2, borderColor: '#efefef' }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', justifyContent: 'center' }}>
                                <Image
                                    style={{ width: 44, height: 44, borderRadius: 100, borderWidth: 1, borderColor: '#CACACA' }}
                                    source={{
                                        uri: post.user.avatarImg,
                                    }}
                                />

                                {new Array(3).fill(
                                    <Image
                                        style={{ width: 44, height: 44, borderRadius: 100, marginLeft: 13, borderWidth: 1, borderColor: '#CACACA' }}
                                        source={{
                                            uri: faker.image.people(),
                                        }} />
                                )}

                            </View>
                        </View>
                    }

                    <TouchableOpacity onLongPress={() => dispatch(setHomeOpacity(true))} onPressOut={() => dispatch(setHomeOpacity(false))} onPress={() => postBottomSheet.current.show()} style={{ marginLeft: 12 }}>
                        <Message size={24} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginRight: 50 }}>
                    <TouchableOpacity opacity={1} style={{ width: 8, height: 8, backgroundColor: `${currentIndex == 0 ? '#32B5FF' : '#C4C4C4'}`, borderRadius: 21 }}></TouchableOpacity>
                    <TouchableOpacity opacity={1} style={{ width: 8, height: 8, backgroundColor: `${currentIndex == 1 ? '#32B5FF' : '#C4C4C4'}`, borderRadius: 21, marginLeft: 6 }}></TouchableOpacity>
                    <TouchableOpacity opacity={1} style={{ width: 8, height: 8, backgroundColor: `${currentIndex == 2 ? '#32B5FF' : '#C4C4C4'}`, borderRadius: 21, marginLeft: 6 }}></TouchableOpacity>
                </View>
                <View>
                    <BookMark size={24} />
                </View>
            </View>
            <View style={{ paddingHorizontal: 10 }}>
                {false ? <Text style={{ fontWeight: 'bold', fontSize: 13 }}>
                    {post.likes} likes
                </Text> :
                    <View style={{ flexDirection: 'row', fontSize: 13, alignItems: 'center' }}>
                        <Image
                            style={{ width: 25, height: 25, borderRadius: 21, borderWidth: 1, borderColor: '#CACACA' }}
                            source={{
                                uri: post.user.avatarImg,
                            }}
                        />
                        <Text style={{ marginLeft: 8, fontSize: 13 }}>
                            Liked by <Text style={{ fontWeight: 'bold' }}>ilhan_ers</Text> and <Text style={{ fontWeight: 'bold' }}>105 others</Text>
                        </Text>
                    </View>}
            </View>
            <View style={styles.content}>
                <TouchableOpacity>
                    <Text>
                        <Text style={{ fontWeight: 'bold' }}>{post.user.name + ' '}</Text>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <Text style={{ opacity: 0.4 }}>...</Text>
                        </Text>
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.comments} >
                </TouchableOpacity>
            </View>
            <View style={styles.addComment}>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        style={styles.commentAvatar}
                        source={{
                            uri: post.user.avatarImg,
                        }}
                    />
                    <TextInput style={[styles.emailInput, { justifyContent: 'flex-start', marginLeft: 10 }]} placeholder="Add comment..." />
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontSize: 24 }}>😍</Text>
                    <Text style={{ fontSize: 24 }}>😭</Text>
                    <View style={styles.addEmoji}>
                        <Text style={{ opacity: 0.4, fontSize: 16 }}>+</Text>
                    </View>
                </View>
            </View>



            <BottomSheet hasDraggableIcon ref={postBottomSheet} height={'400'}>
                <SendStory img={post.postImg} />
            </BottomSheet>

        </View>
        //</ScrollView>
    )

}

export default Post;


const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
        height: 49
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 21,
    },
    user: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    postImage: {
        width: '100%',
        height: 350
    },
    postInfo: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        padding: 12,
        paddingHorizontal: 10,
        alignItems: 'center'
    },
    content: {
        marginTop: 8,
        paddingHorizontal: 10
    },
    comments: {
        marginTop: 8,
    },
    addComment: {
        flexDirection: 'row',
        paddingHorizontal: 13,
        justifyContent: 'space-between',
        paddingVertical: 17
    },
    commentAvatar: {
        width: 30,
        height: 30,
        borderRadius: 21
    },
    addEmoji: {
        borderWidth: 1,
        borderColor: '#999999',
        borderRadius: 21,
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    likesAvatar: {
        width: 8,
        height: 8,
        borderRadius: 21
    }
});
