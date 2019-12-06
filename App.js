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
    setCourseGoals(currentGoals => [...currentGoals, goalTitle]);
  };

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={handleAddGoal }/>
      <FlatList
        keyExtractor={(item,index) => index.toString()}
        data={courseGoals}
        renderItem={itemData => <GoalItem title={itemData.item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
});
