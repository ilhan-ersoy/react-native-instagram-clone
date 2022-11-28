import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { TextInput, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { profiles } from "../../data/Profiles";
import { Burger, DropDown, PhotosI, Plus, Security, SinglePlus, ProfileReels, MentionsI, Shyn } from "../../Icons";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Photos from "./Photos";
import Reels from "./Reel";
import Mentions from "./Mentions";
import Filter from "./Filter";

function OtherContent() {

    const Tab = createMaterialTopTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#000',
                tabBarInactiveTintColor: '#262626',
                headerShown: false,
            }}>

            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return <PhotosI size={24} focused={true} />
                        }
                        return <PhotosI size={24} />
                    }
                }}
                name="Photos"
                component={Photos} />

            <Tab.Screen
                name="Reels"
                options={{
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return <ProfileReels size={24} focused={true} />
                        }
                        return <ProfileReels size={24} />
                    }
                }}
                component={Reels} />

            <Tab.Screen
                name="Filters"
                options={{
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return (
                                <Image
                                    style={{ width: 25, height: 25, opacity: 0.7 }}
                                    source={{ uri: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/shiny-star-1-485750.png' }}
                                />
                            )
                        }
                        return (
                            <Image
                                style={{ width: 25, height: 25, opacity: 0.2 }}
                                source={{ uri: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/shiny-star-1-485750.png' }}
                            />
                        )
                    }
                }}
                component={Filter} />

            <Tab.Screen
                name="Mentions"
                options={{
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return <MentionsI size={24} focused={true} />
                        }
                        return <MentionsI size={24} />
                    }
                }}
                component={Mentions} />

        </Tab.Navigator>
    )
}

export default OtherContent;

const styles = StyleSheet.create({
    container: {
        marginTop: 10
    }
});