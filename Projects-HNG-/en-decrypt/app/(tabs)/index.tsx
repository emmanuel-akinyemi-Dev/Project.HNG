import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  SafeAreaView,
  useColorScheme,
} from "react-native";
import { encryptText, decryptText } from "../../utils/encryptor";
import { error } from "console";

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const [inputText, setInputText] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const [encryptedText, setEncryptedText] = useState("");
  const [decryptedText, setDecryptedText] = useState("");
  const [display, setDisplay] = useState();

  function handleEncryption() {
    setDecryptedText("");
    try {
      const encrypted = encryptText(inputText, secretKey);
      setEncryptedText(encrypted);
      Alert.alert("success", " Your text has been encryted");
    } catch (error: any) {
      Alert.alert("Encrypt failed", error.message);
      console.log(error.message);
    }
  }

  function handleDecryption() {
    try {
      const decrypted = decryptText(encryptedText, secretKey); 
      setEncryptedText("");
      setDecryptedText(decrypted);
      Alert.alert("Success", "Your text has been decrypted");
    } catch (error: any) {
      Alert.alert("Decrypt failed", error.message);
      console.log(error.message);
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native Encryption</Text>

      <Text style={styles.output}>
        Result :
        {encryptedText ? encryptedText : decryptedText ? decryptedText : null}
      </Text>

      <TextInput
        style={[styles.input]}
        placeholder="Enter text to encrypt"
        value={inputText}
        onChangeText={setInputText}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter secret key"
        value={secretKey}
        secureTextEntry
        onChangeText={setSecretKey}
      />

      <View style={styles.btn}>
        <Button title="Encrypt" onPress={handleEncryption} />
        <Button title="Decrypt" onPress={handleDecryption} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 10, marginBottom: 10 },
  output: { marginTop: 10, fontSize: 16, fontWeight: "bold", marginBottom: 10 },
  btn: {
    flexDirection: "row",
    gap: 10,
    width: "90%",
    height: "auto",
    justifyContent: "center",
    alignSelf: "center",
  },
});
