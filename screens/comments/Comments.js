import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { TextInput, Image } from "react-native";
import { Touchable } from "react-native";
import { ScrollView } from "react-native";
import { Hearth, More, Comment, Message, BookMark, DropDown, LeftArrow, Plus, SinglePlus } from "../../Icons";
import { LinearGradient } from 'expo-linear-gradient';
import SingleComment from "./SingleComment";
import { faker } from "@faker-js/faker";
import React from "react";


const CommentsScreen = ({ setShowComments, navigation }) => {
    return (
        <View style={{ paddingTop: 30, backgroundColor: '#fff', height: '100%' }}>
            <View style={styles.header}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 18 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                            <LeftArrow color={'#000'} size={24} />
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'column', marginLeft: 25 }}>
                            <Text>
                                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Comments</Text>
                            </Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Message size={28} />
                    </View>
                </View>
                <View style={{ paddingHorizontal: 18 }}>
                    <View style={{ width: '100%', paddingBottom: 10 }}>
                        <View style={styles.top}>
                            <LinearGradient
                                style={styles.story}
                                colors={['#DE0046', '#F7A34B']}>
                                <Image
                                    style={styles.userAvatar}
                                    source={{
                                        // https://freesvg.org/img/abstract-user-flat-4.png
                                        uri: 'https://a9p9n2x2.stackpathcdn.com/wp-content/blogs.dir/1/files/2020/05/Mark-Zuckerberg-e1590173646243-960x722.jpg',
                                    }}
                                />
                            </LinearGradient>
                            <View style={{ alignItems: 'center', marginLeft: 10 }}>
                                <View>
                                    <Text style={{ maxWidth: 250 }}>
                                        <Text style={{ fontWeight: 'bold' }}>{'zuck' + ' '}</Text>

                                        <Text>
                                            Lorem ipsum dolor sit.sum dolor sitsum dolor sitsum dolor sit
                                        </Text>
                                    </Text>
                                </View>
                                <View style={{ alignSelf: 'flex-start', marginTop: 4 }}>
                                    <Text style={{ fontSize: 13, opacity: 0.5 }}>7h</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ borderBottomColor: '#DADADA', borderBottomWidth: 1 }} />
            </View>
            <ScrollView style={{ height: '100%' }}>
                <View style={styles.body}>
                    <View>
                        {Array.from(Array(10), (_, i) => <SingleComment key={i} likesCount={12} timestamp={1} />)}
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default CommentsScreen;


const styles = StyleSheet.create({
    header: {
        paddingTop: 6
    },
    body: {
        paddingHorizontal: 18
    },
    story: {
        width: 50,
        height: 50,
        borderRadius: 30,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    userAvatar: {
        width: 45,
        height: 45,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 60
    },
    top: {
        flexDirection: 'row',
        marginTop: 13
    }
});