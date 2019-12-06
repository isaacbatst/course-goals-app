import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GoalItem = props => (
  <View style={styles.listItem}>
    <Text>{props.title}</Text>
  </View>
);

export default GoalItem;

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1
  }
});
