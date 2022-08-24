import {View, Text} from "react-native"
import { SafeAreaView, StyleSheet, TextInput, Image, TouchableWithoutFeedback } from "react-native";
import { Carosel, Reels, ReelsFillWhite, Search } from "../../Icons";
import { faker } from '@faker-js/faker';
import { ScrollView } from "react-native";
import { useState } from "react";
import Content from "../profile/Content";
import SearchContent from "./SearchContent";



const Recents = () => {

    return (
        <View>
            <Text>
                Test
            </Text>
        </View>
    )
}
    
export default Recents;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff'
    },
    header: {
        flex:1,
        padding:10,
        paddingBottom:0
    },
    content: {
        flex:9,
        width:'100%'
    },
    searchInput: {
        backgroundColor:'#efefef',
        width:'100%',
        height:38,
        borderRadius:5,
        padding:13,
        paddingLeft:40,
        fontSize:12
    },
    photo: {
        width:'33%',
        height:120,
        borderWidth:2,
        borderColor:'#fff'
    },
    reels: {
        width:'100%',
        height:120,
        borderWidth:2,
        borderColor:'#fff',
        backgroundColor:'red'
    },
    exploreImg: {
        width:'50%',
        height:125
    }
})