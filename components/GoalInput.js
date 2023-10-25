import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";

function GoalInput(props) {
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require('../assets/images/goal.png')} style={styles.image} />
        <TextInput
          placeholder="Your course goal"
          style={styles.textInput}
          onChangeText={props.onInputHandler}
          value={props.enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.btn}>
            <Button title="Cancel" onPress={props.onCancel} color='#f31282'/>
          </View>
          <View style={styles.btn}>
            <Button title="Add Goal" onPress={props.onAddGoal} color='dodgerblue'/>
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
    padding: 16,
    backgroundColor: "cornflowerblue"
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: '#120438',
    borderRadius: 6,
    padding: 16,
    width: "90%",
    marginRight: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
    width:"90%"
  },
  btn: {
    width: "45%",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  }
});
