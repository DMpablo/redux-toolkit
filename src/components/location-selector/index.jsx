import React, { useState } from "react";
import { Button, View, Text, Alert, TouchableOpacity } from "react-native";
import { styles } from "./style";
import * as Location from "expo-location";

const LocationSelector = ({ onLocation }) => {
  const [pickedLocation, setPickedLocation] = useState(null);

  const verifyPermissions = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Necesitas permisos para acceder a la locacion", [
        { text: "ok" },
      ]);
      return false;
    }
    return true;
  };

  const onHandleTakeLocation = async () => {
    const hasPermissions = await verifyPermissions();
    if (!hasPermissions) return;
    const location = await Location.getCurrentPositionAsync({});

      setPickedLocation({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
      onLocation({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
  };

  {
    /* <Text>Lat: {pickedLocation.lat}, lng: {pickedLocation.lng}</Text> */
  }
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.preview}>
        {!pickedLocation ? (
          <Text>No hay direcciones cargadas...</Text>
        ) : (
          <Text>Lat y long</Text>
        )}
      </View>
      <Button title="seleccionar direccion" onPress={onHandleTakeLocation} />
    </TouchableOpacity>
  );
};

export default LocationSelector;
