import { Alert, Pressable, Text, TextInput, View } from "react-native";
import { styles } from "./style";
import { useState } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState();

  const createTwoButtonAlert = () => {
    const message = `hello, ${inputValue}!`;
    Alert.alert("Hello", message, [
      {
        text: "Close",
        style: "cancel",
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.inputLabel}>What is your name?</Text>
      <TextInput
        style={styles.input}
        placeholder="your name"
        value={inputValue}
        onChangeText={setInputValue}
      />
      <Pressable disabled={!inputValue} onPress={createTwoButtonAlert}>
        <Text style={{ color: !inputValue ? "gray" : "blue" }}>Say Hello</Text>
      </Pressable>
    </View>
  );
}
