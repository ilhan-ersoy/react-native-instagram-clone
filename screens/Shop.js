import {View, Text, StyleSheet} from "react-native"
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

function ShopScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.headerParent}>
                <View style={styles.header}>
                    <View style={styles.icon}>
                        <Text>
                            SVG BURAYA
                        </Text>
                    </View>
                </View>
            </View>

            <View style={styles.bottom}>
                <View style={{flex:1,justifyContent:'start',paddingTop:40}}>
                    <View style={{flex:1/2,alignItems:'center'}}>
                        <View style={{alignItems:'start',borderWidth:1,borderColor:'black',width:'90%',marginHorizontal:30,padding:15}}>
                            <Text>
                                INPUT
                            </Text>
                        </View>
                        <View style={{alignItems:'start',borderWidth:1,borderColor:'black',width:'90%',marginHorizontal:30,marginTop:30,padding:15}}>
                            <Text>
                                INPUT
                            </Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={{color:'black',fontSize:18, fontWeight:'bold'}}>
                                Log In
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:'#fff'
    },
    header: {
        flex:2,
        borderRadius:'0% 100% 50% 50% / 68% 68% 32% 32%'
      
    },
    bottom: {
        flex:3,
    },
    headerParent: {
        backgroundColor:'#8fa9d4',
        flex:2,
        borderRadius:'0% 100% 50% 50% / 68% 68% 32% 32%',
        width:1400,
        height:300
    },
    loginButton: {
        borderColor:'#E0DDDD',
        backgroundColor:'#ffe752',
        width:330,
        height:42,
        borderRadius:5,
        marginTop:20,
        justifyContent:'center',
        alignItems:'center',
    },
    icon: {
        position:'absolute',
        backgroundColor:'blue',
        top:100,
        left:130,
        padding:10
    }
    
});
export default ShopScreen;