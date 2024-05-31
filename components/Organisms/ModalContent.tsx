import {
  StyleSheet,
  Text,
  Button,
  Image,
  ScrollView,
  View,
  TouchableOpacity,
} from "react-native";
import { ThemedText } from "@/components/ThemedText";

export default function ModalContent({ closeModal, movie }: any) {
  console.log("Movie", movie);
  return (
    <>
      <ScrollView>
        <ThemedText type="title">{movie.original_title}</ThemedText>
        <View style={styles.row}>
          <View style={{ flex: 1 }}>
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
              }}
              style={styles.logo}
            />
          </View>
          <View style={{ flex: 2 }}>
            <ThemedText>{movie.overview}</ThemedText>
          </View>
        </View>
        <View style={{ flex: 3 }}>
          <ThemedText type="defaultSemiBold">
            Popularity: {movie.popularity}
          </ThemedText>
          <ThemedText type="defaultSemiBold">
            Vote Average: {movie.vote_average}
          </ThemedText>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={closeModal}>
            <Image
              source={require("@/assets/images/play.png")}
              style={styles.icons}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={closeModal}>
            <Image
              source={require("@/assets/images/download.png")}
              style={styles.icons}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={closeModal}>
            <Image
              source={require("@/assets/images/add.png")}
              style={styles.icons}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={closeModal}>
            <Image
              source={require("@/assets/images/share.png")}
              style={styles.icons}
            />
          </TouchableOpacity>
        </View>
        <Button title="Close" onPress={closeModal} color="red" />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  logo: {
    height: 250,
    width: 100,
    left: 10,
    top: 10,
  },
  icons: {
    margin: 20,
    height: 50,
    width: 50,
    left: 10,
    top: 10,
  },
});
