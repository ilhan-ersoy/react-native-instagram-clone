import { useState } from "react";
import { StyleSheet, Image,Text, View, TouchableOpacity, TouchableWithoutFeedback, TextInput } from 'react-native';
import { DropDown, Hearth, Logo, Message, Plus, Messenger, Search } from '../../../../Icons';
import Friend from "./Friend";

const SendStory = ({img}) => {

    const [send, setSend] = useState(false);

    return (
        <View style={{height:'100%'}}>
            <View style={styles.topBar}>
                {img ? <View style={{width:'100%',flexDirection:'row',alignItems:'center'}}>
                        <Image
                            style={{width:55,height:55,borderRadius:8}}
                            source={{
                                uri:img
                            }}
                        />
                        <TextInput style={[styles.sendMessage,{marginLeft:6}]} placeholder="Write a message..." placeholderTextColor="black" />

                </View> :
                <View style={{width:'100%'}}>
                    <TextInput style={[styles.sendMessage]} placeholder="Write a message..." placeholderTextColor="black" />
                </View>}
            </View>
            <View style={[styles.textBorder,{opacity:0.2}]} />

            <View style={styles.header}>
                    <TextInput style={styles.searchInput} placeholder="Search" />
                    <View style={{position:'absolute',top:22,left:30, opacity:0.3}}>
                        <Search size={15}/>
                    </View>

            </View>

            <View style={styles.main}>
                {Array.from(Array(10), (_, i) => <Friend key={i} />)}
            </View>
            
        </View>
    )
}

export default SendStory;


const styles = StyleSheet.create({
    icon: {
        width:54,
        height:54,
        borderWidth:1,  
        borderRadius:100,
        borderColor:'black',
        alignItems:'center',
        justifyContent:'center'
    },
    iconContainer: {
        alignItems:'center'
    },
    topBar: {
        width:'100%',
        marginTop:25,
        flexDirection:'row',
        paddingHorizontal:34,
        justifyContent:'space-between',
        paddingBottom:20
    },
    main: {
        marginTop:20
    },
    text: {
        borderColor:'black',
        paddingHorizontal:20,
        paddingVertical:20,
    },
    textBorder: {
        borderTopWidth:0.5,
        borderBottomWidth:0.5,
        opacity:0.2,
    },
    sendMessage: {
        width:'100%',
        height:20,
        borderRadius:30,
        opacity:0.4,
        padding:4
    },
    header: {
        padding:10,
        paddingBottom:0,
        paddingHorizontal:20
    },
    searchInput: {
        backgroundColor:'#efefef',
        width:'100%',
        height:34,
        borderRadius:5,
        padding:20,
        paddingLeft:40
    },
    avatar: {
        width:48,
        height:48,
        borderRadius:100,
    },
    friends: {
        paddingHorizontal:20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    sendButton: {
        backgroundColor:'#5793EA',
        paddingHorizontal:20,
        paddingVertical:8,
        borderRadius:10
    },
    undoButton: {
        backgroundColor:'#fff',
        paddingHorizontal:20,
        paddingVertical:8,
        borderRadius:10,
        borderWidth:1,
        borderColor:'#BABABA'
    }
});