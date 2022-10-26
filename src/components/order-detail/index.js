import React, { useState, useRef } from "react";
import { View, Text, Button } from "react-native";
import { styles } from "./styles";
import Checkbox from "expo-checkbox";
import { Picker } from "@react-native-picker/picker";
import CompleteOrder from "../../model";
import date from "../../utils.js";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { editOrder } from "../../store/orders.slice";

const OrderDetail = ({ route }) => {
  const [isChecked, setChecked] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState();
  const { item } = route.params;
  const dispatch = useDispatch();

  const ord = useSelector((state) => state.orders);


  const pickerRef = useRef();
  function open() {
    pickerRef.current.focus();
  }
  function close() {
    pickerRef.current.blur();
  }

  const handleSubmit =()=>{
    dispatch(editOrder(item));
    // const model = new CompleteOrder('1234', 'manuchar','descripcion', date() )
    // console.warn(ord)
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
