import { useState, useRef } from "react";
import { StyleSheet, Image, Text, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { DropDown, Hearth, Logo, Message, Plus, Messenger, Settings, Save, Recents } from '../../../../Icons';
import BottomSheet from "react-native-gesture-bottom-sheet";

const ProfileSettings = ({ navigation }) => {

    const [show, setShow] = useState(false);



    return (
        <View>
            <View style={styles.main}>

                <TouchableOpacity onPress={() => {
                    navigation.navigate('Login')
                }} activeOpacity={0.5}>
                    <View style={[styles.text, { flexDirection: 'row', alignItems: 'center' }]}>
                        <View style={{ marginRight: 10 }}>
                            <Settings size={24} />
                        </View>
                        <Text>Settings</Text>
                    </View>
                </TouchableOpacity>

                <View style={[styles.text, { flexDirection: 'row', alignItems: 'center' }]}>
                    <View style={{ marginRight: 10 }}>
                        <Recents size={24} />
                    </View>
                    <Text>Archive</Text>
                </View>
                <View style={[styles.text, { flexDirection: 'row', alignItems: 'center' }]}>
                    <View style={{ marginRight: 10 }}>
                        <Recents size={24} />
                    </View>
                    <Text>Your Activity</Text>
                </View>
                <View style={[styles.text, { flexDirection: 'row', alignItems: 'center' }]}>
                    <View style={{ marginRight: 10 }}>
                        <Settings size={24} />
                    </View>
                    <Text>QR code</Text>
                </View>
                <View style={[styles.text, { flexDirection: 'row', alignItems: 'center' }]}>
                    <View style={{ marginRight: 10 }}>
                        <Save size={24} />
                    </View>
                    <Text>Saved</Text>
                </View>
                <View style={[styles.text, { flexDirection: 'row', alignItems: 'center' }]}>
                    <View style={{ marginRight: 10 }}>
                        <Settings size={24} />
                    </View>
                    <Text>Close Friends</Text>
                </View>
                <View style={[styles.text, { flexDirection: 'row', alignItems: 'center' }]}>
                    <View style={{ marginRight: 10 }}>
                        <Settings size={24} />
                    </View>
                    <Text>Favorites</Text>
                </View>
                <View style={[styles.text, { flexDirection: 'row', alignItems: 'center' }]}>
                    <View style={{ marginRight: 10 }}>
                        <Settings size={24} />
                    </View>
                    <Text>COVID-19 Information Center</Text>
                </View>
            </View>

        </View>
    )
}

export default ProfileSettings;


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
        paddingVertical: 10,
    },
    textBorder: {
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        opacity: 0.2,
    }
});