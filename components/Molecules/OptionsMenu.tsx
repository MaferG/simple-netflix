import { StyleSheet, Dimensions, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";

export default function OptionsMenu() {
  return (
    <View style={styles.titleContainer}>
      <ThemedText >Tv shows</ThemedText>
      <ThemedText >Movies</ThemedText>
      <ThemedText >Categories</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "stretch",
    gap: 60,
    paddingHorizontal: 50
  },
});
