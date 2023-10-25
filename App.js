import { useState } from "react";
import { StyleSheet, View, FlatList, Button} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [goals, setGoals] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const startAddGoalHandler = () => {
    setOpenModal(true);
  };

  const endAddGoalHandler = () => {
    setOpenModal(false);
  };

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setEnteredGoal("");
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoal, key: Math.random().toString() },
    ]);
    endAddGoalHandler();
  };

  const deleteGoalHandler = (id) => {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.key !== id);
    });
  };

  return (
    <View style={styles.appContainer}>
      {!openModal && (
        <Button
          title="Add New Goal"
          color="blue"
          onPress={startAddGoalHandler}
        />
      )}
      <GoalInput
        onAddGoal={addGoalHandler}
        onInputHandler={goalInputHandler}
        enteredGoal={enteredGoal}
        visible={openModal}
        onCancel={endAddGoalHandler}
      />
      <View style={styles.goalContainer}>
        <FlatList
          data={goals}
          renderItem={(data) => {
            return (
              <GoalItem
                text={data.item.text}
                id={data.item.id}
                onDelete={deleteGoalHandler}
              />
            );
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  goalContainer: {
    flex: 4,
  },
});
