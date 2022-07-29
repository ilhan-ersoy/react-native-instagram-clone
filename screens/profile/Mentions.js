import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { TextInput, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {profiles} from "../../data/Profiles";
import { Burger, DropDown, Plus, Security, SinglePlus } from "../../Icons";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

function Mentions() {

    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Image
                    style={styles.photo}
                    source={{
                        uri:'https://instagram.fsaw3-1.fna.fbcdn.net/v/t51.2885-15/294238827_1180911712478609_3229759057501186637_n.webp?stp=c243.0.954.954a_dst-jpg_e35_s240x240&cb=2d435ae8-326fec31&_nc_ht=instagram.fsaw3-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=DrZ7qmaKOl8AX-dHMQL&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AT9zCi-cqrFsIyireUGjpGtyGaXio0rfEOnvl_OXanOY6g&oe=62E3866D&_nc_sid=8fd12b'
                    }}
                />
                <Image
                    style={styles.photo}
                    source={{
                        uri:'https://instagram.fsaw3-1.fna.fbcdn.net/v/t51.2885-15/294238827_1180911712478609_3229759057501186637_n.webp?stp=c243.0.954.954a_dst-jpg_e35_s240x240&cb=2d435ae8-326fec31&_nc_ht=instagram.fsaw3-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=DrZ7qmaKOl8AX-dHMQL&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AT9zCi-cqrFsIyireUGjpGtyGaXio0rfEOnvl_OXanOY6g&oe=62E3866D&_nc_sid=8fd12b'
                    }}
                />
                <Image
                    style={styles.photo}
                    source={{
                        uri:'https://instagram.fsaw3-1.fna.fbcdn.net/v/t51.2885-15/294238827_1180911712478609_3229759057501186637_n.webp?stp=c243.0.954.954a_dst-jpg_e35_s240x240&cb=2d435ae8-326fec31&_nc_ht=instagram.fsaw3-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=DrZ7qmaKOl8AX-dHMQL&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AT9zCi-cqrFsIyireUGjpGtyGaXio0rfEOnvl_OXanOY6g&oe=62E3866D&_nc_sid=8fd12b'
                    }}
                />
            </View>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Image
                    style={styles.photo}
                    source={{
                        uri:'https://instagram.fsaw3-1.fna.fbcdn.net/v/t51.2885-15/294238827_1180911712478609_3229759057501186637_n.webp?stp=c243.0.954.954a_dst-jpg_e35_s240x240&cb=2d435ae8-326fec31&_nc_ht=instagram.fsaw3-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=DrZ7qmaKOl8AX-dHMQL&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AT9zCi-cqrFsIyireUGjpGtyGaXio0rfEOnvl_OXanOY6g&oe=62E3866D&_nc_sid=8fd12b'
                    }}
                />
                <Image
                    style={styles.photo}
                    source={{
                        uri:'https://instagram.fsaw3-1.fna.fbcdn.net/v/t51.2885-15/294238827_1180911712478609_3229759057501186637_n.webp?stp=c243.0.954.954a_dst-jpg_e35_s240x240&cb=2d435ae8-326fec31&_nc_ht=instagram.fsaw3-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=DrZ7qmaKOl8AX-dHMQL&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AT9zCi-cqrFsIyireUGjpGtyGaXio0rfEOnvl_OXanOY6g&oe=62E3866D&_nc_sid=8fd12b'
                    }}
                />
                <Image
                    style={styles.photo}
                    source={{
                        uri:'https://instagram.fsaw3-1.fna.fbcdn.net/v/t51.2885-15/294238827_1180911712478609_3229759057501186637_n.webp?stp=c243.0.954.954a_dst-jpg_e35_s240x240&cb=2d435ae8-326fec31&_nc_ht=instagram.fsaw3-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=DrZ7qmaKOl8AX-dHMQL&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AT9zCi-cqrFsIyireUGjpGtyGaXio0rfEOnvl_OXanOY6g&oe=62E3866D&_nc_sid=8fd12b'
                    }}
                />
            </View>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Image
                    style={styles.photo}
                    source={{
                        uri:'https://instagram.fsaw3-1.fna.fbcdn.net/v/t51.2885-15/294238827_1180911712478609_3229759057501186637_n.webp?stp=c243.0.954.954a_dst-jpg_e35_s240x240&cb=2d435ae8-326fec31&_nc_ht=instagram.fsaw3-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=DrZ7qmaKOl8AX-dHMQL&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AT9zCi-cqrFsIyireUGjpGtyGaXio0rfEOnvl_OXanOY6g&oe=62E3866D&_nc_sid=8fd12b'
                    }}
                />
                <Image
                    style={styles.photo}
                    source={{
                        uri:'https://instagram.fsaw3-1.fna.fbcdn.net/v/t51.2885-15/294238827_1180911712478609_3229759057501186637_n.webp?stp=c243.0.954.954a_dst-jpg_e35_s240x240&cb=2d435ae8-326fec31&_nc_ht=instagram.fsaw3-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=DrZ7qmaKOl8AX-dHMQL&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AT9zCi-cqrFsIyireUGjpGtyGaXio0rfEOnvl_OXanOY6g&oe=62E3866D&_nc_sid=8fd12b'
                    }}
                />
                <Image
                    style={styles.photo}
                    source={{
                        uri:'https://instagram.fsaw3-1.fna.fbcdn.net/v/t51.2885-15/294238827_1180911712478609_3229759057501186637_n.webp?stp=c243.0.954.954a_dst-jpg_e35_s240x240&cb=2d435ae8-326fec31&_nc_ht=instagram.fsaw3-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=DrZ7qmaKOl8AX-dHMQL&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AT9zCi-cqrFsIyireUGjpGtyGaXio0rfEOnvl_OXanOY6g&oe=62E3866D&_nc_sid=8fd12b'
                    }}
                />
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
    }
});