import { useState } from "react";
import { StyleSheet, Image, Text, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { DropDown, Hearth, Logo, Message, Plus, Messenger } from '../../../../Icons';

const PostMore = () => {

    const [show, setShow] = useState(false);

    return (
        <View>
            <View style={styles.topBar}>
                <View style={styles.iconContainer}>
                    <View style={styles.icon}>
                        <Image
                            style={{ width: 28, height: 28, marginRight: 3 }}
                            source={{
                                uri: 'https://cdn-icons.flaticon.com/png/128/1358/premium/1358023.png?token=exp=1659106066~hmac=b1af27f20b2d39079686e05ee8a25796',
                            }}
                        />
                    </View>
                    <Text style={{ marginTop: 5, fontSize: 12, fontWeight: '600' }}>
                        Share
                    </Text>
                </View>
                <View style={styles.iconContainer}>
                    <View style={styles.icon}>
                        <Image
                            style={{ width: 28, height: 28 }}
                            source={{
                                uri: 'https://cdn-icons-png.flaticon.com/512/3462/3462381.png',
                            }}
                        />
                    </View>
                    <Text style={{ marginTop: 5, fontSize: 12, fontWeight: '600' }}>
                        Link
                    </Text>
                </View>
                <View style={styles.iconContainer}>
                    <View style={styles.icon}>
                        <Image
                            style={{ width: 28, height: 28 }}
                            source={{
                                uri: 'https://cdn-icons.flaticon.com/png/128/3031/premium/3031156.png?token=exp=1659106102~hmac=2139ac7a401dfdf0e7862e37ae8b674a',
                            }}
                        />
                    </View>
                    <Text style={{ marginTop: 5, fontSize: 12, fontWeight: '600' }}>
                        Report
                    </Text>
                </View>
            </View>

            <View style={styles.main}>
                <View style={styles.textBorder} />
                <View style={styles.text}>
                    <Text>Why you're seeing this post</Text>
                </View>
                <View style={styles.textBorder} />

                <View style={styles.text}>
                    <Text>Add to favorites</Text>
                </View>

                <View style={styles.text}>
                    <Text>Hide</Text>
                </View>

                <TouchableOpacity style={styles.text}>
                    <Text>Unfollow</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}

export default PostMore;


const styles = StyleSheet.create({
    icon: {
        width: 54,
        height: 54,
        borderWidth: 1,
        borderRadius: 100,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconContainer: {
        alignItems: 'center'
    },
    topBar: {
        width: '100%',
        marginTop: 25,
        flexDirection: 'row',
        paddingHorizontal: 34,
        justifyContent: 'space-between'
    },
    main: {
        marginTop: 20
    },
    text: {
        borderColor: 'black',
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    textBorder: {
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,

    }
});