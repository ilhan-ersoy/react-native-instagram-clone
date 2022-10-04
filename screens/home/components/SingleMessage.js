import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { TextInput, Image } from "react-native";
import { Touchable } from "react-native";
import { ScrollView } from "react-native";
import { Hearth, More, Comment, Message, BookMark, DropDown, LeftArrow, Plus, SinglePlus, DmSearch, Mute, DmMute } from "../../../Icons";
import { faker } from "@faker-js/faker";



const SingleMessage = ({ navigation }) => {


    return (
        <TouchableOpacity onPress={() => navigation.navigate('Message')}>
            <View style={styles.messageContainer}>
                <View style={styles.message}>
                    <Image
                        style={styles.userImg}
                        source={{
                            uri: faker.image.avatar()
                        }}
                    />
                    <View style={{ marginLeft: 15 }}>
                        <Text style={{ fontWeight: '500' }}>{faker.internet.userName() + ' '}</Text>
                        <View style={{ marginTop: 4, flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontWeight: '600' }}>
                                {faker.datatype.number({ 'min': 1, 'max': 4 })}
                            </Text>

                            <Text style={{ fontWeight: '600', marginLeft: 5 }}>
                                new messages
                            </Text>

                            <View style={{ width: 3, height: 3, backgroundColor: 'black', borderRadius: 21, marginLeft: 6 }} />

                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ marginLeft: 5 }}>
                                    {faker.datatype.number({ 'min': 1, 'max': 30 })}
                                </Text>
                                {faker.datatype.boolean() && <View style={{ opacity: 1, marginLeft: 6 }}>
                                    <DmMute size={16} />
                                </View>}
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 5 }}>
                    {faker.datatype.boolean() && <View style={{ width: 8, height: 8, backgroundColor: '#2b96f6', borderRadius: 21, marginRight: 20 }} />}
                    <Image style={{ width: 24, height: 24 }} source={{ uri: 'https://img.icons8.com/material-rounded/2x/camera.png' }} />
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default SingleMessage;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 18,
        height: '100%',
        backgroundColor: '#fff',
    },
    searchInput: {
        backgroundColor: '#efefef',
        width: 330,
        height: 30,
        borderRadius: 13,
        padding: 18,
        fontSize: 16
    },
    userImg: {
        width: 52,
        height: 52,
        borderRadius: 100
    },
    messageContainer: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10
    },
    message: {
        flexDirection: 'row',
        alignItems: 'center',
    }
});