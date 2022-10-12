import { View, Text, StyleSheet } from "react-native"
import { TextInput, TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler";
import { ScrollView } from "react-native";
import { SafeAreaView, Image } from "react-native";
import { Burger, Save, Search } from "../../Icons";
import { faker } from "@faker-js/faker";
import React from "react";

function ShopScreen() {
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.top}>
                <Text style={{ fontWeight: '700', fontSize: 22 }}>Shop</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Save size={26} />
                    <TouchableOpacity style={{ marginLeft: 25 }}>
                        <Burger size={26} />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView style={{ height: '100%' }}>
                <View style={styles.search}>
                    <TouchableWithoutFeedback >
                        <TextInput style={styles.searchInput} placeholder="Search shops" />
                        <View style={{ position: 'absolute', top: 8, left: 10, opacity: 0.4 }}>
                            <Search size={20} />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.categories}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ width: '100%' }}>
                        <TouchableOpacity style={styles.category}>
                            <Text style={{ fontWeight: '600' }}>Shops</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.category}>
                            <Text style={{ fontWeight: '600' }}>Videos</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.category}>
                            <Text style={{ fontWeight: '600' }}>Editor's picks</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.category}>
                            <Text style={{ fontWeight: '600' }}>Collections</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.category}>
                            <Text style={{ fontWeight: '600' }}>Guides</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>

            </ScrollView>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 15
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
        padding: 13,
        paddingLeft: 40,
        fontSize: 18
    },
    categories: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingLeft: 4,
        paddingTop: 2
    },
    category: {
        backgroundColor: '#efefef',
        padding: 10,
        borderRadius: 8,
        paddingHorizontal: 20,
        marginLeft: 10
    },
    content: {

    }
});
export default ShopScreen;