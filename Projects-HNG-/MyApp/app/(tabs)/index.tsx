import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, marginBottom: 10, fontWeight: "bold" }}>
      MyApp
      </Text>
      <Pressable
        onPress={() =>
          router.navigate(
            "https://github.com/emmanuel-akinyemi-Dev/Projects-HNG-/tree/main"
          )
        }
        style={styles.button}
      >
        <Text style={{ color: "white" }}>Goto GitHub</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() =>
          router.navigate("http://hng.tech/hire/react-native-developers")
        }
      >
        <Text style={{ color: "white" }}>Goto HNG Hire</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  button: {
    width: "50%",
    height: "20%",
    backgroundColor: "#374DA0",
    shadowColor: "grey",
    shadowOpacity: 1,
    borderWidth: 0.5,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    borderRadius: 5,
  },
});
