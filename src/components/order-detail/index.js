import React, { useState, useRef } from "react";
import { View, Text, Button } from "react-native";
import { styles } from "./styles";
import Checkbox from "expo-checkbox";
import { Picker } from "@react-native-picker/picker";

const OrderDetail = ({ route }) => {
  const [isChecked, setChecked] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState();
  const { item } = route.params;

  const pickerRef = useRef();

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }

  const handleSubmit =()=>{
    console.warn('submited')
  }

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
      <Picker
        ref={pickerRef}
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
        style={styles.picker}
        itemStyle={styles.itemStyle}
      >
        <Picker.Item style={styles.itemStyle} label="Java" value="java" />
        <Picker.Item style={styles.itemStyle} label="JavaScript" value="js" />
      </Picker>

      <Button title={'completar'} onPress={handleSubmit} />

    </View>
  );
};

export default OrderDetail;
