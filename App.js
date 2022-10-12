import { StyleSheet, Text, View, useEffect } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppScreens from './AppScreens';
import LoginScreen from './screens/Login/LoginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from "react";
import CommentsScreen from './screens/comments/Comments';
import OtherProfileScreen from './screens/profile/Other/Other';
import store from "./redux/store"
import { Provider } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { setShow, show } from "./redux/appSlice";
import ExploreScreen from './screens/explore/explore';
import MessageScreen from './screens/message/message';
import Home from './Home';
import { setHideTabBar, hideTabBar } from './redux/appSlice';

export default function App() {


  const [report, setReport] = useState(false);

  const Stack = createNativeStackNavigator();
 


  return (
    //<SafeAreaView style={{flex:1}}>
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
        >

          <Stack.Screen
            name="Home"
            component={AppScreens} />

          <Stack.Screen
            name="Comments"
            component={CommentsScreen} />

          <Stack.Screen
            name="OtherProfile"
            component={OtherProfileScreen} />

          <Stack.Screen
            name="Message"
            component={MessageScreen} />

          {/*<Stack.Screen
            name="Login"
            component={LoginScreen} />




          <Stack.Screen
            name="Explore"
            component={ExploreScreen} />
        */}


        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    //</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  postOptions: {
    width: '100%',
    height: '30%',
    backgroundColor: 'red',
    position: 'absolute',
    bottom: 0
  }
});
