import { useState } from "react";
import { StyleSheet, Image,Text, View, TouchableOpacity, TouchableWithoutFeedback, TextInput } from 'react-native';
import { DropDown, Hearth, Logo, Message, Plus, Messenger, Search } from '../../../../Icons';
import { faker } from "@faker-js/faker";

const Friend = () => {

    const [send, setSend] = useState(false);

    return (
        <View style={styles.friends}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Image
                            style={styles.avatar}
                            source={{
                                uri:faker.image.avatar()
                            }}
                        />
                        <View style={{marginLeft:15}}>
                            <Text style={{fontWeight:'600'}}>{faker.internet.userName()}</Text>
                            <Text style={{fontSize:11.5,opacity:0.5,marginTop:2}}>{faker.internet.userName()}</Text>
                        </View>
                    </View>
                    {!send ? 
                        <TouchableOpacity onPress={()=>setSend(true)} style={styles.sendButton}>
                            <Text style={{fontWeight:'600',color:'#fff'}}>Send</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={()=>setSend(false)} style={styles.undoButton}>
                            <Text style={{fontWeight:'600',color:'#000'}}>Undo</Text>
                        </TouchableOpacity>
                    }
        </View>
    )
}

export default Friend;


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
        alignItems:'center',
        marginTop:12
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