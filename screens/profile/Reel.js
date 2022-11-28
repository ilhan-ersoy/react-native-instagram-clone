import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Image } from "react-native";
import { Burger, DropDown, Play, Plus, Security, SinglePlus } from "../../Icons";
import { faker } from '@faker-js/faker';

function Reels() {


    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                {Array.from(Array(3), (_, i) =>
                    <View
                        style={styles.photo}
                        key={i}
                    >
                        <Image
                            style={{ width: '100%', height: '100%' }}
                            source={{
                                uri: faker.image.people()
                            }}
                        />

                        <View style={{ position: 'absolute', bottom: 10, left: 7 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Play size={12} />
                                <Text style={{ marginLeft: 4, fontSize: 10, color: '#fff', fontWeight: '600' }}>
                                    2.9m
                                </Text>
                            </View>
                        </View>
                    </View>)
                }
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {Array.from(Array(3), (_, i) =>
                    <View
                        style={styles.photo}
                        key={i}

                    >
                        <Image
                            style={{ width: '100%', height: '100%' }}
                            source={{
                                uri: faker.image.cats()
                            }}
                        />

                        <View style={{ position: 'absolute', bottom: 10, left: 7 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Play size={12} />
                                <Text style={{ marginLeft: 4, fontSize: 10, color: '#fff', fontWeight: '600' }}>
                                    2.9m
                                </Text>
                            </View>
                        </View>
                    </View>)
                }
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                {Array.from(Array(3), (_, i) =>
                    <View
                        style={styles.photo}
                        key={i}
                    >
                        <Image
                            style={{ width: '100%', height: '100%' }}
                            source={{
                                uri: faker.image.cats()
                            }}
                        />

                        <View style={{ position: 'absolute', bottom: 10, left: 7 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Play size={12} />
                                <Text style={{ marginLeft: 4, fontSize: 10, color: '#fff', fontWeight: '600' }}>
                                    2.9m
                                </Text>
                            </View>
                        </View>
                    </View>)
                }

            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                {Array.from(Array(3), (_, i) =>
                    <View
                        key={i}
                        style={styles.photo}
                    >
                        <Image
                            style={{ width: '100%', height: '100%' }}
                            source={{
                                uri: faker.image.fashion()
                            }}
                        />

                        <View style={{ position: 'absolute', bottom: 10, left: 7 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Play size={12} />
                                <Text style={{ marginLeft: 4, fontSize: 10, color: '#fff', fontWeight: '600' }}>
                                    2.9m
                                </Text>
                            </View>
                        </View>
                    </View>)
                }

            </View>
        </View>
    )
}

export default Reels;

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#fff',
    },
    photo: {
        width: '33%',
        height: 220,
        borderWidth: 2,
        borderColor: '#fff'
    }
});