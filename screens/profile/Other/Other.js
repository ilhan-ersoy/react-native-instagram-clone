import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { TextInput, Image } from "react-native";
import { Burger, DropDown, LeftArrow, MoreAccounts, Plus, Security, SinglePlus, Verified, Bell } from "../../../Icons";
import OtherContent from "../OtherContent";
import { ScrollView } from "react-native";
import { useState } from "react";
import MoreAccount from './MoreAccount';

function OtherProfileScreen({ navigation }) {

    const [discoverPeople, setDiscoverPeople] = useState(false);

    const [follow, setFollow] = useState(false);

    return (
        <ScrollView style={{ height: '100%' }}>
            <View>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.goBack()}>
                                <View>
                                    <LeftArrow color={'#000'} size={24} />
                                </View>
                            </TouchableOpacity>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 12 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 10 }}>
                                        zuck
                                    </Text>
                                    <View style={{ marginLeft: 3 }}>
                                        <Verified size={13} />
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity style={{ marginRight: 20 }}>
                                <Bell size={24} />
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Burger size={30} />
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View style={styles.user}>
                        <View>
                            <Image style={{ width: 80, height: 80, borderWidth: 1, borderColor: '#BABABA', borderRadius: 100 }} source={{ uri: 'https://a9p9n2x2.stackpathcdn.com/wp-content/blogs.dir/1/files/2020/05/Mark-Zuckerberg-e1590173646243-960x722.jpg' }} />
                        </View>
                        <View style={{ flexDirection: 'row', marginLeft: 40, alignItems: 'center' }}>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ fontWeight: '600', marginBottom: 2, fontSize: 18 }}>233</Text>
                                <Text>Posts</Text>
                            </View>
                            <View style={styles.userBox}>
                                <Text style={{ fontWeight: '600', marginBottom: 2, fontSize: 18 }}>10M</Text>
                                <Text>Followers</Text>
                            </View>
                            <View style={styles.userBox}>
                                <Text style={{ fontWeight: '600', marginBottom: 2, fontSize: 18 }}>456</Text>
                                <Text>Following</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text style={{ marginTop: 3, fontWeight: '600' }}>Mark Zuckerberg</Text>
                    </View>
                    <View style={styles.followerInfo}>
                        <View style={{ position: 'relative' }}>
                            <Image style={{ width: 30, height: 30, borderWidth: 1, borderColor: '#BABABA', borderRadius: 100 }} source={{ uri: 'https://instagram.fsaw3-1.fna.fbcdn.net/v/t51.2885-19/278931269_360124899498969_9006978846103417088_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fsaw3-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=8jM7PozP-OsAX_MaAGp&edm=AHG7ALcBAAAA&ccb=7-5&oh=00_AT-9VaAJcwP-T-6_cnm9cnoXQsFDI-dNZB7lfbe656EEnQ&oe=62EBBFCE&_nc_sid=5cbaad' }} />
                            <Image style={{ width: 30, height: 30, borderWidth: 1, borderColor: '#BABABA', borderRadius: 100, position: 'absolute', left: 25 }} source={{ uri: 'https://instagram.fsaw3-1.fna.fbcdn.net/v/t51.2885-19/179176989_846467222614893_138186484616584180_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fsaw3-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=JV2bSdzxZKgAX-o6Ol_&edm=APU89FABAAAA&ccb=7-5&oh=00_AT-BjxCwQXqOMTJ3SZUoByi8kBBEz3JbET01a0S3fbYQEw&oe=62EAEA31&_nc_sid=86f79a' }} />
                        </View>
                        <Text style={{ marginLeft: 35, fontSize: 11, fontWeight: '400', maxWidth: 220 }}>
                            Followed by <Text style={{ fontWeight: '600' }}>cristiano</Text>, <Text style={{ fontWeight: '600' }}>kingjames</Text> and 1 <Text style={{ fontWeight: '600' }}>other</Text>
                        </Text>
                    </View>
                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity style={[styles.follow, { width: '45%' }]}>
                            <Text style={{ fontWeight: '600', color: '#fff' }}>
                                {!follow ? 'Follow' : 'Following'}
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.message}>
                            <Text style={{ fontWeight: '400' }}>
                                Message
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setDiscoverPeople(!discoverPeople)} style={styles.moreAccounts}>
                            <MoreAccounts selected={discoverPeople} size={16} />
                        </TouchableOpacity>
                    </View>

                    {discoverPeople
                        &&
                        <View style={styles.discoverPeople}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 4, alignItems: 'center' }}>
                                <Text style={{ fontWeight: '500', marginTop: -3, fontSize: 12 }}>
                                    Suggested for you
                                </Text>
                                <Text style={{ fontWeight: '600', marginTop: -3, fontSize: 12, color: '#1FA1FF' }}>
                                    See All
                                </Text>
                            </View>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ width: '100%' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    {Array.from(Array(30), (_, i) => <MoreAccount key={i} />)}
                                </View>
                            </ScrollView>

                        </View>
                    }

                </View>

                <View style={{ height: 2000 }}>
                    <OtherContent />
                </View>

            </View>
        </ScrollView>
    )
}

export default OtherProfileScreen;

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingBottom: 25
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
    followerInfo: {
        marginTop: 10,
        width: '100%',
        paddingHorizontal: 12,
        borderRadius: 30,
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 7,
    },
    follow: {
        backgroundColor: '#5793EA',
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
    },
    message: {
        backgroundColor: '#efefef',
        borderRadius: 5,
        width: '45%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 8,
        height: 30,
        marginLeft: 6
    },
    moreAccounts: {
        backgroundColor: '#efefef',
        width: '8%',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 8,
        height: 30,
        marginLeft: 6
    },
    discoverPeople: {
        paddingVertical: 15,

    }
})


