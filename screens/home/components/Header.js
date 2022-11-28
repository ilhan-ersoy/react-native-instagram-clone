import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback, Platform } from 'react-native';
import { DropDown, Hearth, Logo, Message, Plus, Messenger } from '../../../Icons';

const Header = () => {

    const [show, setShow] = useState(false);

    return (
        <View style={[styles.HeaderContainer]}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Logo />
                <TouchableOpacity activeOpacity={0.6} onPress={() => setShow(!show)}>
                    <DropDown size={17} />
                </TouchableOpacity>
            </View>
            {show && <LogoSub />}
            <View style={styles.Icons}>
                <TouchableOpacity activeOpacity={0.5} style={styles.button}>
                    <Plus size={30} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} style={styles.button}>
                    <Hearth size={28} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} style={styles.button}>
                    <Messenger size={28} />
                    <View style={styles.messengerNotification}>
                        <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 13 }}>2</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header;


const LogoSub = () => {
    return (
        <View style={styles.LogoSub}>
            <TouchableOpacity style={{ flex: 1, padding: 12, borderBottomWidth: 0.3, borderColor: '#CBCBCB' }}>
                <Text>Takip Edilenler</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, padding: 12 }}>
                <Text>Favoriler</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    HeaderContainer: {
        height: 36,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        zIndex: 10,
        paddingBottom: 5,
        marginTop: Platform.OS === 'ios' ? 20 : 0
    },
    Icons: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    button: {
        marginLeft: 20
    },
    LogoSub: {
        borderRadius: 4,
        position: 'absolute',
        top: 37,
        left: 15,
        width: 180,
        flex: 1,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#CBCBCB',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
    },
    messengerNotification: {
        backgroundColor: 'red',
        width: 16,
        height: 16,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 13,
        bottom: 18
    }
});