import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { TextInput, Image } from "react-native";
import { ScrollView, FlatList } from "react-native";
import { Hearth, More, Comment, Message, BookMark, DropDown, LeftArrow, Plus, SinglePlus, DmSearch, Mute } from "../../../Icons";
import SingleMessage from "./SingleMessage";


const DirectMessage = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity opacity={0.6} onPress={() => navigation.goBack()}>
                        <LeftArrow color={'#000'} size={24} />
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                        <Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>ilhan.ers</Text> <DropDown size={14} />
                        </Text>
                        <View>
                            <Text style={{ fontSize: 12, marginTop: 2, opacity: 0.6 }}>Set a status</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Plus size={36} />
                    <SinglePlus size={48} />
                </View>
            </View>
            <View style={{ marginTop: 10 }}>
                <View style={{ position: 'absolute', bottom: 8, left: 10, zIndex: 99 }}>
                    <DmSearch size={18} />
                </View>
                <TextInput style={styles.searchInput} placeholder="       Search" />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
                    <Text style={{ fontWeight: '500', fontSize: 15 }}>Messages</Text>
                    <Text style={{ fontWeight: '300', fontSize: 15, color: '#2b96f6' }}>Requests</Text>
                </View>

                {Array.from(Array(10), (_, i) => <SingleMessage key={i} navigation={navigation} />)}

            </ScrollView>

        </View>
    )
}

export default DirectMessage;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 18,
        height: '100%',
        backgroundColor: '#fff',
    },
    searchInput: {
        backgroundColor: '#efefef',
        width: 330,
        height: 30,
        borderRadius: 13,
        padding: 18,
        fontSize: 16
    },
    userImg: {
        width: 52,
        height: 52,
        borderRadius: 100
    },
    messageContainer: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10
    },
    message: {
        flexDirection: 'row',
        alignItems: 'center',
    }
});