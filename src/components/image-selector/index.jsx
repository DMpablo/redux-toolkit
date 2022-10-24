import React, { useState } from "react";
import { Button, Image, View, Text, Alert } from "react-native";
import { styles } from "./style";
import * as ImagePicker from 'expo-image-picker';

const ImageSelector = ({ onImage }) => {
  const [pickedUrl, setPickedUrl] = useState();

  const verifyPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync()
    if (status !== 'granted' ){
      Alert.alert('Necesitas permisos para acceder a la camara', [{text: 'ok'}])
      return false;
    }
    return true;
  }


  const onHandleTakePhoto = async () => {
      const hasPermissions = await verifyPermissions()
      if(!hasPermissions){
        return;
      };
      
      const image = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspects:[16,9],
        quality:0.5
      })
      setPickedUrl(image.uri)
  }

  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {!pickedUrl ? (
          <Text>no hay imagen...</Text>
        ) : (
          <Image style={styles.image} source={{ uri: pickedUrl }} />
        )}
      </View>
      <Button title="tomar foto" onPress={onHandleTakePhoto} />
    </View>
  );
};

export default ImageSelector;