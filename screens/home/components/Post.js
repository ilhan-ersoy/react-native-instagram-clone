import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { TextInput, Image, Button } from "react-native";
import {useDispatch, useSelector} from "react-redux";
import { setShow, show } from "../../../redux/appSlice";
import BottomSheet from "react-native-gesture-bottom-sheet";

import { Hearth, More, Comment, Message, BookMark } from "../../../Icons";
import Swiper, {scrollTo} from 'react-native-swiper';


const Post = ({post,setShowComments,navigation, bottomSheet}) => {

    const [currentIndex, setCurrentIndex] = useState(0); 

    //console.log(currentIndex);

    const dispatch = useDispatch();
    

    return (
     
        <View key={post.id}>
            <View style={styles.header}>
                <View style={styles.user}>
                    <Image
                        style={styles.avatar}
                        source={{
                            uri:post.user.avatarImg
                        }}
                    />  
                    <TouchableOpacity onPress={() => navigation.navigate('Details')} opacity={0.8}>
                        <Text style={{fontSize:12,fontWeight:'bold',marginLeft:5}}>{post.user.name}</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{height:40,width:40,alignItems:'center', justifyContent:'center'}} onPress={()=>bottomSheet.current.show()}>
                    <More width={22}/>
                </TouchableOpacity>
            </View>
        
            <Swiper onIndexChanged={(e) => setCurrentIndex(e)} loop={false} showsPagination={false} style={{height:350}}>
                    <View>
                        <Image
                            style={styles.postImage}
                            source={{
                                uri:post.postImg
                            }}
                        />
                    </View>
                    <View>
                        <Image
                            style={styles.postImage}
                            source={{
                                uri:post.postImg
                            }}
                        />
                    </View>
                    <View>
                        <Image
                            style={styles.postImage}
                            source={{
                                uri:post.postImg
                            }}
                        />
                    </View>
            </Swiper>
            <View style={styles.postInfo}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <View>
                        <Hearth size={24}/>
                    </View>

                    <View style={{marginLeft:12}}>
                        <Comment size={24}/>
                    </View>

                    <View style={{marginLeft:12}}>
                        <Message size={24}/>
                    </View>
                </View>
                <View style={{flexDirection:'row',marginRight:50}}>
                    <TouchableOpacity opacity={1} style={{width:8,height:8,backgroundColor:`${currentIndex == 0 ? '#32B5FF' : '#C4C4C4'}`,borderRadius:21}}></TouchableOpacity>
                    <TouchableOpacity opacity={1} style={{width:8,height:8,backgroundColor:`${currentIndex == 1 ? '#32B5FF' : '#C4C4C4'}`,borderRadius:21,marginLeft:6}}></TouchableOpacity>
                    <TouchableOpacity opacity={1} style={{width:8,height:8,backgroundColor:`${currentIndex == 2 ? '#32B5FF' : '#C4C4C4'}`,borderRadius:21,marginLeft:6}}></TouchableOpacity>
                </View>
                <View>
                    <BookMark size={24}/>
                </View>
            </View>
            <View style={{paddingHorizontal:10}}>
                {false ? <Text style={{fontWeight:'bold',fontSize:13}}>
                    {post.likes} likes
                </Text> : 
                <View style={{flexDirection:'row',fontSize:13, alignItems:'center'}}>
                    <Image 
                        style={{width:25,height:25,borderRadius:21,borderWidth:1,borderColor:'#CACACA'}}
                        source={{
                            uri:post.user.avatarImg,
                        }}
                    />
                    <Text style={{marginLeft:8,fontSize:13}}>
                        Liked by <Text style={{fontWeight:'bold'}}>ilhan_ers</Text> and <Text style={{fontWeight:'bold'}}>105 others</Text>
                    </Text>
                </View>}
            </View>
            <View style={styles.content}>
                <TouchableOpacity>
                    <Text>
                        <Text style={{fontWeight:'bold'}}>{post.user.name + ' '}</Text> 
                            <Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <Text style={{opacity:0.4}}>...</Text>
                            </Text>
                        </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.comments} onPress={()=>navigation.navigate('Comments')}>
                    <Text style={{fontSize:13,opacity:0.5}}>View all 10 comments</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.addComment}>
                <View style={{flexDirection:'row'}}>
                    <Image 
                        style={styles.commentAvatar}
                        source={{
                            uri:post.user.avatarImg,
                        }}
                    />
                    <TextInput style={[styles.emailInput,{justifyContent:'flex-start',marginLeft:10}]} placeholder="Add comment..." />
                </View>

                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Text style={{fontSize:24}}>😍</Text>
                    <Text style={{fontSize:24}}>😭</Text>
                    <View style={styles.addEmoji}>
                        <Text style={{opacity:0.4,fontSize:16}}>+</Text>
                    </View>
                </View>
            </View>
            
        </View>
        //</ScrollView>
    )

}

export default Post;


const styles = StyleSheet.create({
    header: {
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
        alignItems:'center',
        height:49
    },
    avatar: {
        width:30,
        height:30,
        borderRadius:21,
    },
    user:{
        flexDirection:'row',
        alignItems:'center'
    },
    postImage: {
        width:'100%',
        height:350
    },
    postInfo: {
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        padding:12,
        paddingHorizontal:10,
        alignItems:'center'
    },
    content: {
        marginTop:8,
        paddingHorizontal:10
    },
    comments: {
        marginTop:8,
    },
    addComment: {
        flexDirection:'row',
        paddingHorizontal:13,
        justifyContent:'space-between',
        paddingVertical:17
    },
    commentAvatar: {
        width:30,
        height:30,
        borderRadius:21
    },
    addEmoji: {
        borderWidth:1,
        borderColor:'#999999',
        borderRadius:21,
        width:24,
        height:24,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column'
    },
    likesAvatar: {
        width:8,
        height:8,
        borderRadius:21
    }
});
