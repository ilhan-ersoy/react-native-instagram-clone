import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { TextInput, Image } from "react-native";
import { Burger, DropDown, MoreAccounts, Plus, Security, SinglePlus } from "../../../Icons";
import Content from "../Content";
import { ScrollView } from "react-native";
import {useState} from "react";
import { faker, Faker } from '@faker-js/faker';


function MoreAccount({navigation}) {


    const [follow, setFollow] = useState(true);
    
    return (
        <View style={[styles.shadow,{marginTop:20,position:'relative',marginLeft:10}]}>
            <View style={{width:135,borderWidth:0.7,justifyContent:'center',borderColor:'#BABABA',padding:20,paddingTop:10,borderRadius:8,justifyContent:'center',alignItems:'center'}}>
                <View style={{ zIndex:99,position:'absolute',right:10,top:7}}>
                    <Text style={{fontSize:12,opacity:0.6}}>
                        X
                    </Text>
                </View>
                <Image style={{width:70,height:70,borderRadius:100, minHeight:50}} source={{uri:faker.internet.avatar()}} />   
                <View style={{alignItems:'center', marginVertical:10, minHeight:30}}>
                    <Text style={{fontSize:12,textAlign:'center'}}>{faker.internet.userName()}</Text>
                    <Text style={{fontSize:10, opacity:0.5, textAlign:'center'}}>Followed by {faker.name.firstName()} + {faker.datatype.number({'min':1,'max':5})} more</Text>
                </View>
                {follow 
                    ? 
                    <TouchableOpacity onPress={()=>setFollow(true)} style={[styles.follow,{width:'100%',paddingHorizontal:10,height:30}]}>
                        <Text style={{fontWeight:'600',color:'#fff',fontSize:12}}>
                            Follow
                        </Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={()=>setFollow(false)} style={[styles.follow,{width:'100%',paddingHorizontal:10,height:30,backgroundColor:'#efefef'}]}>
                        <Text style={{fontWeight:'500',color:'#000',fontSize:12}}>
                            Requested
                        </Text>
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
}

export default MoreAccount;

const styles = StyleSheet.create({
    container: {
        paddingTop:40,
        backgroundColor:'#fff',
        paddingHorizontal:20,
        paddingBottom:25
    },
    header: {
        flexDirection:'row',
        justifyContent:'space-between'
    },
    user: {
        marginTop:17,
        flexDirection:'row',
        alignItems:'center'
    },
    userBox: {
        marginLeft:20,
        alignItems:'center'
    },
    followerInfo: {
        marginTop:10,
        width:'100%',
        paddingHorizontal:12,
        borderRadius:30,
        alignItems:'center',
        flexDirection:'row',
        paddingVertical:7,
    },
    follow: {
        backgroundColor:'#5793EA',
        width:'100%',
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        marginTop:8,
        height:30
    },
    story: {
        borderWidth:1,
        borderColor:'#e6e6e6',
        flexDirection:'column',
        width:76,
        height:76,
        borderRadius:100,
        alignItems:'center',
        justifyContent:'center'
    },
    message: {
        backgroundColor:'#efefef',
        borderRadius:5,
        width:'45%',
        alignItems:'center',
        justifyContent:'center',
        marginTop:8,
        height:30,
        marginLeft:6
    },
    moreAccounts: {
        backgroundColor:'#efefef',
        width:'8%',
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        marginTop:8,
        height:30,
        marginLeft:6
    },
    discoverPeople: {
        paddingVertical:15,

    }
})


