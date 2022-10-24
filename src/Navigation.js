import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./store/store";
import { SimpleLineIcons } from "@expo/vector-icons";
import { TouchableOpacity,Text } from "react-native";

//screens
import { NewPlaceScreen, PlaceListScreen } from './screen'

const stack = createNativeStackNavigator();

function MyStack() {
  return (
    <stack.Navigator initialRouteName="Place">
      <stack.Screen
        name="Places"
        component={PlaceListScreen}
        options={({ navigation }) => ({
          title: "Direcciones",
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Cargar Imagen")}
            >
             <SimpleLineIcons name="plus" size={30} color="black" />
            </TouchableOpacity>
          ),
        })}
      />
      <stack.Screen
        name="Cargar Imagen"
        component={NewPlaceScreen}
        options={{
          headerBackTitleVisible: false,
        }}
      />
    </stack.Navigator>
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
