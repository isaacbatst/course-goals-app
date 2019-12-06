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

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const handleAddGoal = goalTitle => {
    setCourseGoals(currentGoals => [...currentGoals, { id: currentGoals.length, title: goalTitle }]);
  };

  const handleRemoveGoal = goalId => {
    setCourseGoals(currentGoals => currentGoals.filter(goal => !(goal.id === goalId)))
  }

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={handleAddGoal }/>
      <FlatList
        keyExtractor={(item,index) => index.toString()}
        data={courseGoals}
        renderItem={({item}) => <GoalItem id={item.id} onDelete={handleRemoveGoal} title={item.title} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
});
