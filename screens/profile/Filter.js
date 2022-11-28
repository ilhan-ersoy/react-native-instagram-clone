import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { TextInput, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { profiles } from "../../data/Profiles";
import { Burger, DropDown, NoPhotos, Plus, Security, SinglePlus } from "../../Icons";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

function Filter() {

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'start' }}>
                <View style={{ backgroundColor: 'red', height: 120, width: 120 }}>
                        
                </View>
            </View>
        </View>
    )
}

export default Filter;

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#fff',
    },
    photo: {
        width: '33%',
        height: 120,
        borderWidth: 2,
        borderColor: '#fff'
    },
    noPhotos: {
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 44,
        marginBottom: 10
    }
});