import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  return (
    <View style={{ padding: 40 }}>
      <View style={styles.topView}>
        <TextInput placeholder="Course Goal" style={styles.goalsInput} />
        <Button title="ADD" />
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  goalsInput: { width: 200, padding: 10, borderColor: "black", borderWidth: 1 },
  topView: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  }
});
