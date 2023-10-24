import { View, Text } from "react-native";

const GoalItem = () => {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{data.item.text}</Text>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "blue",
  },
  goalText: {
    color: "white",
  },
});
