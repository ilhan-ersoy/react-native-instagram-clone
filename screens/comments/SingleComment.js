import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { TextInput, Image } from "react-native";
import { Touchable } from "react-native";
import { ScrollView } from "react-native";
import { Hearth, More, Comment, Message, BookMark, DropDown, LeftArrow, Plus, SinglePlus } from "../../Icons";
import { LinearGradient } from 'expo-linear-gradient';
import { faker } from "@faker-js/faker";


const SingleComment = ({ likesCount, timestamp }) => {
    return (
        <View style={[styles.top, { alignItems: 'center', justifyContent: 'space-between' }]}>
            <View style={{ flexDirection: 'row' }}>
                <Image
                    style={[styles.userAvatar, { borderWidth: 1, borderColor: '#DADADA' }]}
                    source={{
                        uri: faker.internet.avatar(),
                    }}
                />
                <View style={{ alignItems: 'center', marginLeft: 10 }}>
                    <View>
                        <Text style={{ maxWidth: 230 }}>
                            <Text style={{ fontWeight: 'bold' }}>{faker.internet.userName() + ' '}</Text>

                            <Text>
                                {'Lorem lipsum dolar min it.'}
                            </Text>
                        </Text>
                    </View>
                    <View style={{ alignSelf: 'flex-start', marginTop: 4, flexDirection: 'row' }}>
                        <Text style={{ fontSize: 13, fontWeight: '500', opacity: 0.5 }}>{timestamp}m</Text>
                        <Text style={{ fontSize: 13, fontWeight: '500', opacity: 0.5, marginLeft: 10 }}>{likesCount} likes</Text>
                        <Text style={{ fontSize: 13, fontWeight: '500', opacity: 0.5, marginLeft: 10 }}>Reply</Text>
                        <Text style={{ fontSize: 13, fontWeight: '500', opacity: 0.5, marginLeft: 10 }}>Send</Text>
                    </View>
                </View>
            </View>
            <View style={{ opacity: 0.5, paddingRight: 10 }}>
                <Hearth size={12} />
            </View>
        </View>
    )
}

export default SingleComment;


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