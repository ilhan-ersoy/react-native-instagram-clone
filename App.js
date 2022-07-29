import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppScreens from './AppScreens';
import LoginScreen from './screens/Login/LoginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from "react";
import CommentsScreen from './screens/comments/Comments';
import store from "./redux/store"
import {Provider} from "react-redux";
import {useDispatch, useSelector} from "react-redux";
import { setShow, show } from "./redux/appSlice";

export default function App() {


  const [report, setReport] = useState(false);

  const Stack = createNativeStackNavigator();


  return (
    //<SafeAreaView style={{flex:1}}>
        <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator
                screenOptions={{headerShown:false}}
              >
                
                <Stack.Screen 
                  name="Home" 
                  component={AppScreens} />

                <Stack.Screen 
                  name="Login" 
                  component={LoginScreen} />

                <Stack.Screen 
                  name="Comments" 
                  component={CommentsScreen} />
                  
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
    //</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  postOptions: {
      width:'100%',
      height:'30%',
      backgroundColor:'red',
      position:'absolute',
      bottom:0
  }
});

