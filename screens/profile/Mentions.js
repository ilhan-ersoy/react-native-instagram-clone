import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { TextInput, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {profiles} from "../../data/Profiles";
import { Burger, DropDown, NoPhotos, Plus, Security, SinglePlus } from "../../Icons";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

function Mentions() {

    return (
        <View style={styles.container}>
            <View style={{flexDirection:'column',alignItems:'center',justifyContent:'center',marginTop:30}}>
                <View style={styles.noPhotos}>
                    <NoPhotos size={24} />
                </View>
                <Text style={{fontSize:28,fontWeight:'500'}}>
                    No Photos
                </Text>
            </View>
        </View>
    )
}

export default Mentions;

const styles = StyleSheet.create({
    container: {
        height:'100%',
        backgroundColor:'#fff',
    },
    photo: {
        width:'33%',
        height:120,
        borderWidth:2,
        borderColor:'#fff'
    },
    noPhotos: {
        padding:10,
        borderWidth:1,
        borderColor:'black',
        borderRadius:44,
        marginBottom:10
    }
});