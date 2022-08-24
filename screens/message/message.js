import {View} from "react-native"
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { StyleSheet, ScrollView, TextInput, Text, RefreshControl, TouchableOpacity } from 'react-native';
import { SafeAreaView, Image } from "react-native";
import { LeftArrow, DropDown, Plus, SinglePlus, DmSearch, Call, VideoCall, ReelsFilled, ReelsFillWhite, Microphone, Images, Sticker, Camera } from "../../Icons";
import { faker } from "@faker-js/faker";


const MessageScreen = ({route}) => {
    return (
        <SafeAreaView style={styles.container}>
           <View style={styles.header}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <View>
                            <LeftArrow size={24} />
                    </View>

                    <View style={{flexDirection:'row', alignItems:'center'}}>
                            <Image
                                style={[styles.avatar,{marginLeft:20}]}
                                source={{
                                    uri:faker.internet.avatar(),
                                }}
                            />
                            <View style={{marginLeft:15,alignItems:'flex-start'}}>
                                <Text style={{fontWeight:'700',fontSize:14}}>{faker.name.firstName() +' '+ faker.name.lastName()}</Text>
                                <Text style={{fontWeight:'300',opacity:0.4,fontSize:12, marginTop:6}}>{faker.internet.userName()}</Text>
                            </View>
                    </View>
                </View>

                <View style={{flexDirection:'row', alignItems:'center',marginRight:10}}>
                    <View style={{marginRight:22}}>
                        <Call size={28} />
                    </View>
                    <View>
                        <VideoCall size={28} />
                    </View>
                </View>
           </View>

            <ScrollView showsVerticalScrollIndicator={false} style={{height:'100%'}}>
               <View style={{height:'100%',paddingHorizontal:15}}>
                    <View style={{alignSelf:'flex-start'}}>
                        <Image
                            style={{width:200,height:400,borderRadius:30}}
                            source={{
                                uri:faker.image.sports(200,400,true)
                            }}
                        />
                        <View style={{position:'absolute',right:10,top:10}}>  
                                <ReelsFillWhite size={36}/>   
                        </View>
                        <View style={{position:'absolute',right:50,bottom:10}}>  
                               <View style={{flexDirection:'row', alignItems:'center'}}>
                                    <Image style={{width:30,height:30,borderRadius:100}} source={{
                                        uri:faker.image.sports(200,400,true)
                                    }}/>
                                    <Text style={{fontWeight:'600', color:'#fff',marginLeft:10,fontSize:18}}>postsinsta</Text>
                               </View>  
                        </View>  
                        <View style={styles.sendedReaction}>
                            <Text>
                                😂
                            </Text>
                        </View>
                    </View>

                    <View style={{alignSelf:'flex-end',marginVertical:10}}>
                        <View style={styles.post}>
                            <View style={styles.postHeader}>
                                <Image 
                                    style={{width:42,height:42,borderRadius:100}}
                                    source={{uri:faker.image.avatar(200,400,true)}} />
                                
                                <Text style={{marginLeft:6}}>aogofficial</Text>
                            </View>
                            
                            <Image style={{height:250}} source={{uri:faker.image.abstract()}} />

                            <View style={[styles.bottom]}>
                                <Text style={{fontWeight:'500'}}>
                                    aogofficial
                                </Text>
                                <Text style={{fontSize:12,marginLeft:10}}>
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

                    <View style={{alignSelf:'flex-start'}}>
                        <View style={{backgroundColor:'#3c4ad4',padding:13,borderRadius:100,alignItems:'center',justifyContent:'center'}}>
                            <Text style={{fontWeight:'600',color:'#fff'}}>wow !</Text>
                        </View>
                    </View>

                    

                    <View style={{alignSelf:'flex-end',marginVertical:10}}>
                        <View style={styles.post}>
                            <View style={styles.postHeader}>
                                <Image 
                                    style={{width:42,height:42,borderRadius:100}}
                                    source={{uri:faker.image.avatar(200,400,true)}} />
                                
                                <Text style={{marginLeft:6}}>aogofficial</Text>
                            </View>
                            
                            <Image style={{height:250}} source={{uri:faker.image.abstract()}} />

                            <View style={[styles.bottom]}>
                                <Text style={{fontWeight:'500'}}>
                                    aogofficial
                                </Text>
                                <Text style={{fontSize:12,marginLeft:10}}>
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

                    <View style={{alignSelf:'flex-start',marginVertical:10}}>
                        <View style={{backgroundColor:'#3c4ad4',padding:13,borderRadius:100,alignItems:'center',justifyContent:'center'}}>
                            <Text style={{fontWeight:'600',color:'#fff'}}>LOL !</Text>
                        </View>
                    </View>

                    <View style={{alignSelf:'flex-start'}}>
                        <Image
                            style={{width:200,height:400,borderRadius:30}}
                            source={{
                                uri:faker.image.sports(200,400,true)
                            }}
                        />
                        <View style={{position:'absolute',right:10,top:10}}>  
                                <ReelsFillWhite size={36}/>   
                        </View>
                        <View style={{position:'absolute',right:50,bottom:10}}>  
                               <View style={{flexDirection:'row', alignItems:'center'}}>
                                    <Image style={{width:30,height:30,borderRadius:100}} source={{
                                        uri:faker.image.sports(200,400,true)
                                    }}/>
                                    <Text style={{fontWeight:'600', color:'#fff',marginLeft:10,fontSize:18}}>postsinsta</Text>
                               </View>  
                        </View>  
                        <View style={styles.sendedReaction}>
                            <Text>
                                😂
                            </Text>
                        </View>
                    </View>

                    <View style={{alignSelf:'flex-end'}}>
                        <View style={{backgroundColor:'#3c4ad4',padding:13,borderRadius:100,alignItems:'center',justifyContent:'center'}}>
                            <Text style={{fontWeight:'600',color:'#fff'}}>funny !</Text>
                        </View>
                    </View>
               </View>
            </ScrollView>


            <View style={{marginHorizontal:4,marginBottom:2}}>
                <View style={styles.sendMessage}>
                    <View style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>
                        <View style={{width:40,height:40,flexDirection:'row',alignItems:'center'}}>
                            <View style={{backgroundColor:'#3c4ad4',width:40,height:40,borderRadius:100,alignItems:'center',justifyContent:'center'}}>
                                <TouchableOpacity>
                                    <Camera size={24} />
                                </TouchableOpacity>
                            </View>
                            <TextInput style={{height:50,width:300,marginLeft:10}} placeholder="Message" placeholderTextColor="#000" />
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <TouchableOpacity>
                                <Microphone size={24} />
                            </TouchableOpacity>

                            <TouchableOpacity style={{marginLeft:10}}>
                                <Images size={24} />
                            </TouchableOpacity>

                            <TouchableOpacity style={{marginLeft:10}}>
                                <Sticker size={24} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>

        </SafeAreaView>
    );
}

