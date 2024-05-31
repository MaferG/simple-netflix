import { Image, StyleSheet, View, TouchableOpacity, Modal, Text, Button, Dimensions} from "react-native";
import { ThemedText } from "@/components/ThemedText";
import PagerView from "react-native-pager-view";
import { useEffect, useState } from "react";
import ModalContent from "./ModalContent";

export default function SlideMovies({ data, title }: any) {
  const [movies, setMovies] = useState([]);
  const [currentMovie, setCurrentMovie] = useState({});


  useEffect(() => {
    const chunkArray: any = (arr: any, size: 3) =>
      arr.length > size
        ? [arr.slice(0, size), ...chunkArray(arr.slice(size), size)]
        : [arr];
    const moviesFiltered = chunkArray(data, 3);
    setMovies(moviesFiltered);
  }, [data]);

  const [modalVisible, setModalVisible] = useState(false);

  const openModal = (movie : any) => {
    setCurrentMovie(movie)
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <ThemedText type="subtitle">{title}</ThemedText>
      <PagerView style={styles.container} initialPage={0}>
        {movies.map((list: any, index: number) => (
          <View style={styles.page} key={index}>
            {list.map((movie: any) => (
              <TouchableOpacity onPress={() => openModal(movie)} key={movie.original_title}>
                <Image
                  source={{
                    uri: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
                  }}
                  style={styles.reactLogo}
                />
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </PagerView>
      <Modal
          visible={modalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={closeModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
            <ModalContent closeModal={closeModal} movie={currentMovie} />
            </View>
          </View>
        </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  reactLogo: {
    height: 150,
    width: 150,
    left: 10,
    top: 10,
  },
  container: {
    flex: 1,
    height: 200,
    marginTop: 20,
    marginHorizontal: 10
  },
  page: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    justifyContent: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#141414",
    width: "100%",
    height: Dimensions.get("window").height * 0.45,
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
