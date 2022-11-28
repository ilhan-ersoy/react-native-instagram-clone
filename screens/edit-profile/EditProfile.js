import { Platform, View } from "react-native"
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { StyleSheet, ScrollView, TextInput, Text, RefreshControl } from 'react-native';
import { SafeAreaView, Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { Close, ProfileDone } from "../../Icons";

const EditProfile = ({ route, navigation }) => {

    const [name, setName] = React.useState('İlhan Ersoy');
    const [userName, setUserName] = React.useState('ilhan.ers')
    const [bio, setBio] = React.useState('FBU / SOFTWARE');

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.top}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.5}>
                            <Close size={24} />
                        </TouchableOpacity>
                        <Text style={{ marginLeft: 22, fontSize: 21, fontWeight: '800' }}>
                            Edit Profile
                        </Text>
                    </View>

                    <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.5}>
                        <View>
                            <ProfileDone size={24} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.main}>
                    <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                        <Image style={{ width: 100, height: 100, borderWidth: 1, borderColor: '#BABABA', borderRadius: 100 }} source={require('../../assets/img/ilhan_ers.jpg')} />
                        <Text style={{ color: '#0095f6', marginTop: 10, fontSize: 19, fontWeight: '400' }}>
                            Change Profile Photo
                        </Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'column', paddingHorizontal: 7, marginTop: 20 }}>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontSize: 11, fontWeight: '500', opacity: 0.3 }}>
                            Name
                        </Text>

                        <View style={{ flexDirection: 'column', paddingVertical: 4 }}>
                            <TextInput onChangeText={(e) => setName(e)} style={{ borderWidth: 0, paddingBottom: 4 }} placeholderTextColor="#fff" value={name} />
                            <View style={{ borderBottomColor: '#000', borderBottomWidth: 1, opacity: 0.1 }} />
                        </View>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontSize: 11, fontWeight: '500', opacity: 0.3 }}>
                            username
                        </Text>

                        <View style={{ flexDirection: 'column', paddingVertical: 4 }}>
                            <TextInput onChangeText={(e) => setUserName(e)} style={{ borderWidth: 0, paddingBottom: 4 }} placeholderTextColor="#fff" value={userName} />
                            <View style={{ borderBottomColor: '#000', borderBottomWidth: 1, opacity: 0.1 }}>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontSize: 11, fontWeight: '500', opacity: 0.3 }}>
                            Bio
                        </Text>
                        <View style={{ flexDirection: 'column', paddingVertical: 4 }}>
                            <TextInput onChangeText={(e) => setBio(e)} style={{ borderWidth: 0, paddingBottom: 4 }} placeholderTextColor="#fff" value={bio} />
                            <View style={{ borderBottomColor: '#000', borderBottomWidth: 1, opacity: 0.1 }}>
                            </View>
                        </View>
                    </View>

                </View>
            </View>
            <View style={{ marginVertical: 12 }}>
                <Text style={{ paddingHorizontal: 10 }}>
                    Add link
                </Text>
                <View style={{ borderBottomWidth: 1, opacity: 0.2, marginTop: 13 }} />
            </View>
            <View style={{ marginVertical: 1 }}>
                <Text style={{ paddingHorizontal: 10, color: '#0095f6', fontWeight: '400' }}>
                    Add link
                </Text>
                <View style={{ borderBottomWidth: 1, opacity: 0.2, marginTop: 13 }} />
            </View>
            <View style={{ marginVertical: 12 }}>
                <Text style={{ paddingHorizontal: 10, color: '#0095f6', fontWeight: '400' }}>
                    Create Avatar
                </Text>
                <View style={{ borderBottomWidth: 1, opacity: 0.2, marginTop: 13 }} />
            </View>
            <View style={{ marginVertical: 12 }}>
                <Text style={{ paddingHorizontal: 10, color: '#0095f6', fontWeight: '400' }}>
                    Personale information settings
                </Text>
                <View style={{ borderBottomWidth: 1, opacity: 0.2, marginTop: 22 }} />
            </View>
        </SafeAreaView>
    );


}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'android' && 20,
        paddingHorizontal: 5,
        flexDirection: 'column',
    },
    top: {
        paddingHorizontal: 12,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    main: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30,

    }

})

export default EditProfile;

