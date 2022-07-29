import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-native';
import stories from "../../../data/Stories";
import { LinearGradient } from 'expo-linear-gradient';
import { Plus, AddStory } from '../../../Icons';

const Stories = () => {
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{width:'100%',padding:10,paddingTop:9,borderBottomWidth:1,borderColor:'#DADADA'}}>
            {stories.map((story) => (
                <View key={story.id} style={styles.storyContainer}>
                        <LinearGradient
                            style={styles.story}
                            colors={['#DE0046', '#F7A34B']}>
                            <Image
                                style={styles.userAvatar}
                                source={{
                                    uri:story.user.img,
                                }}
                            />
                        </LinearGradient>
                        {story.yourStory 
                            && 
                            <View style={styles.addStoryIcon}>
                                <AddStory size={24}/>
                            </View>
                        }
                    <Text style={styles.userName}>
                        {story.user.name.substring(0,10) + `${story.user.name.length > 10 ? '...' : ''}`}
                    </Text>
                </View>
            ))}
        </ScrollView>
    )
}

export default Stories;


const styles = StyleSheet.create({
    storyContainer: {
        flexDirection:'column'
    },
    story: {
       width:65,
       height:65,
       borderRadius:30,
       flexDirection:'column',
       alignItems:'center',
       justifyContent:'center',
       marginRight:30
   },
   userAvatar: {
       width:60,
       height:60,
       borderWidth:2,
       borderColor:'#fff', 
       borderRadius:60
   },
   userName: {
       marginTop:4,
       fontSize:12,
       marginLeft:4
   },
   addStoryIcon: {
       position:'absolute',
       bottom:16,
       right:28,
   }
});