import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

function GoalInput(props) {
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Your course goal"
          style={styles.textInput}
          onChangeText={props.onInputHandler}
          value={props.enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.btn}>
            <Button title="Add Goal" onPress={props.onAddGoal} />
          </View>
          <View style={styles.btn}>
            <Button title="Cancel" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
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
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 15,
  },
  btn: {
    width: "30%",
    marginHorizontal: 8,
  },
});
