import React, { useState } from "react";
import { View, Button, TextInput, StyleSheet } from "react-native";

const GoalInput = props => {

  const [enteredGoal, setEnteredGoal] = useState("");

  const handleChangeText = enteredText => {
    setEnteredGoal(enteredText);
  };

  return (
    <View style={styles.formView}>
      <TextInput
        placeholder="Course Goal"
        style={styles.goalInput}
        onChangeText={handleChangeText}
        value={enteredGoal}
      />
      <Button title="CREATE" onPress={props.onAddGoal.bind(this, enteredGoal)} />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  goalInput: {
    width: 200,
    padding: 10,
    borderColor: "black",
    borderWidth: 1
  },
  formView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});