export default MessageScreen;


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff'
    },
    avatar: {
        width:38,
        height:38,
        borderRadius:100
    },
    header: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:10,
        paddingVertical:20
    },
    post: {
        alignSelf:'flex-end', 
        width:200,
        borderRadius:24,
        flexDirection:'column',
        backgroundColor:'#efefef',
    },
    postHeader: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'start',
        paddingHorizontal:18,
        paddingVertical:10,
        borderTopLeftRadius:20,
        borderTopRightRadius:20
    },
    bottom: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'start',
        backgroundColor:'#efefef',
        paddingHorizontal:12,
        paddingVertical:6,
        height:50,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20
    },
    receivedReaction: {
        position:'absolute',
        bottom:-10,
        right:-5,
        borderRadius:100,
        backgroundColor:'#efefef',
        padding:4,
        borderWidth:2,
        borderColor:'#fff'
    },
    sendedReaction: {
        position:'absolute',
        bottom:-10,
        left:-5,
        borderRadius:100,
        backgroundColor:'#efefef',
        padding:4,
        borderWidth:2,
        borderColor:'#fff'
    },
    sendMessage:{
        backgroundColor:'#efefef',
        height:55,
        borderRadius:50,
        justifyContent:'center',
        paddingHorizontal:20
    }
});

