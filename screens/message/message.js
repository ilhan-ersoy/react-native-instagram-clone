import { View } from "react-native"
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { StyleSheet, ScrollView, TextInput, Text, RefreshControl, TouchableOpacity } from 'react-native';
import { SafeAreaView, Image } from "react-native";
import { LeftArrow, DropDown, Plus, SinglePlus, DmSearch, Call, VideoCall, ReelsFilled, ReelsFillWhite, Microphone, Images, Sticker, Camera, Search } from "../../Icons";
import { faker } from "@faker-js/faker";
import BottomSheet from "react-native-gesture-bottom-sheet";
import { StickerComponent } from "./StickerComponent";

const MessageScreen = ({ route, navigation }) => {

    const bottomSheet = useRef();
    const [message, setMessage] = useState();
    const [messages, setMessages] = useState(['Node']);

    const addMessage = (e) => {
        setMessages(prevMessage => [...prevMessage, message])
    }
    const gifContainer = useRef();


    return (
        <SafeAreaView style={styles.container}>
            <BottomSheet hasDraggableIcon ref={bottomSheet} height={'700'}>
                <View style={{ flex: 1, paddingHorizontal: 10, marginTop: 10 }}>
                    <View style={{ position: 'absolute', left: 20, top: 6 }}>
                        <View style={{ opacity: 0.4 }}>
                            <Search size={18} />
                        </View>
                    </View>
                    <TextInput style={{ width: '100%', borderWidth: 1, borderColor: '#dbdbdb', height: 31, borderRadius: 5, padding: 6, fontWeight: '500' }} placeholderTextColor="#aeadad" placeholder="        Search GIPHY stickers" />
                    <View ref={gifContainer}>
                        <ScrollView style={{ height: '100%' }} showsVerticalScrollIndicator={true}>
                            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                                <Image
                                    source={{ uri: 'https://ohiofi.com/assets/nyan.gif' }}
                                    style={{ width: 120, height: 120 }}
                                />
                                <Image
                                    source={{ uri: 'https://ohiofi.com/assets/mario.gif' }}
                                    style={{ width: 120, height: 120 }}
                                />
                                <Image
                                    source={{ uri: 'https://i.gifer.com/embedded/download/7H52.gif' }}
                                    style={{ width: 120, height: 120 }}
                                />
                            </View>
                            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', marginTop: 2 }}>
                                <Image
                                    source={{ uri: 'https://media.tenor.com/ummvdDD9OdcAAAAM/bunny-happy-dance.gif' }}
                                    style={{ width: 120, height: 120 }}
                                />
                                <Image
                                    source={{ uri: 'https://i.gifer.com/embedded/download/7H52.gif' }}
                                    style={{ width: 120, height: 120 }}
                                />
                                <Image
                                    source={{ uri: 'https://ohiofi.com/assets/mario.gif' }}
                                    style={{ width: 120, height: 120 }}
                                />
                            </View>
                            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', marginTop: 2 }}>
                                <Image
                                    source={{ uri: 'https://media.tenor.com/ummvdDD9OdcAAAAM/bunny-happy-dance.gif' }}
                                    style={{ width: 120, height: 120 }}
                                />
                                <Image
                                    source={{ uri: 'https://i.gifer.com/embedded/download/7H52.gif' }}
                                    style={{ width: 120, height: 120 }}
                                />
                                <Image
                                    source={{ uri: 'https://ohiofi.com/assets/mario.gif' }}
                                    style={{ width: 120, height: 120 }}
                                />
                            </View>
                            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                                <Image
                                    source={{ uri: 'https://ohiofi.com/assets/nyan.gif' }}
                                    style={{ width: 120, height: 120 }}
                                />
                                <Image
                                    source={{ uri: 'https://ohiofi.com/assets/mario.gif' }}
                                    style={{ width: 120, height: 120 }}
                                />
                                <Image
                                    source={{ uri: 'https://i.gifer.com/embedded/download/7H52.gif' }}
                                    style={{ width: 120, height: 120 }}
                                />
                            </View>
                            <View style={{ width: '100%', height: 100, flexDirection: 'column', justifyContent: 'center', }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 75 }}>
                                    <TouchableOpacity activeOpacity={0.7}>
                                        <Sticker size={36} />
                                    </TouchableOpacity>
                                    <TouchableOpacity activeOpacity={0.7}>
                                        <Sticker size={36} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </BottomSheet>

            <View style={styles.header}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                            <LeftArrow size={24} color={'#000'} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            style={[styles.avatar, { marginLeft: 20 }]}
                            source={{
                                uri: faker.internet.avatar(),
                            }}
                        />
                        <View style={{ marginLeft: 15, alignItems: 'flex-start' }}>
                            <Text style={{ fontWeight: '700', fontSize: 14 }}>{faker.name.firstName() + ' ' + faker.name.lastName()}</Text>
                            <Text style={{ fontWeight: '300', opacity: 0.4, fontSize: 12, marginTop: 6 }}>{faker.internet.userName()}</Text>
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
                    <View style={{ marginRight: 22 }}>
                        <Call size={28} />
                    </View>
                    <View>
                        <VideoCall size={28} />
                    </View>
                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} style={{ height: '100%' }}>
                <View style={{ height: '100%', paddingHorizontal: 15 }}>
                    <View style={{ alignSelf: 'flex-start' }}>
                        <Image
                            style={{ width: 200, height: 400, borderRadius: 30 }}
                            source={{
                                uri: faker.image.sports(200, 400, true)
                            }}
                        />
                        <View style={{ position: 'absolute', right: 10, top: 10 }}>
                            <ReelsFillWhite size={36} />
                        </View>
                        <View style={{ position: 'absolute', right: 50, bottom: 10 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image style={{ width: 30, height: 30, borderRadius: 100 }} source={{
                                    uri: faker.image.sports(200, 400, true)
                                }} />
                                <Text style={{ fontWeight: '600', color: '#fff', marginLeft: 10, fontSize: 18 }}>postsinsta</Text>
                            </View>
                        </View>
                        <View style={styles.sendedReaction}>
                            <Text>
                                😂
                            </Text>
                        </View>
                    </View>

                    <View style={{ alignSelf: 'flex-end', marginVertical: 10 }}>
                        <View style={styles.post}>
                            <View style={styles.postHeader}>
                                <Image
                                    style={{ width: 42, height: 42, borderRadius: 100 }}
                                    source={{ uri: faker.image.avatar(200, 400, true) }} />

                                <Text style={{ marginLeft: 6 }}>instapage</Text>
                            </View>

                            <Image style={{ height: 250 }} source={{ uri: faker.image.abstract() }} />

                            <View style={[styles.bottom]}>
                                <Text style={{ fontWeight: '500' }}>
                                    insta page
                                </Text>
                                <Text style={{ fontSize: 12, marginLeft: 10 }}>
                                    Şifa Deposu.
                                </Text>
                            </View>
                        </View>

                        <View style={styles.receivedReaction}>
                            <Text>
                                😂
                            </Text>
                        </View>

                    </View>

                    <View style={{ alignSelf: 'flex-start' }}>
                        <View style={{ backgroundColor: '#3c4ad4', padding: 13, borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontWeight: '600', color: '#fff' }}>wow !</Text>
                        </View>
                    </View>

                    <View style={{ alignSelf: 'flex-end', marginVertical: 10 }}>
                        <View style={styles.post}>
                            <View style={styles.postHeader}>
                                <Image
                                    style={{ width: 42, height: 42, borderRadius: 100 }}
                                    source={{ uri: faker.image.avatar(200, 400, true) }} />

                                <Text style={{ marginLeft: 6 }}>instapage</Text>
                            </View>

                            <Image style={{ height: 250 }} source={{ uri: faker.image.abstract() }} />

                            <View style={[styles.bottom]}>
                                <Text style={{ fontWeight: '500' }}>
                                    instapage
                                </Text>
                                <Text style={{ fontSize: 12, marginLeft: 10 }}>
                                    Şifa Deposu.
                                </Text>
                            </View>
                        </View>

                        <View style={styles.receivedReaction}>
                            <Text>
                                😂
                            </Text>
                        </View>

                    </View>

                    <View style={{ alignSelf: 'flex-start', marginVertical: 10 }}>
                        <View style={{ backgroundColor: '#3c4ad4', padding: 13, borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontWeight: '600', color: '#fff' }}>LOL !</Text>
                        </View>
                    </View>

                    <View style={{ alignSelf: 'flex-start' }}>
                        <Image
                            style={{ width: 200, height: 400, borderRadius: 30 }}
                            source={{
                                uri: faker.image.sports(200, 400, true)
                            }}
                        />
                        <View style={{ position: 'absolute', right: 10, top: 10 }}>
                            <ReelsFillWhite size={36} />
                        </View>
                        <View style={{ position: 'absolute', right: 50, bottom: 10 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image style={{ width: 30, height: 30, borderRadius: 100 }} source={{
                                    uri: faker.image.sports(200, 400, true)
                                }} />
                                <Text style={{ fontWeight: '600', color: '#fff', marginLeft: 10, fontSize: 18 }}>postsinsta</Text>
                            </View>
                        </View>
                        <View style={styles.sendedReaction}>
                            <Text>
                                😂
                            </Text>
                        </View>
                    </View>

                    <View style={{ alignSelf: 'flex-end' }}>
                        {messages.map((message, index) => (
                            <View key={index} style={{ backgroundColor: '#3c4ad4', padding: 13, borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontWeight: '500', color: '#fff' }}>{message}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>


            <View style={{ marginHorizontal: 4, marginBottom: 2 }}>
                <View style={styles.sendMessage}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ width: 40, height: 40, flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ backgroundColor: '#3c4ad4', width: 40, height: 40, borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
                                <TouchableOpacity>
                                    <Camera size={24} />
                                </TouchableOpacity>
                            </View>
                            <TextInput onChangeText={(e) => setMessage(e)} value={message} style={{ height: 50, width: 300, marginLeft: 10 }} placeholder="Message" placeholderTextColor="#000" />
                        </View>
                        {message
                            ?
                            <TouchableOpacity opacity={0.6} onPress={() => addMessage()}>
                                <View>
                                    <Text style={{ fontWeight: '600', color: "#0095f6Se" }}>
                                        Send
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            :
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <TouchableOpacity>
                                    <Microphone size={24} />
                                </TouchableOpacity>

                                <TouchableOpacity style={{ marginLeft: 10 }}>
                                    <Images size={24} />
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => bottomSheet.current.show()} style={{ marginLeft: 10 }}>
                                    <Sticker size={24} />
                                </TouchableOpacity>
                            </View>
                        }

                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default MessageScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    avatar: {
        width: 38,
        height: 38,
        borderRadius: 100
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 20
    },
    post: {
        alignSelf: 'flex-end',
        width: 200,
        borderRadius: 24,
        flexDirection: 'column',
        backgroundColor: '#efefef',
    },
    postHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 18,
        paddingVertical: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    bottom: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#efefef',
        paddingHorizontal: 12,
        paddingVertical: 6,
        height: 50,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    receivedReaction: {
        position: 'absolute',
        bottom: -10,
        right: -5,
        borderRadius: 100,
        backgroundColor: '#efefef',
        padding: 4,
        borderWidth: 2,
        borderColor: '#fff'
    },
    sendedReaction: {
        position: 'absolute',
        bottom: -10,
        left: -5,
        borderRadius: 100,
        backgroundColor: '#efefef',
        padding: 4,
        borderWidth: 2,
        borderColor: '#fff'
    },
    sendMessage: {
        backgroundColor: '#efefef',
        height: 55,
        borderRadius: 50,
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    gifsContainer: {

    }
});

