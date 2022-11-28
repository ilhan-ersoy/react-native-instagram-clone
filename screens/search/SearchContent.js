import { View, Text } from "react-native"
import { SafeAreaView, StyleSheet, TextInput, Image, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import { Carosel, Reels, ReelsFillWhite, Search } from "../../Icons";
import { faker } from '@faker-js/faker';
import { ScrollView } from "react-native";
import { useState } from "react";




const SearchContent = ({ navigation }) => {

    const [showRecent, setShowRecent] = useState(false);


    return (
        <View style={[styles.content, { marginTop: 5 }]}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ width: '65%', alignItems: 'center' }}>
                    <View style={{ width: '100%', flexDirection: 'row' }}>
                        {Array.from(Array(2), (_, i) =>
                            <TouchableWithoutFeedback onPress={() => navigation.navigate('Explore', { img: faker.image.fashion(500, 400, true), desc: faker.lorem.lines() })}>
                                <Image
                                    style={[styles.exploreImg, { borderWidth: 2, borderColor: '#fff' }]}
                                    source={{
                                        uri: faker.image.people()
                                    }}
                                />
                            </TouchableWithoutFeedback>)
                        }
                        <View style={{ position: 'absolute', right: 7, top: 3 }}><Carosel size={24} /></View>
                    </View>
                    <View style={{ width: '100%', flexDirection: 'row' }}>
                        {Array.from(Array(2), (_, i) =>
                            <Image
                                style={[styles.exploreImg, { borderWidth: 2, borderColor: '#fff' }]}
                                source={{
                                    uri: faker.image.city()
                                }}
                            />)
                        }
                        <View style={{ position: 'absolute', right: 7, top: 3 }}><Carosel size={24} /></View>

                    </View>
                </View>
                <View style={{ width: '35%' }}>
                    <Image
                        style={[{ width: '100%', height: 250 }, { borderWidth: 2, borderColor: '#fff' }]}
                        source={{
                            uri: faker.image.abstract()
                        }}
                    />
                    <View style={{ position: 'absolute', right: 10, top: 10 }}>
                        <ReelsFillWhite size={24} />
                    </View>
                </View>
            </View>
            <View>
                <View style={{ width: '65%', alignItems: 'center' }}>
                    <View style={{ width: '100%', flexDirection: 'row' }}>
                        {Array.from(Array(3), (_, i) =>
                            <Image
                                style={[styles.exploreImg, { borderWidth: 2, borderColor: '#fff' }]}
                                source={{
                                    uri: faker.image.animals()
                                }}
                            />)
                        }
                        <View style={{ position: 'absolute', right: 7, top: 3 }}><Carosel size={24} /></View>
                    </View>
                    <View style={{ width: '100%', flexDirection: 'row' }}>

                        {Array.from(Array(3), (_, i) =>
                            <Image
                                style={[styles.exploreImg, { borderWidth: 2, borderColor: '#fff' }]}
                                source={{
                                    uri: faker.image.business()
                                }}
                            />)
                        }
                    </View>
                </View>
            </View>
            <View>
                <View style={{ width: '65%', alignItems: 'center' }}>
                    <View style={{ width: '100%', flexDirection: 'row' }}>
                        {Array.from(Array(3), (_, i) =>
                            <Image
                                style={[styles.exploreImg, { borderWidth: 2, borderColor: '#fff' }]}
                                source={{
                                    uri: faker.image.animals()
                                }}
                            />)
                        }
                    </View>
                    <View style={{ width: '100%', flexDirection: 'row' }}>
                        {Array.from(Array(3), (_, i) =>
                            <Image
                                style={[styles.exploreImg, { borderWidth: 2, borderColor: '#fff' }]}
                                source={{
                                    uri: faker.image.food()
                                }}
                            />)
                        }

                        <View style={{ position: 'absolute', right: 10, top: 10 }}>
                            <ReelsFillWhite size={24} />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default SearchContent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        flex: 1,
        padding: 10,
        paddingBottom: 0
    },
    content: {
        flex: 9,
        width: '100%'
    },
    searchInput: {
        backgroundColor: '#efefef',
        width: '100%',
        height: 38,
        borderRadius: 5,
        padding: 13,
        paddingLeft: 40,
        fontSize: 12
    },
    photo: {
        width: '33%',
        height: 120,
        borderWidth: 2,
        borderColor: '#fff'
    },
    reels: {
        width: '100%',
        height: 120,
        borderWidth: 2,
        borderColor: '#fff',
        backgroundColor: 'red'
    },
    exploreImg: {
        width: '50%',
        height: 125
    }
})