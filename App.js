import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.firstBox}>
        <Text>1</Text>
      </View>
      <View style={styles.secondBox}>
        <Text>2</Text>
      </View>
      <View style={styles.thirdBox}>
        <Text>3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flexDirection: "row",
    width: "80%",
    height: 300,
    backgroundColor: "black",
    justifyContent: 'space-around',
    alignItems: 'stretch'
  },
  firstBox: {
    flex: 2,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center"
  },
  secondBox: {
    flex: 1,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center"
  },
  thirdBox: {
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center"
  }
});
