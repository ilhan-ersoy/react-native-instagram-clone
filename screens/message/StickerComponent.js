import { View } from "react-native"
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { StyleSheet, ScrollView, TextInput, Text, RefreshControl, TouchableOpacity } from 'react-native';
import { SafeAreaView, Image } from "react-native";
import { LeftArrow, DropDown, Plus, SinglePlus, DmSearch, Call, VideoCall, ReelsFilled, ReelsFillWhite, Microphone, Images, Sticker, Camera } from "../../Icons";
import { faker } from "@faker-js/faker";
import BottomSheet from "react-native-gesture-bottom-sheet";


const StickerComponent = ({ route, navigation }) => {



    return (
        <View>
            <Sticker size={24} />
        </View>
    )
}

export default StickerComponent;


