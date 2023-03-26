import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppScreens from './AppScreens';
import LoginScreen from './screens/Login/LoginScreen';
import Settings from './screens/settings/Settings';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from "react";
import CommentsScreen from './screens/comments/Comments';
import OtherProfileScreen from './screens/profile/Other/Other';
import store from "./redux/store"
import { Provider } from "react-redux";
import MessageScreen from './screens/message/message';
import EditProfileScreen from './screens/edit-profile/EditProfile';
import DirectMessage from './screens/home/components/DirectMessage';

export default function App() {
  const [report, setReport] = useState(false);

  const Stack = createNativeStackNavigator();

  return (
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

          <Stack.Screen
            name="DirectMessage"
            component={DirectMessage} />

          <Stack.Screen
            name="EditProfile"
            component={EditProfileScreen} />

          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen} />

          <Stack.Screen
            name="Settings"
            component={Settings} />
          {/*


          <Stack.Screen
            name="Explore"
            component={ExploreScreen} />
        */}


        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
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
