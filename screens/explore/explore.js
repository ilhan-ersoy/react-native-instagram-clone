import { View } from "react-native"
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { StyleSheet, ScrollView, TextInput, Text, RefreshControl } from 'react-native';
import { SafeAreaView, Image } from "react-native";



const ExploreScreen = ({ route, navigation }) => {

    const { img, desc } = route.params;


    return (
        <SafeAreaView>
            <Image
                style={{ width: 300, height: 300 }}
                source={{
                    uri: img
                }}
            />
        </SafeAreaView>
    );


}

export default ExploreScreen;

