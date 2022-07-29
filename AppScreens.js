import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./screens/home";
import ProfileScreen from "./screens/profile/Profile";
import ShopScreen from "./screens/Shop";
import ReelsScreen from "./screens/Reels";
import { Home, HomeFilled, Reels, ReelsFilled, Search, SearchFilled, Shop, ShopFilled } from './Icons';
import { StyleSheet, Image } from 'react-native';
import SearchScreen from './screens/search/SearchScreen';
import { useDispatch, useSelector } from 'react-redux';

const Tab = createBottomTabNavigator();

function AppScreens() {


    const show = useSelector(state => state.app.show);


    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel:false,
                tabBarActiveTintColor:'#000',
                tabBarInactiveTintColor:'#262626',
                headerShown: false,
            }}
        >
            <Tab.Screen 
                name="Home" 
                component={HomeScreen}
                options={{
                    tabBarIcon: ({focused, size, color}) => {
                        if (focused) {
                            return <HomeFilled size={26} color={color} />
                        }
                        return <Home size={30} color={color} />
                    },
                    tabBarStyle: {display:`${show && 'none'}`},
                }}
                
            />
            <Tab.Screen 
                name="Profile" 
                component={SearchScreen}
                options={{
                    headerTitle:'Araştır',
                    tabBarIcon: ({focused, size, color}) => {
                        if (focused) {
                            return <SearchFilled size={26} color={color} />
                        }
                        return <Search size={26} color={color} />
                    }
                }}
            />
            <Tab.Screen 
                name="Reels" 
                component={ReelsScreen}
                options={{
                    headerTitle:'Reels',
                    tabBarIcon: ({focused, size, color}) => {
                        if (focused) {
                            return <ReelsFilled size={26} color={color} />
                        }
                        return <Reels size={36} color={color} />
                    }
                }}
            />
            <Tab.Screen 
                name="Shop" 
                component={ShopScreen}
                options={{
                    headerTitle:'Shop',
                    tabBarIcon: ({focused, size, color}) => {
                        if (focused) {
                            return <ShopFilled size={30} color={color} />
                        }
                        return <Shop size={36} color={color} />
                    }
                }}
            />
            <Tab.Screen 
                name="Search" 
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({focused, size, color}) => {
                        return (
                            <Image
                                style={[styles.profileAvatar, {borderColor: focused ? 'black': 'transparent'}]}
                                source={{
                                    uri:'https://instagram.fsaw3-1.fna.fbcdn.net/v/t51.2885-19/240936026_508945976807276_3878467107109739721_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fsaw3-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=tviEQGwQpCIAX-YR6pg&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AT9Ea9hI2ve_bZEoXmcwlla819vuOHsO-ywfSw1yM7z1ag&oe=62E9BFE7&_nc_sid=8fd12b',
                                }}
                            />
                        )
                    }
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    profileAvatar: {
        width:36,
        height:36,
        borderRadius:21,
        borderWidth:2
    }
});
 
export default AppScreens;


