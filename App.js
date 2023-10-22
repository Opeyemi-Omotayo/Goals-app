import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
     <View style={styles.inputContainer}>
      <TextInput placeholder='Your course goal' style={styles.textInput}/>
      <Button title='Add Goal' />
     </View>
     <View style={styles.gapContainer}>
      <Text>List of goals</Text>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: 'blue',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    padding: 10,
    width: '70%',
    marginRight: 8
  },
  gapContainer: {
    flex: 3,
  }
});
