
import * as React from 'react';
import { View, StyleSheet, Button, Text, Image } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { useState, useEffect } from 'react';
import { Camera, HearthReels, MessageReels, Mute, UnMute, CommentReels } from '../../Icons';
import { Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setReelsOpacity, setShow } from '../../redux/appSlice';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;




const ReelsVideoBanner = ({mute,postView,username,photo,desc,music,likes,comments}) => {
    
    const [follow, setFollow] = useState(true);
    const [sendReel, setSendReel] = useState(false);
    const reelsOpacity = useSelector(state => state.app.reelsOpacity);
    const show = useSelector(state => state.app.show);
    const dispatch = useDispatch();

    return (
        <View style={[styles.container]}>
            {!postView 
                &&
                <View style={{flex:1,justifyContent:'space-between'}}>
                    <View style={styles.storyHeader}>
                        <View style={styles.containerLeft}>
                            <TouchableOpacity onPress={()=>setMute(true)}>
                                <Text style={{fontSize:24,zIndex:99,fontWeight:'700',color:'#fff'}}>Reels</Text>
                            </TouchableOpacity>
                           
                            <View style={[styles.reelsInfoContainer,{opacity:`${reelsOpacity ? 0.6 : 1}`}]}>
                                <View style={styles.reelsInfo}>
                                    <Image
                                        style={styles.avatar}
                                        source={{
                                        uri:photo
                                    }}/>
                                    <Text style={{marginLeft:10,color:'#fff', fontWeight:'800'}}>
                                        {username}
                                    </Text>
                                    
                                    <TouchableOpacity onPress={() => setFollow(!follow)} style={[styles.followButton,{opacity:`${reelsOpacity ? 0.6 : 1}`}]}>
                                        <Text style={{color:'#fff',fontWeight:'700'}}>
                                            {follow ? 'Follow' : 'Unfollow'}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <Text style={{color:'#fff',marginTop:14,fontSize:14, fontWeight:'500'}}>
                                        {desc}
                                    </Text>
                                </View>
                                <View style={{flexDirection:'row',alignItems:'center'}}>
                                    <Text style={{color:'#fff',marginTop:14,fontSize:14, fontWeight:'500'}}>
                                        {username}
                                    </Text>
                                    <Text>
                                        •
                                    </Text>
                                    <Text style={{color:'#fff',marginTop:14,fontSize:14, fontWeight:'500'}}>
                                    Original Audio
                                    </Text>
                                </View>
                            </View>

                        </View>

                        <View style={styles.containerRight}>
                            <View style={{flexDirection:'column',justifyContent:'space-between',height:'100%',alignItems:'center'}}>
                                <View style={{width:24, height:24}}>
                                    <Camera width={12}/>
                                </View>
                                <View style={[styles.reelsLeft]}>
                                    <TouchableOpacity style={{alignItems:'center',marginVertical:2,opacity:`${reelsOpacity ? 0.1 : 0}`}}>
                                        <HearthReels  size={28} />
                                        <Text style={{fontSize:14, fontWeight:'700', color:'#fff', marginTop:10}}>{likes}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{alignItems:'center',marginVertical:2}}>
                                        <CommentReels  size={28} />
                                        <Text style={{fontSize:14, fontWeight:'700', color:'#fff', marginTop:10}}>{comments}</Text>
                                    </TouchableOpacity> 
                                        {sendReel && 
                                            <TouchableOpacity onLongPress={()=>{setSendReel(true)}} style={styles.sendReel}>
                                                <View   style={{flexDirection:'row',alignItems:'center',justifyContent:'center',height:'100%'}}>
                                                    <TouchableOpacity>
                                                        <Image
                                                            style={[styles.sendReelAvatar]}
                                                            source={{
                                                            uri:'https://instagram.fsaw3-1.fna.fbcdn.net/v/t51.2885-19/258883837_625853625259007_3062879252930384246_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fsaw3-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=GX_pFMEybZAAX8JDho6&edm=AHG7ALcBAAAA&ccb=7-5&oh=00_AT9BJKh8ZKiEmF-Kaks8pXsrSQEChhhKw5mGU2Tgdel60A&oe=62E45DD8&_nc_sid=5cbaad'
                                                        }}/>
                                                    </TouchableOpacity>
                                                    <View  style={[styles.sendAvatarContainer]}>
                                                        <Image
                                                            style={styles.sendReelAvatar}
                                                            source={{
                                                            uri:'https://instagram.fsaw3-1.fna.fbcdn.net/v/t51.2885-19/258883837_625853625259007_3062879252930384246_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fsaw3-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=GX_pFMEybZAAX8JDho6&edm=AHG7ALcBAAAA&ccb=7-5&oh=00_AT9BJKh8ZKiEmF-Kaks8pXsrSQEChhhKw5mGU2Tgdel60A&oe=62E45DD8&_nc_sid=5cbaad'
                                                        }}/>
                                                    </View>
                                                    <View  style={styles.sendAvatarContainer}>
                                                        <Image
                                                            style={styles.sendReelAvatar}
                                                            source={{
                                                            uri:'https://instagram.fsaw3-1.fna.fbcdn.net/v/t51.2885-19/258883837_625853625259007_3062879252930384246_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fsaw3-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=GX_pFMEybZAAX8JDho6&edm=AHG7ALcBAAAA&ccb=7-5&oh=00_AT9BJKh8ZKiEmF-Kaks8pXsrSQEChhhKw5mGU2Tgdel60A&oe=62E45DD8&_nc_sid=5cbaad'
                                                        }}/>
                                                    </View>
                                                    <View style={styles.sendAvatarContainer}>
                                                        <Image
                                                            style={styles.sendReelAvatar}
                                                            source={{
                                                            uri:'https://instagram.fsaw3-1.fna.fbcdn.net/v/t51.2885-19/258883837_625853625259007_3062879252930384246_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fsaw3-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=GX_pFMEybZAAX8JDho6&edm=AHG7ALcBAAAA&ccb=7-5&oh=00_AT9BJKh8ZKiEmF-Kaks8pXsrSQEChhhKw5mGU2Tgdel60A&oe=62E45DD8&_nc_sid=5cbaad'
                                                        }}/>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                        }
                                    <View style={{position:'relative'}}>
                                        <TouchableOpacity onLongPress= {()=>{
                                            dispatch(setReelsOpacity(true));
                                            setSendReel(true)
                                        }} onPressOut={()=>{
                                            dispatch(setReelsOpacity(false));
                                            setSendReel(false)
                                        }} style={{width:600,height:50,alignItems:'center',marginVertical:2}}>
                                            <MessageReels size={28} />
                                        </TouchableOpacity>
                                    </View>
                                    <TouchableOpacity onPressOut={()=>console.log(1)} style={{alignItems:'center',marginVertical:2}}>
                                        <Text>...</Text>
                                    </TouchableOpacity>
                                    <Image
                                        style={[styles.avatarLeft,{opacity:`${reelsOpacity ? 0.6 : 1}`}]}
                                        source={{
                                        uri:'https://instagram.fsaw3-1.fna.fbcdn.net/v/t51.2885-19/289329021_552196606376038_7855624414260327761_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fsaw3-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=fmk74a_IsTUAX_N_OPm&edm=AEF8tYYBAAAA&ccb=7-5&oh=00_AT_IWyy-HIFw5-VCN2uMSmhMqhbX_K1Vw4hOhThMjc11Zg&oe=62EE95EB&_nc_sid=a9513d'
                                    }}/>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            }
            
            {!postView ?
                <View style={styles.mute}>
                    {mute ? <Mute size={22} /> : 
                    <UnMute size={22} />}
                </View>
                :
                <View style={[styles.mute,{left:'45%',top:'48%'}]}>
                    {mute ? <Mute size={22} /> : 
                    <UnMute size={22} />}
                </View>
            }

            {false && <View style={{backgroundColor:'black',position:'absolute',height:'100%',width:'100%',opacity:0.4}} />}
        </View>
    )
}

