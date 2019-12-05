import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={{ padding: 40 }}>
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
  firstBox: {
    backgroundColor: "red",
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center"
  },
  secondBox: {
    backgroundColor: "blue",
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center"
  },
  thirdBox: {
    backgroundColor: "green",
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center"
  }
});
