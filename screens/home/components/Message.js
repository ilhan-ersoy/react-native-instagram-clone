import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { TextInput, Image } from "react-native";
import { Touchable } from "react-native";
import { ScrollView } from "react-native";
import { Hearth, More, Comment, Message, BookMark, DropDown, LeftArrow, Plus, SinglePlus, DmSearch, Mute } from "../../../Icons";
import { faker } from "@faker-js/faker";



const Message = () => {
    return (
        <View style={styles.messageContainer}>
                        <View style={styles.message}>
                            <Image
                                style={styles.userImg}
                                source={{
                                    uri:faker.image.avatar()
                                }}
                            />
                            <View style={{marginLeft:15}}>
                                <Text style={{fontWeight:'500'}}>{faker.internet.userName() + ' '}</Text>
                                <View style={{marginTop:4,flexDirection:'row',alignItems:'center'}}>
                                    <Text style={{fontWeight:'600'}}>
                                        {message.notification}
                                    </Text>

                                    <View style={{width:3,height:3,backgroundColor:'black',borderRadius:21,marginLeft:6}}/>

                                    <View style={{flexDirection:'row',alignItems:'center'}}>
                                        <Text style={{marginLeft:5}}>
                                            {message.timestamp}
                                        </Text>
                                        {message.isMuted && <View style={{opacity:'0.5', marginLeft:4}}>
                                            <Mute size={16} />
                                        </View>}
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{flexDirection:'row',alignItems:'center',marginRight:5}}>
                            <View style={{width:8,height:8,backgroundColor:'#2b96f6',borderRadius:21,marginRight:20}}/>
                            <Image style={{width:28,height:28}} source={{uri:'https://cdn-icons.flaticon.com/png/512/4836/premium/4836815.png?token=exp=1658540653~hmac=de634cab9e1424f5894a7acd80563f39'}} />
                        </View>
                    </View>
    )
}

export default Message;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal:18,
        height:'100%',
        backgroundColor:'#fff',
    },
    searchInput: {
        backgroundColor:'#efefef',
        width:330,
        height:30,
        borderRadius:13,
        padding:18, 
        fontSize:16
    },
    userImg: {
        width:52,
        height:52,
        borderRadius:100
    },
    messageContainer: {
        marginTop:20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginVertical:10
    },
    message: {
        flexDirection:'row',
        alignItems:'center',
    }
});