import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { TextInput, Image } from "react-native";
import { Burger, DropDown, Plus, Security, SinglePlus } from "../../Icons";
import Content from "./Content";
import { ScrollView } from "react-native";
import { useRef } from 'react';
import BottomSheet from "react-native-gesture-bottom-sheet";
import ProfileSettings from '../home/components/BottomSheets/ProfileSettings';
import { faker } from '@faker-js/faker';



function ProfileScreen({ navigation }) {

    const bottomSheet = useRef();

    return (
        <ScrollView style={{ height: '100%' }}>
            <View>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Security size={24} />
                            <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 10 }}>
                                ilhan_ers
                            </Text>
                            <TouchableOpacity style={{ marginLeft: 5 }}>
                                <DropDown size={16} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity activeOpacity={0.6} style={{ marginRight: 20 }}>
                                <Plus size={30} />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => bottomSheet.current.show()}>
                                <Burger size={30} />
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View style={styles.user}>
                        <View>
                            <Image style={{ width: 80, height: 80, borderWidth: 1, borderColor: '#BABABA', borderRadius: 100 }} source={require('../../assets/img/ilhan_ers.jpg')} />
                        </View>
                        <View style={{ flexDirection: 'row', marginLeft: 40, alignItems: 'center' }}>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ fontWeight: '600', marginBottom: 2, fontSize: 18 }}>0</Text>
                                <Text>Posts</Text>
                            </View>
                            <View style={styles.userBox}>
                                <Text style={{ fontWeight: '600', marginBottom: 2, fontSize: 18 }}>126</Text>
                                <Text>Followers</Text>
                            </View>
                            <View style={styles.userBox}>
                                <Text style={{ fontWeight: '600', marginBottom: 2, fontSize: 18 }}>209</Text>
                                <Text>Following</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text style={{ marginTop: 3, fontWeight: '400' }}>Ilhan Ersoy</Text>
                    </View>
                    <TouchableOpacity style={styles.status}>
                        <SinglePlus size={24} />
                        <Text style={{ fontSize: 12 }}>
                            Set status
                        </Text>
                    </TouchableOpacity>
                    <View style={{ marginTop: 8 }}>
                        <Text>
                            Software Developler  👨‍💻
                        </Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate("EditProfile")} style={styles.edit}>
                            <Text style={{ fontWeight: '450' }}>
                                Edit Profile
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ alignSelf: 'flex-start', flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ marginTop: 10, flexDirection: 'column', alignItems: 'center' }}>
                            <View style={styles.story}>
                                <Image style={{ width: 68, height: 68, borderWidth: 1, borderColor: '#BABABA', borderRadius: 100 }} source={{ uri: faker.image.city() }} />
                            </View>
                            <Text style={{ fontSize: 13 }}>
                                Software
                            </Text>
                        </View>
                        <View style={{ marginTop: 10, flexDirection: 'column', alignItems: 'center', marginLeft: 10 }}>
                            <View style={styles.story}>
                                <Image style={{ width: 68, height: 68, borderWidth: 1, borderColor: '#BABABA', borderRadius: 100 }} source={{ uri: faker.image.abstract() }} />
                            </View>
                            <Text style={{ fontSize: 13 }}>
                                Movie
                            </Text>
                        </View>
                        <View style={{ marginTop: 10, flexDirection: 'column', alignItems: 'center', marginLeft: 10 }}>
                            <View style={[styles.story, { width: 72, height: 72 }]}>
                                <SinglePlus size={50} />
                            </View>
                            <Text style={{ fontSize: 13 }}>
                                New
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{ height: 2000 }}>
                    <Content />
                </View>
            </View>
            <BottomSheet hasDraggableIcon ref={bottomSheet} height={'400'}>
                <ProfileSettings navigation={navigation} />
            </BottomSheet>
        </ScrollView>
    )
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        backgroundColor: '#fff',
        paddingHorizontal: 20
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    user: {
        marginTop: 17,
        flexDirection: 'row',
        alignItems: 'center'
    },
    userBox: {
        marginLeft: 20,
        alignItems: 'center'
    },
    status: {
        backgroundColor: '#f2f2f2',
        marginTop: 10,
        width: 110,
        paddingHorizontal: 12,
        borderRadius: 30,
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 7,
    },
    edit: {
        backgroundColor: '#f1f1f1',
        width: '100%',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 8,
        height: 30
    },
    story: {
        borderWidth: 1,
        borderColor: '#e6e6e6',
        flexDirection: 'column',
        width: 76,
        height: 76,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'
    }
})


