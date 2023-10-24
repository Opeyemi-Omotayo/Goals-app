import { StyleSheet, View, TextInput, Button } from "react-native";

const GoalInput = (props) => {
  return (
    <View style={styles.inputContainer}>
    <TextInput
      placeholder="Your course goal"
      style={styles.textInput}
      onChangeText={props.onInputHandler}
    />
    <Button title="Add Goal" onPress={props.onAddGoal} />
  </View>
  )
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 24,
      borderBottomWidth: 1,
      borderBottomColor: "blue",
    },
    textInput: {
      borderWidth: 1,
      borderColor: "#cccccc",
      padding: 10,
      width: "70%",
      marginRight: 8,
    }
  });
  