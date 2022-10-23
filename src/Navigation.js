import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./store/store";
import { SimpleLineIcons } from '@expo/vector-icons';

//screens
import { HomeScreen } from "./screen/homeScreen";
import { SettingScreen } from "./screen/settingScreen";
import { StackScreen } from "./screen/stackScreen";


const HomeStackNavigator = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyStack() {
  return (
    <HomeStackNavigator.Navigator initialRouteName="HomeScreen">
      <HomeStackNavigator.Screen 
        name="HomeScreen" 
        component={HomeScreen} 
      
        />
      <HomeStackNavigator.Screen
        name="Stack"
        component={StackScreen}
        options={{ 
          headerBackTitleVisible: false,
        
         }}
      />
    </HomeStackNavigator.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "purple",
      }}
    >
      <Tab.Screen
        name="Homle"
        component={MyStack}
        options={{
          tabBarLabel: "feed",
          tabBarBadge: 2,
          headerShown:false,
          tabBarIcon: ({color, size})=>(
            <SimpleLineIcons name="home" color={color} size={30} />
          )
        }}
      />
      <Tab.Screen 
        name="Settings" 
        component={SettingScreen} 
        options={{
          tabBarIcon: ({color, size}) => (
            <SimpleLineIcons name='settings' color={color} size={30} />
          )
        }}

        />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </Provider>
  );
}
