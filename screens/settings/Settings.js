import { View, Text, StyleSheet, Platform } from "react-native"
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler";
import { ScrollView, TextInput } from "react-native";
import { SafeAreaView, Image } from "react-native";
import { Burger, Save, Search } from "../../Icons";
import { faker } from "@faker-js/faker";
import React from "react";
import { Dimensions, ImageBackground } from 'react-native';


function Settings() {


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.top}>
                <Text style={{ fontWeight: '700', fontSize: 22 }}>Shop</Text>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ marginRight: 20 }}>
                        <Save size={26} />
                    </View>
                    <View>
                        <Burger size={30} />
                    </View>
                </View>
            </View>

            <View style={styles.search}>
                <TextInput style={styles.searchInput} placeholder="Search shops" />
                <View style={{ position: 'absolute', top: 19, left: 24, opacity: 0.4 }}>
                    <Search size={20} />
                </View>
            </View>

            <View style={styles.videos}>
                <Text style={{ textAlign: 'center', fontWeight: '700' }}>
                    Videos
                </Text>
            </View>

            <View style={styles.content}>
                <ScrollView showsHorizontalScrollIndicator={false} style={{ height: '100%' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={styles.productImage} source={{ uri: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSx1AXyr_PNZgskbh2H5x9hAGcOSmulV-nvCr56ubWOHdEe-MLyzgPBELIJem9nUScVC2h2ePhbgoRANSTxPkm40pnC4K10NTQ_I50D8AU&usqp=CAE' }} />
                        <Image style={styles.productImage} source={{ uri: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS0D_J_Jgujh_krwAA9RHOKUAHFa_8NESXhesrrHBqgp6zGHjqqYDpF0PGPNzbiZn6zjWZ173XGmBEGNwC2t0h1s-0K_XRTkIaoAPqVLhk8qYkX2JeHKsd3Zw&usqp=CAE' }} />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={styles.productImage} source={{ uri: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQza9sfMmSjHznBXAb0FvneevuIlt_BTZxxVxUp2yUKzTipZ1L_oY8P6ubcZOue3PPq1aTK0sGhjk7hnrE4hsjriKwTDivRVzfspEkmDJL3A2bnWC6Mt_-Zsw&usqp=CAE' }} />
                        <Image style={styles.productImage} source={{ uri: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT_qNvT9k086XAviM36jXtkaouRqIECnBsw-g1u3JS6S51GDwx2aWKVSmD5ToZCfSCR1ITSjCYpuovG5icThgXX_RIRsDKMVss_AtrjjrfZ2ZCYjanZE0AFVw&usqp=CAE' }} />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={styles.productImage} source={{ uri: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSx1AXyr_PNZgskbh2H5x9hAGcOSmulV-nvCr56ubWOHdEe-MLyzgPBELIJem9nUScVC2h2ePhbgoRANSTxPkm40pnC4K10NTQ_I50D8AU&usqp=CAE' }} />
                        <Image style={styles.productImage} source={{ uri: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS0D_J_Jgujh_krwAA9RHOKUAHFa_8NESXhesrrHBqgp6zGHjqqYDpF0PGPNzbiZn6zjWZ173XGmBEGNwC2t0h1s-0K_XRTkIaoAPqVLhk8qYkX2JeHKsd3Zw&usqp=CAE' }} />
                    </View>
                </ScrollView>
            </View>

        </SafeAreaView>
    )
}

const windowWidth = Dimensions.get('window').width;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginTop: Platform.OS === 'android' && 20
    },
    search: {
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    searchInput: {
        backgroundColor: '#efefef',
        width: '100%',
        height: 38,
        borderRadius: 5,
        paddingLeft: 40,
        fontSize: 18
    },
    videos: {
        backgroundColor: '#efefef',
        width: '93%',
        height: 38,
        borderRadius: 5,
        fontSize: 18,
        marginHorizontal: 15,
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center'
    },
    content: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 3
    },
    productImage: {
        width: windowWidth / 2,
        height: 220,
        borderWidth: 2,
        borderColor: '#fff'
    }
});
export default Settings;    