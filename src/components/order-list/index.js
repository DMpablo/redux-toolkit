import React, { useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useSelector,useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { fetchAll } from '../../connect/index';

const OrderList = ()  => {
  const ord = useSelector((state) => state.orders.list);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch])
  
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.container_detail}
      onPress={() => navigation.navigate("Detalle", { item })}
    >
      <Text>{item.id}</Text>
      <Text>{item.last_name}</Text>
      <Text>{item.first_name}</Text>
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
    </View>
  );
};


export default OrderList;
