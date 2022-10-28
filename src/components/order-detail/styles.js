import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // width:'100%',
    marginTop: 20,
    // backgroundColor:'gray'
  },
  container_check:{
    flexDirection:"row",
    justifyContent: "space-between",
    height:20,
    width:'60%',
    margin:20,
    // backgroundColor:'purple',
  },
  title: {
    fontSize: 25,
  },

  text: {
    color: "gray",
    fontSize: 15,
    textAlign: "center",
  },
  picker: { width: "60%", margin: 20, backgroundColor: "gray", color: "white" },
  itemStyle: {
    backgroundColor: "gray",
    color: "white",
    fontFamily: "Ebrima",
    fontSize: 17,
  },
});
