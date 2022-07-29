import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import {Image } from "react-native";
import { faker } from '@faker-js/faker';

const Photos = () => {



    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                {new Array(3).fill(
                    <Image
                        style={styles.photo}
                        source={{
                            uri:faker.image.city()
                        }}
                    /> )}
            </View>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                {new Array(3).fill(
                    <Image
                        style={styles.photo}
                        source={{
                            uri:faker.image.animals()
                        }}
                    /> )}
            </View>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                {new Array(3).fill(
                    <Image
                        style={styles.photo}
                        source={{
                            uri:faker.image.food()
                        }}
                    /> )}
            </View>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                {new Array(3).fill(
                    <Image
                        style={styles.photo}
                        source={{
                            uri:faker.image.animals()
                        }}
                    /> )}
            </View>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                {new Array(3).fill(
                    <Image
                        style={styles.photo}
                        source={{
                            uri:faker.image.city()
                        }}
                    /> )}
            </View>
        </View>
    )
}

export default Photos;

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