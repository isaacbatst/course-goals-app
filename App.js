import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Text,
  ScrollView,
  FlatList
} from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const handleChangeText = enteredText => {
    setEnteredGoal(enteredText);
  };

  const handleAddGoal = () => {
    setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.formView}>
        <TextInput
          placeholder="Course Goal"
          style={styles.goalsInput}
          onChangeText={handleChangeText}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={handleAddGoal} />
      </View>
      <FlatList
        keyExtractor={(item,index) => index.toString()}
        data={courseGoals}
        renderItem={itemData => (
          <View style={styles.listItem}>
            <Text>{itemData.item}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  goalsInput: { width: 200, padding: 10, borderColor: "black", borderWidth: 1 },
  formView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1
  }
});
