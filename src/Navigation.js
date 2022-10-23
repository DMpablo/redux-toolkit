import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./store/store";

//screens
import { HomeScreen } from "./screen/homeScreen";
import { SettingScreen } from "./screen/settingScreen";
// import { StackScreen } from "./src/screen/stackScreen";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
    initialRouteName="Home"
    screenOptions={{
      tabBarActiveTintColor: 'purple',
      }}
    >
      <Tab.Screen name="Home" 
        component={HomeScreen} 
        options={{
          tabBarLabel:'feet',
          tabBarBadge:2
          }} />
      <Tab.Screen name="Settings" component={SettingScreen} />
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
