import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
} from "react-native";
import { useSelector } from "react-redux";
// import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontsize: 50,
    textAlign: "center",
    marginTop: "20%",
    alignItems: "center"
  },
  text:{
    color: "white",
    fontSize: 15,
    textAlign: "center",
  }
});

export const HomeScreen = () => {
    //   console.warn(places)
    //   const msg = useSelector((state) => state.message);
    //   const navigation = useNavigation();
    const places = useSelector((state) => state.place);

  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <Text style={styles.title}>{item.id}</Text>
      <Text style={styles.text}>{item.title}</Text>
    </View>
  );

  return (
    <SafeAreaView
      style={styles.safe_area}
    >
      <FlatList
        data={places}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};
