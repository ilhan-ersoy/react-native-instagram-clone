import {View, Text, StyleSheet} from "react-native"
import { TextInput, TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler";
import { ScrollView } from "react-native";
import { SafeAreaView, Image } from "react-native";
import { Burger, Save, Search } from "../../Icons";
import { faker } from "@faker-js/faker";

function ShopScreen() {
    return (
        <SafeAreaView style={styles.container}>
            
            <View style={styles.top}>
                    <Text style={{fontWeight:'700',fontSize:22}}>Shop</Text>
                    <View style={{flexDirection:'row'}}>
                        <Save size={26} />
                        <TouchableOpacity style={{marginLeft:25}}>
                            <Burger size={26} />
                        </TouchableOpacity>
                    </View>
            </View>

            <ScrollView style={{height:'100%'}}>
                <View style={styles.search}>
                    <TouchableWithoutFeedback >
                        <TextInput style={styles.searchInput} placeholder="Search shops" />
                        <View style={{position:'absolute',top:8,left:10,opacity:0.4}}>
                            <Search size={20}/>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.categories}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{width:'100%'}}>
                        <TouchableOpacity style={styles.category}>
                            <Text style={{fontWeight:'600'}}>Shops</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.category}>
                            <Text style={{fontWeight:'600'}}>Videos</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.category}>
                            <Text style={{fontWeight:'600'}}>Editor's picks</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.category}>
                            <Text style={{fontWeight:'600'}}>Collections</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.category}>
                            <Text style={{fontWeight:'600'}}>Guides</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>

            
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:1,borderRightWidth:3,borderColor:'#fff'}}>
                        <View style={{height:180}}>
                            <View style={{flexDirection:'row',width:'100%'}}>
                                <Image
                                    style={{width:'50%',height:90,borderRightWidth:1}}
                                    source={{
                                        uri:`${faker.image.fashion(453,453,true)}`,
                                    }}
                                />
                                <Image
                                    style={{width:'50%',height:90}}
                                    source={{
                                        uri:`${faker.image.fashion(453,453,true)}`,
                                    }}
                                />
                            </View>
                            <View style={{flexDirection:'row',width:'100%'}}>
                                <Image
                                    style={{width:'50%',height:90}}
                                    source={{
                                        uri:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTLVff6vuTrhxbUj6fW9OE1lhcaL2Doz4fBSchuIArIv2mqCUGHU131DORCTDjD5OMnmOTpUN5c5lOAh9rpJmj7VqKYuKYNGfONso7PpRTtzGhcdo6Ag-n40Gk&usqp=CAE',
                                    }}
                                />
                                <Image
                                    style={{width:'50%',height:90}}
                                    source={{
                                        uri:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT2AvMECGLjCW3EuG36fco5LSF5dKpnQ1vVlfQV24HiM3m_yXF1bzl44UNPfLEn4WL6j5gV_JwyJnRDTsOHC-dYfU3cvfJVkXIzKm9_MVfW&usqp=CAE',
                                    }}
                                />
                            </View>
                        </View>
                        <View style={{height:180}}>
                            <Image
                                style={{width:'100%',height:180,borderRightWidth:1}}
                                source={{
                                    uri:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQkyAMB_LOtlV53T8P84vVibkw8Tun8i1Fj--dSjDT7BCmypkONO3YZGTa5ImgaXB-MGaM3uUo_nsjRVFAOzxIPZewtjOG8et9-I2dyaSFv6g80KST7X2GMIg&usqp=CAE',
                                }}
                            />
                        </View>
                        <View style={{height:180}}>
                            <Image
                                style={{width:'100%',height:180,borderRightWidth:1}}
                                source={{
                                    uri:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQkyAMB_LOtlV53T8P84vVibkw8Tun8i1Fj--dSjDT7BCmypkONO3YZGTa5ImgaXB-MGaM3uUo_nsjRVFAOzxIPZewtjOG8et9-I2dyaSFv6g80KST7X2GMIg&usqp=CAE',
                                }}
                            />
                        </View>
                        <View style={{height:180}}>
                            <Image
                                style={{width:'100%',height:180,borderRightWidth:1}}
                                source={{
                                    uri:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTwWz1NEK2wGXeILI6q45rrIGqm6_ukIMSYw93zdtWXWU0p8XaLUme-WJXwl7r86FGod125D7tKIu9p59lDGLyB32TidNwY5pk6bOEuU2tmqxZeBdpIzqTxpA&usqp=CAE',
                                }}
                            />
                        </View>
                    </View>
                    <View style={{flex:1}}>
                        <View style={{height:180}}>
                            <Image
                                style={{width:'100%',height:180,borderRightWidth:1}}
                                source={{
                                    uri:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQFa8yA3xjlGQ2l6hSRIn6oOn0XZGsYSfrj5-bAP25gVgjOcaj_sWm32QiEBrlWJQ2MfAclwn9GW8UjGjVshSaeZeXwSsD4y25SOelILRCOU6eRtRCbuzTG&usqp=CAE',
                                }}
                            />
                        </View>
                        <View style={{height:180,borderTopWidth:3,borderColor:'#fff'}}>
                            <Image
                                style={{width:'100%',height:180,borderRightWidth:1}}
                                source={{
                                    uri:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQkyAMB_LOtlV53T8P84vVibkw8Tun8i1Fj--dSjDT7BCmypkONO3YZGTa5ImgaXB-MGaM3uUo_nsjRVFAOzxIPZewtjOG8et9-I2dyaSFv6g80KST7X2GMIg&usqp=CAE',
                                }}
                            />
                        </View>
                        <View style={{height:180}}>
                            <Image
                                style={{width:'100%',height:180,borderRightWidth:1}}
                                source={{
                                    uri:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQkyAMB_LOtlV53T8P84vVibkw8Tun8i1Fj--dSjDT7BCmypkONO3YZGTa5ImgaXB-MGaM3uUo_nsjRVFAOzxIPZewtjOG8et9-I2dyaSFv6g80KST7X2GMIg&usqp=CAE',
                                }}
                            />
                        </View>
                        <View style={{height:180,borderTopWidth:3,borderColor:'#fff'}}>
                            <Image
                                style={{width:'100%',height:180,borderRightWidth:1}}
                                source={{
                                    uri:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQkyAMB_LOtlV53T8P84vVibkw8Tun8i1Fj--dSjDT7BCmypkONO3YZGTa5ImgaXB-MGaM3uUo_nsjRVFAOzxIPZewtjOG8et9-I2dyaSFv6g80KST7X2GMIg&usqp=CAE',
                                }}
                            />
                        </View>
                    </View>
                </View>            
            </ScrollView>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff',
    },
    top: {
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:20,
        paddingVertical:15
    },
    search: {
        paddingVertical:10,
        paddingHorizontal:15,
    },
    searchInput: {
        backgroundColor:'#efefef',
        width:'100%',
        height:38,
        borderRadius:5,
        padding:13,
        paddingLeft:40,
        fontSize:18
    },
    categories: {
        paddingVertical:10,
        paddingHorizontal:15,
        flexDirection:'row',
        justifyContent:'space-around',
        paddingLeft:4,
        paddingTop:2
    },
    category: {
        backgroundColor:'#efefef',
        padding:10,
        borderRadius:8,
        paddingHorizontal:20,
        marginLeft:10
    },
    content: {
        
    }
});
export default ShopScreen;