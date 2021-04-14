import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { useState } from 'react';
import { API, Auth, graphqlOperation } from 'aws-amplify';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import SignInScreen from '../screens/HomeScreen';
import TabFourScreen from '../screens/TabFourScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { BottomTabParamList, HomeScreenParamList, TabFourParamList, TabOneParamList, TabTwoParamList } from '../types';
import ProfilePicture from '../components/ProfilePicture';
import { Profile } from '../models';
import HomeScreen from '../screens/HomeScreen';
import { getProfile } from '../src/graphql/queries';


const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ 
        activeTintColor: Colors[colorScheme].tint,
        showLabel: false,
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreenNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-home" color={color} />,
        }}
      />  
      <BottomTab.Screen
        name="Search"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-search-outline" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Notifications"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-notifications-outline" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Messages"
        component={TabFourNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-mail" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeScreenStack = createStackNavigator<HomeScreenParamList>();

function HomeScreenNavigator() {

  const [user, setUser] = useState(null);

  React.useEffect(() => {
    // get current user
    const fetchUser = async () => {
      const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true });
      if (!userInfo) {
        return;
      }

      try {
        const userData = await API.graphql(graphqlOperation(getProfile, { id: userInfo.attributes.sub }))
        if (userData) {
          setUser(userData.data.getProfile);
        }
      } catch (e) {
        console.log(e);
      }
    }
    fetchUser();
  }, [])

  return (
    <HomeScreenStack.Navigator>
      <HomeScreenStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ 
          //headerTitle: 'Home',
          // headerLeftContainerStyle: {
          //   marginLeft: 10
          // },
          headerLeftContainerStyle: {
            marginLeft: 15
          },
          headerRightContainerStyle: {
            marginRight: 15
          },
          headerLeft: () => (
            <ProfilePicture size ={40} image={'https://i.pinimg.com/originals/d2/03/00/d20300271c0ef7892011d45a9972567b.gif'} />

            // the commented  ProfilePic is for backend. Needs to be fixed.
            //<ProfilePicture size ={40} image={!user ? user?.image : ''} />
          ),
          headerTitle: () => (
            <Ionicons name={"logo-twitter"} size ={30} color={Colors.light.tint}/>
          ),
          headerRight: () => (
            <MaterialCommunityIcons name={"star-four-points-outline"} size={30} color={Colors.light.tint} />
          )
      }}
      />
    </HomeScreenStack.Navigator>
  );
}

const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerTitle: 'Tab One Title' }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}

const TabFourStack = createStackNavigator<TabFourParamList>();

function TabFourNavigator() {
  return (
    <TabFourStack.Navigator>
      <TabFourStack.Screen
        name="TabFourScreen"
        component={TabFourScreen}
        options={{ headerTitle: 'Tab Four Title' }}
      />
    </TabFourStack.Navigator>
  );
}
