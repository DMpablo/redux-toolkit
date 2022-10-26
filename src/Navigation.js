import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./store/store";
import { Image, Text, StyleSheet } from "react-native";
import { SimpleLineIcons } from '@expo/vector-icons';

//screens
import { HomeScreen } from "./screen/homeScreen";
import { OrderDetail } from "./components";


const HomeStackNavigator = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 58,
  },
});

function MyStack() {
  return (
    <HomeStackNavigator.Navigator initialRouteName="HomeScreen">
      <HomeStackNavigator.Screen 
        name="HomeScreen" 
        component={HomeScreen} 
      options={
        {title:'Ordenes',
          headerRight: () => (
            <Image
        style={styles.logo}
            source={require('./assets/logo_parana.png')}
      />
          ),
        }
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
