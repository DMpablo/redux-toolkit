import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

const OrderList = () => {
  const ord = useSelector((state) => state.orders.list);
  const navigation = useNavigation();
  console.warn(ord);
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.container_detail}
      onPress={() => navigation.navigate("Detalle", { item })}
    >
      <Text>{item.company}</Text>
      <Text>{item.description}</Text>
      <Text>{item.date}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text>Lista de ordenes</Text>
      <FlatList
        data={ord}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      {/*   <TouchableOpacity
        style={styles.touch}
        onPress={() => navigation.navigate("Stack")}
      >
        <Text style={styles.text}>go to Stack Screen</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default OrderList;
