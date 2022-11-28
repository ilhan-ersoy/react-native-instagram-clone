import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { TextInput, Image } from "react-native";
import { Close, DropDown, Facebook, HidePassword, Logo, MetaIcon, ShowPassword } from "../../Icons";


const LoginScreen = ({ navigation }) => {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [hidePassword, setHidePassword] = useState(true);

    return (
        <View style={styles.container}>
            <View style={{ flex: 1 / 2 }}>
                <View style={styles.selectLang}>
                    <Text style={{ fontSize: 12, color: '#8e8e8e' }}>English (US)</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Image
                        style={{ width: 70, height: 70 }}
                        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/264px-Instagram_logo_2016.svg.png?20210403190622' }} />
                </View>
                <View style={styles.contentContainer}>
                    <View style={{ position: 'relative' }}>
                        <TextInput onChange={(e) => setName(e)} style={styles.inputs} placeholderTextColor="#dadbdb" placeholder="Username, email or mobile number" value={name} />
                        <TouchableOpacity onPress={() => setName('')} activeOpacity={0.6} style={[styles.hidePasswordIcon,{top:16}]}>
                            <Text>
                                {
                                    name
                                    &&
                                    <Close size={24} />
                                }
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <TextInput style={styles.inputs} onChangeText={(e) => setPassword(e)} secureTextEntry={hidePassword} value={password} placeholder="Password" />
                        <TouchableOpacity onPress={() => setHidePassword(!hidePassword)} activeOpacity={0.6} style={styles.hidePasswordIcon}>
                            {
                                !hidePassword
                                    ?
                                    <ShowPassword size={24} />
                                    :
                                    <HidePassword size={24} />
                            }
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.loginSec}>
                    <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                        <TouchableOpacity activeOpacity={0.7} style={styles.loginButton} onPress={navigation.navigate('Home')}>
                            <Text style={{ textAlign: 'center', marginTop: 17, fontSize: 15, color: '#fff', fontWeight: '600' }}>Log in</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Text style={{ fontWeight: '500', fontSize: 14, textAlign: 'center', marginTop: 30 }}>
                        Forgot password ?
                    </Text>
                </View>
            </View>
            <View style={{ position: 'absolute', bottom: 70, height: 50, width: '100%', paddingHorizontal: 20 }}>
                <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                    <TouchableOpacity activeOpacity={0.7} style={{ borderWidth: 1, borderColor: '#dadbdb', width: '100%', padding: 10, borderRadius: 3 }}>
                        <Text style={{ fontWeight: '600', textAlign: 'center' }}>
                            Create new account
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} style={{ width: '100%', padding: 10, borderRadius: 3, flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                        <View>
                            <MetaIcon width={60} height={12} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#f6fcfa',
        position: 'relative'
    },
    inputs: {
        width: '100%',
        borderWidth: 1,
        color: '#000',
        borderColor: '#dadbdb',
        height: 50,
        borderRadius: 4,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 12,
        fontWeight: '700'
    },
    contentContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        paddingHorizontal: 20,
        marginTop: 40
    },
    selectLang: {
        position: 'absolute',
        top: -70,
        left: '41%'
    },
    loginSec: {
        paddingHorizontal: 20,
        height: 50,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    loginButton: {
        height: 50,
        backgroundColor: '#bb00f7',
        borderRadius: 4,
        marginTop: 20
    },
    hidePasswordIcon: {
        position: 'absolute',
        right: 15,
        top: 12
    }
})

export default LoginScreen;