export default ReelsVideoBanner;


const styles = StyleSheet.create({
    container: {
      flex:1,
      zIndex:99
    },
    mute:{
        width:48,
        height:48,
        borderRadius:100,
        backgroundColor:'#262626e6',
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        top:windowHeight / 2 - 30,
        left:windowWidth / 2 - 30,
    },
    storyHeader: {
        flexDirection:'row'
    },
    containerLeft: {
        flex:5,
        paddingHorizontal:12,
        paddingVertical:40,
        paddingRight:0,
        justifyContent:'space-between',
    },
    containerRight: {
        flex:1,
        paddingHorizontal:6,
        paddingVertical:40,
        alignItems:'center'
    },
    reelsInfoContainer: {
    },
    avatar: {
        width:36,
        height:36,
        borderRadius:21,
    },
    followButton: {
        borderWidth:2,
        borderColor:'#fff',
        marginLeft:10,
        borderRadius:10,
        paddingHorizontal:14,
        paddingVertical:6,
        zIndex:999
    },
    reelsInfo: {
        flexDirection:'row',
        alignItems:'center'
    },
    avatarLeft: {
        width:36,
        height:36,
        borderRadius:10,
        borderWidth:3,
        borderColor:'#fff'
    },
    reelsLeft: {
        height:250,
        justifyContent:'space-between',
        alignItems:'center'  
    },
    sendReel: {
        position:'absolute',
        right:30,
        top:-15,
        width:255,
        backgroundColor:'#fff',
        borderRadius:31,
        zIndex:99,
        padding:12,
        maxHeight:65
    },
    sendReelAvatar: {
        width:46,
        height:46,
        borderRadius:100
    },
    sendAvatarContainer: {
        marginLeft:10
    }
});
