import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export const MessageInitial = () => {
  const msg = useSelector((state) => state.message);
  console.warn(msg[0].title);
  return (
    <View style={styles.container}>
      {msg.map((e) => (
        <>
          <Text key={index}>{e.title}</Text>
          <Text>{e.description}</Text>
        </>
      ))}
    </View>
  );
};
