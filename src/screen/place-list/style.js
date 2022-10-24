import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: "80%",
    height: "80%",
    borderRadius: 20,
    backgroundColor: 'gray'
  },
  info:{
    marginLeft:15,
    flex:1,
    justifyContent: 'center',
    alignItems:'flex-start',
  },
  titles: {
    fontSize:15,
    color: 'black',
    marginBottom: 10,

  },
  emptyContainer:{
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
    marginTop: 20,
  },
  empty:{
    fontSize:16,
    textAlign: 'center',
    color: colors.text,
  }
  
});
