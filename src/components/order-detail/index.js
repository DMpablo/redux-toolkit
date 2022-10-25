import React, { useState } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import Checkbox from "expo-checkbox";

const OrderDetail = ({ route }) => {
  const [isChecked, setChecked] = useState(false);
  const { item } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.container}>Cargar orden</Text>
      <Text>{item.company}</Text>
      <Text>{item.description}</Text>
      <Text>{item.date}</Text>
      <Checkbox
        style={styles.checkbox}
        value={isChecked}
        onValueChange={setChecked}
        color={isChecked ? "#4630EB" : undefined}
      />
    </View>
  );
};

export default OrderDetail;
