import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export const HomeScreen = () => {
  const msg = useSelector((state) => state.message);
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
    </View>
  );

  return (
    <SafeAreaView
      style={{
        fontsize: 50,
        textAlign: "center",
        marginTop: "20%",
        alignItems: "center"
      }}
    >
      <FlatList
        data={msg}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity
        style={{
          backgroundColor: "purple",
          padding: 10,
          marginTop: "20%",
          width: "50%",
          alsignSelf: "center",
          borderRadius: 10,
        }}
        onPress={()=>  navigation.navigate("Stack")}
      >
        <Text
          style={{
            color: "white",
            fontSize: 15,
            textAlign: "center",
          }}
        >
          go to Stack Screen
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
