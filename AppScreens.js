import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from "./screens/profile/Profile";
import ShopScreen from "./screens/shop/Shop";
import ReelsScreen from "./screens/Reels";
import { Home, HomeFilled, Reels, ReelsFilled, Search, SearchFilled, Shop, ShopFilled } from './Icons';
import { StyleSheet, Image } from 'react-native';
import SearchScreen from './screens/search/SearchScreen';
import { useDispatch, useSelector } from 'react-redux';
import ExploreScreen from './screens/explore/explore';
import HomeScreen from './screens/home';
import LoginScreen from './screens/Login/LoginScreen';


const Tab = createBottomTabNavigator();

function AppScreens() {

    const show = useSelector(state => state.app.show);
    const showTabBar = useSelector(state => state.app.hideTabBar);

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#000',
                tabBarInactiveTintColor: '#262626',
                headerShown: false
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return <HomeFilled size={26} color={color} />
                        }
                        return <Home size={30} color={color} />
                    },
                }}
            />
            <Tab.Screen
                name="Profile"
                component={SearchScreen}
                options={{
                    headerTitle: 'Search',
                    tabBarIcon: ({ focused, size, color }) => {
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
                    headerTitle: 'Reels',
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return <ReelsFilled size={26} color={color} />
                        }
                        return <Reels size={36} color={color} />
                    },

                }}
            />
            <Tab.Screen
                name="Shop"
                component={ShopScreen}
                options={{
                    headerTitle: 'Shop',
                    tabBarIcon: ({ focused, size, color }) => {
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
                    tabBarIcon: ({ focused, size, color }) => {
                        return (
                            <Image
                                style={[styles.profileAvatar, { borderColor: focused ? 'black' : 'transparent' }]}
                                source={require('./assets/img/ilhan_ers.jpg')}
                            />
                        )
                    }
                }}
            />
            
        </Tab.Navigator >
    )
}

const styles = StyleSheet.create({
    profileAvatar: {
        width: 36,
        height: 36,
        borderRadius: 21,
        borderWidth: 2
    }
});

export default AppScreens;


