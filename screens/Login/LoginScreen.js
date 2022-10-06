import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { TextInput, Image } from "react-native";
import { Touchable } from "react-native-web";
import { DropDown, Facebook, Logo } from "../../Icons";


const LoginScreen = ({ navigation }) => {

    const onChangeText = (text) => {
        //console.log(text); 
    }

    const [showPassword, setShowPassword] = useState(true);

    return (
        <View style={styles.LoginScreen}>
            <TouchableOpacity style={{ marginBottom: 80, opacity: 0.7, flexDirection: 'row', alignItems: 'center' }}>
                <Text>
                    English
                </Text>
                <DropDown size={14} />
            </TouchableOpacity>
            <View>
                <Logo width={193} height={50} />
            </View>
            <View style={styles.form}>
                <TextInput style={styles.emailInput} placeholder="Phone Number, email or username" />

                <View style={{ position: 'relative' }}>
                    <TextInput style={styles.passwordInput} placeholder="Password" textContentType={"password"} secureTextEntry={showPassword ? true : false} />
                    {showPassword ?
                        <TouchableOpacity onPress={() => setShowPassword(false)} opacity={0.7}>
                            <Text></Text>
                            <Image
                                source={{
                                    uri: 'https://cdn-icons-png.flaticon.com/128/159/159604.png'
                                }}
                                style={styles.hidePasswordIcon}
                            />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={() => setShowPassword(true)} opacity={0.7}>
                            <Text></Text>
                            <Image
                                source={{
                                    uri: 'https://cdn-icons.flaticon.com/png/128/2710/premium/2710718.png?token=exp=1658330388~hmac=d45f86476112b93e0f0aee55936aa6de'
                                }}
                                style={styles.hidePasswordIcon}
                            />
                        </TouchableOpacity>
                    }

                </View>

                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={[styles.loginButton]}>
                    <Text style={{ color: 'white' }}>
                        Log In
                    </Text>
                </TouchableOpacity>

                <View style={styles.forgetPassword}>
                    <Text style={{ fontSize: 12 }}>Forgot your login details?</Text>
                    <Text style={{ fontSize: 12, marginLeft: 2, fontWeight: 'bold' }}>Get help logging in.</Text>
                </View>


                <View style={styles.OrDiv}>
                    <View style={{ borderWidth: 0.4, borderColor: '#C5C5C5', flex: 3, height: 0 }}>
                    </View>
                    <View style={{ flex: 1, height: 0 }}>
                    </View>
                    <View style={{ position: 'absolute', bottom: -7 }}>
                        <Text style={{ opacity: 0.8 }}>OR</Text>
                    </View>
                    <View style={{ borderWidth: 0.4, borderColor: '#C5C5C5', flex: 3, height: 0 }}>
                    </View>
                </View>

                <View style={styles.LoginWithFacebook}>
                    <View>
                        <Facebook size={28} />
                    </View>
                    <Text style={{ color: '#1877F2', marginLeft: 10, fontWeight: 'bold' }}>Log in with Facebook</Text>
                </View>

            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    LoginScreen: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 100,

    },
    emailInput: {
        borderWidth: 1,
        borderColor: '#E0DDDD',
        backgroundColor: '#E8E6E64A',
        width: 330,
        height: 42,
        borderRadius: 5,
        padding: 13,
    },
    passwordInput: {
        borderWidth: 1,
        borderColor: '#E0DDDD',
        backgroundColor: '#E8E6E64A',
        width: 330,
        height: 42,
        borderRadius: 5,
        padding: 10,
        marginTop: 10
    },
    form: {
        marginTop: 20
    },
    hidePasswordIcon: {
        width: 28,
        height: 28,
        position: 'absolute',
        right: 10,
        bottom: 20,
        opacity: 0.3
    },
    loginButton: {
        borderColor: '#E0DDDD',
        backgroundColor: '#1877F2',
        width: 330,
        height: 42,
        borderRadius: 5,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.2
    },
    forgetPassword: {
        width: 330,
        height: 42,
        borderRadius: 5,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'row'
    },
    OrDiv: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'start',
        marginTop: 10
    },
    LoginWithFacebook: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'start',
        marginTop: 30,
        alignItems: 'center'
    }
});

export default LoginScreen;

