import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { TextInput, Image } from "react-native";
import { Burger, DropDown, Plus, Security, SinglePlus } from "../../Icons";
import Content from "./Content";
import { ScrollView } from "react-native";


function ProfileScreen({navigation}) {
    
    return (
        <ScrollView style={{height:'100%'}}>
            <View>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Security size={24}/>
                            <Text style={{fontWeight:'bold',fontSize:20,marginLeft:10}}>
                                ilhan_ers
                            </Text>
                            <TouchableOpacity style={{marginLeft:5}}>
                                <DropDown size={16}/>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <TouchableOpacity style={{marginRight:20}}>
                                <Plus size={30} />
                            </TouchableOpacity>
                            
                            <TouchableOpacity>
                                <Burger size={30} />
                            </TouchableOpacity>
                        </View>         
                        
                    </View>

                    <View style={styles.user}>
                        <View>
                            <Image style={{width:80,height:80,borderWidth:1,borderColor:'#BABABA',borderRadius:100}} source={{uri:'https://scontent.cdninstagram.com/v/t51.2885-19/240936026_508945976807276_3878467107109739721_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=108&_nc_ohc=FBZOZ3tRBe8AX8hzgaw&edm=APs17CUBAAAA&ccb=7-5&oh=00_AT_8lh3b7dbNeLBye0K-CI_KH2ed46hP0mv-m_XFrr40eg&oe=62DDE267&_nc_sid=978cb9'}} />
                        </View>
                        <View style={{flexDirection:'row',marginLeft:40, alignItems:'center'}}>
                            <View style={{alignItems:'center'}}>
                                <Text style={{fontWeight:'600',marginBottom:2,fontSize:18}}>0</Text>
                                <Text>Posts</Text>
                            </View>
                            <View style={styles.userBox}>
                                <Text style={{fontWeight:'600',marginBottom:2,fontSize:18}}>126</Text>
                                <Text>Followers</Text>
                            </View>
                            <View style={styles.userBox}>
                                <Text style={{fontWeight:'600',marginBottom:2,fontSize:18}}>209</Text>
                                <Text>Following</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text style={{marginTop:3,fontWeight:'400'}}>Ilhan Ersoy</Text>
                    </View>
                    <TouchableOpacity style={styles.status}>
                        <SinglePlus size={24} />
                        <Text style={{fontSize:12}}>
                            Set status
                        </Text>
                    </TouchableOpacity>
                    <View style={{marginTop:8}}>
                        <Text>
                            Software Developler  👨‍💻
                        </Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.edit}>
                            <Text style={{fontWeight:'450'}}>
                                Edit Profile
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>navigation.navigate('Login')} style={styles.edit}>
                            <Text style={{fontWeight:'450'}}>
                                Quit
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{alignSelf:'flex-start',flexDirection:'row',alignItems:'center'}}>
                        <View style={{marginTop:10,flexDirection:'column',alignItems:'center'}}>
                            <View style={styles.story}>
                                <Image style={{width:68,height:68,borderWidth:1,borderColor:'#BABABA',borderRadius:100}} source={{uri:'https://instagram.fsaw3-1.fna.fbcdn.net/v/t51.2885-15/203295320_190465583083074_1569209092314993715_n.jpg?stp=c0.247.640.640a_dst-jpg_e15_s150x150&_nc_ht=instagram.fsaw3-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=ASqTsY6q67kAX9lSnQ2&edm=AGW0Xe4BAAAA&ccb=7-5&oh=00_AT-1foBQrmzG86nawosX6Pi7iXEqxTm1TIBKGG3HfLZwaw&oe=62DF0F77&_nc_sid=acd11b'}} />
                            </View>
                            <Text style={{fontSize:13}}>
                                Software
                            </Text>
                        </View>
                        <View style={{marginTop:10,flexDirection:'column',alignItems:'center',marginLeft:10}}>
                            <View style={styles.story}>
                                <Image style={{width:68,height:68,borderWidth:1,borderColor:'#BABABA',borderRadius:100}} source={{uri:'https://instagram.fsaw3-1.fna.fbcdn.net/v/t51.2885-15/203295320_190465583083074_1569209092314993715_n.jpg?stp=c0.247.640.640a_dst-jpg_e15_s150x150&_nc_ht=instagram.fsaw3-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=ASqTsY6q67kAX9lSnQ2&edm=AGW0Xe4BAAAA&ccb=7-5&oh=00_AT-1foBQrmzG86nawosX6Pi7iXEqxTm1TIBKGG3HfLZwaw&oe=62DF0F77&_nc_sid=acd11b'}} />
                            </View>
                            <Text style={{fontSize:13}}>
                                Software
                            </Text>
                        </View>
                        <View style={{marginTop:10,flexDirection:'column',alignItems:'center',marginLeft:10}}>
                            <View style={[styles.story,{width:72,height:72}]}>
                                <SinglePlus size={50} />
                            </View>
                            <Text style={{fontSize:13}}>
                                New
                            </Text>
                        </View>
                    </View>
                </View>
                
                <View style={{height:2000}}>
                    <Content />
                </View>
           
            </View>
        </ScrollView>
    )
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        paddingTop:40,
        backgroundColor:'#fff',
        paddingHorizontal:20
    },
    header: {
        flexDirection:'row',
        justifyContent:'space-between'
    },
    user: {
        marginTop:17,
        flexDirection:'row',
        alignItems:'center'
    },
    userBox: {
        marginLeft:20,
        alignItems:'center'
    },
    status: {
        backgroundColor:'#f2f2f2',
        marginTop:10,
        width:110,
        paddingHorizontal:12,
        borderRadius:30,
        alignItems:'center',
        flexDirection:'row',
        paddingVertical:7,
    },
    edit: {
        backgroundColor:'#f1f1f1',
        width:'100%',
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        marginTop:8,
        height:30
    },
    story: {
        borderWidth:1,
        borderColor:'#e6e6e6',
        flexDirection:'column',
        width:76,
        height:76,
        borderRadius:100,
        alignItems:'center',
        justifyContent:'center'
    }
})


