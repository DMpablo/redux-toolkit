import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  Button,
} from "react-native";
import { useDispatch } from "react-redux";
import { addPlace } from "../store/place.slice";
import { ImageSelector } from "../components/index";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  title: {
    width: "80%",
    fontsize: 50,
    marginTop: "20%",
  },
  input: {
    width: "80%",
    borderBottomColor: "purple",
    borderBottomWidth: 1,
    marginBottom: 20,
    padding: 5,
  },
  button: {
    backgroundColor: "purple",
    padding: 10,
    marginTop: "20%",
    width: "50%",
    alsignSelf: "center",
    borderRadius: 10,
  },
  text: {
    fontsize: 50,
    textAlign: "center",
    marginTop: "20%",
  },
});

export const StackScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const onHandleChange = (text) => {
    setTitle(text);
  };

  const onHandleSubmit = () => {
    dispatch(addPlace(title));
    navigation.goBack();
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Nombre de imagen</Text>
        <TextInput
          style={styles.input}
          placeholder="nueva imagen"
          onChangeText={() => {
            onHandleChange;
          }}
          // value={title}
        />
        <ImageSelector onImage={() => null} />
        <Button title="guardar" onPress={onHandleSubmit} color='purple' />
      </View>
    </ScrollView>
  );
};
