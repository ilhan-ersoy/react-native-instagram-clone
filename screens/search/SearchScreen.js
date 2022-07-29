import {View, Text} from "react-native"
import { SafeAreaView, StyleSheet, TextInput, Image } from "react-native";
import { Carosel, Reels, ReelsFillWhite, Search } from "../../Icons";
import { faker } from '@faker-js/faker';
import { ScrollView } from "react-native";




const SearchScreen = () => {


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{height:'100%'}}>
                <View style={styles.header}>
                    <TextInput style={styles.searchInput} placeholder="Search" />
                    <View style={{position:'absolute',top:18,left:20}}>
                        <Search size={15}/>
                    </View>
                </View>
                <View style={[styles.content,{marginTop:20}]}>
                    <View style={{flexDirection:'row'}}>
                        <View style={{width:'65%',alignItems:'center'}}>
                            <View style={{width:'100%',flexDirection:'row'}}>
                                {new Array(2).fill(<Image
                                        style={[styles.exploreImg,{borderWidth:2,borderColor:'#fff'}]}
                                        source={{
                                            uri:faker.image.people()
                                        }}
                                /> )} 
                            <View style={{position:'absolute',right:7,top:3}}><Carosel size={24} /></View>
                            </View>
                            <View style={{width:'100%',flexDirection:'row'}}>
                                {new Array(2).fill(<Image
                                        style={[styles.exploreImg,{borderWidth:2,borderColor:'#fff'}]}
                                        source={{
                                            uri:faker.image.city()
                                        }}
                                /> )} 
                                <View style={{position:'absolute',right:7,top:3}}><Carosel size={24} /></View>

                            </View>
                        </View>
                        <View style={{width:'35%'}}>
                            <Image
                                style={[{width:'100%',height:250},{borderWidth:2,borderColor:'#fff'}]}
                                source={{
                                    uri:'https://instagram.fsaw3-1.fna.fbcdn.net/v/t51.2885-15/290526135_2240226369491508_7316866729585150502_n.jpg?stp=dst-jpg_e15_p320x320&cb=2d435ae8-326fec31&_nc_ht=instagram.fsaw3-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=DfEhoz_VTHgAX_kKcJk&tn=KRN-Xfh86jfLlR-R&edm=AI8qBrIBAAAA&ccb=7-5&ig_cache_key=Mjg2OTI1MzAzMTUwMzg3NzEyMA%3D%3D.2-ccb7-5&oh=00_AT8rlzOxhiFnRLCfcp3kEs-OxeC7XT2jJh1PY5k9fiPmTw&oe=62E3AE45&_nc_sid=a0bfed'
                                }}
                            />
                            <View style={{position:'absolute',right:10,top:10}}>  
                                <ReelsFillWhite size={24}/>   
                            </View>                
                        </View>
                    </View>
                    <View>
                        <View style={{width:'65%',alignItems:'center'}}>
                            <View style={{width:'100%',flexDirection:'row'}}>
                                {new Array(3).fill(<Image
                                        style={[styles.exploreImg,{borderWidth:2,borderColor:'#fff'}]}
                                        source={{
                                            uri:faker.image.animals()
                                        }}
                                /> )} 
                                <View style={{position:'absolute',right:7,top:3}}><Carosel size={24} /></View>

                                
                            </View>
                            <View style={{width:'100%',flexDirection:'row'}}>
                                {new Array(3).fill(<Image
                                        style={[styles.exploreImg,{borderWidth:2,borderColor:'#fff'}]}
                                        source={{
                                            uri:faker.image.business()
                                        }}
                                /> )} 
                                
                            </View>
                        </View>
                    </View>
                    <View>
                        <View style={{width:'65%',alignItems:'center'}}>
                            <View style={{width:'100%',flexDirection:'row'}}>
                                {new Array(3).fill(<Image
                                        style={[styles.exploreImg,{borderWidth:2,borderColor:'#fff'}]}
                                        source={{
                                            uri:faker.image.animals()
                                        }}
                                /> )} 
                            </View>
                            <View style={{width:'100%',flexDirection:'row'}}>
                                {new Array(3).fill(<Image
                                        style={[styles.exploreImg,{borderWidth:2,borderColor:'#fff'}]}
                                        source={{
                                            uri:faker.image.food()
                                        }}
                                /> )} 
                                <View style={{position:'absolute',right:10,top:10}}>  
                                    <ReelsFillWhite size={24}/>   
                                 </View>  
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
            
        </SafeAreaView>
    )
}
    
export default SearchScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff'
    },
    header: {
        flex:1,
        padding:10,
        paddingBottom:0
    },
    content: {
        flex:9,
        width:'100%'
    },
    searchInput: {
        backgroundColor:'#efefef',
        width:'100%',
        height:34,
        borderRadius:5,
        padding:13,
        paddingLeft:40
    },
    photo: {
        width:'33%',
        height:120,
        borderWidth:2,
        borderColor:'#fff'
    },
    reels: {
        width:'100%',
        height:120,
        borderWidth:2,
        borderColor:'#fff',
        backgroundColor:'red'
    },
    exploreImg: {
        width:'50%',
        height:125
    }
})