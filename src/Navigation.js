import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./store/store";
import { SimpleLineIcons } from '@expo/vector-icons';

//screens
import { HomeScreen } from "./screen/homeScreen";
import { OrderDetail } from "./components";


const HomeStackNavigator = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyStack() {
  return (
    <HomeStackNavigator.Navigator initialRouteName="HomeScreen">
      <HomeStackNavigator.Screen 
        name="HomeScreen" 
        component={HomeScreen} 
      options={
        {name:'hola'}
      }
        />
      <HomeStackNavigator.Screen
        name="Detalle"
        component={OrderDetail}
        options={{ 
          headerBackTitleVisible: false,
        
         }}
      />
    </HomeStackNavigator.Navigator>
  );
}

export default function Navigation() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </Provider>
  );
}
