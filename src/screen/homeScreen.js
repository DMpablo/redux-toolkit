import React from "react";
import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";
import { useSelector } from "react-redux";

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

  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
    </View>
  );

  return (
    <SafeAreaView>
      <Text
        style={{
          fontsize: 50,
          textAlign: "center",
          marginTop: "20%",
        }}
      >
        <FlatList
          data={msg}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </Text>
    </SafeAreaView>
  );
};
