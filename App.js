import React, { useState } from "react";
import { Text, View, TextInput, Button, Alert } from "react-native";
import styles from "./style";

export default function App() {
  const [age, setAge] = useState(0);
  
  const ageHandler = () => {
    if(age > 21) {
      Alert.alert("Yay!", "You are welcome!")
    } 
    else {
      Alert.alert("No", "You are not allowed to drink")
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.words}>Let me know your name</Text>
      <TextInput style={styles.input} placeholder="enter your name here"></TextInput>
      <Text style={styles.words}>Insert your age below</Text>
      <TextInput style={styles.input} placeholder='enter your age here' onChangeText={(text)=>setAge(text)}></TextInput>
      <Button title="What's Up?" style={styles.button} onPress={()=>ageHandler()}/>
    </View>
  );
}
