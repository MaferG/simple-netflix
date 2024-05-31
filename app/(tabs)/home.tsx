import {
    Image,
    StyleSheet,
    Platform,
    View,
    Text,
    Modal,
    Dimensions,
    Button,
  } from "react-native";
  import { HelloWave } from "@/components/HelloWave";
  import ParallaxScrollView from "@/components/ParallaxScrollView";
  import { ThemedText } from "@/components/ThemedText";
  import { ThemedView } from "@/components/ThemedView";
  import { useEffect, useState } from "react";
  import { api, TOKEN, API_URL } from "../../api/api";
  import PagerView from "react-native-pager-view";
  import SlideMovies from "@/components/Organisms/SlideMovies";
  import OptionsMenu from "@/components/Molecules/OptionsMenu";
  import Banner from "@/components/Molecules/Banner";
  
  export default function HomeScreen() {
    const [data, setData] = useState<any>([]);
    const [movie, setMovie] = useState<any>({});
  
    const lists = ["Now Playing", "Popular", "Top Rated", "Upcoming"]
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const nowPlaying = await api.get(
            `movie/now_playing?language=en-US&page=1`,
            {
              headers: {
                Authorization: `Bearer ${TOKEN}`,
              },
            }
          );
          const popular = await api.get(`movie/popular?language=en-US&page=1`, {
            headers: {
              Authorization: `Bearer ${TOKEN}`,
            },
          });
          const topRated = await api.get(
            `movie/top_rated?language=en-US&page=1`,
            {
              headers: {
                Authorization: `Bearer ${TOKEN}`,
              },
            }
          );
          const upcoming = await api.get(`movie/upcoming?language=en-US&page=1`, {
            headers: {
              Authorization: `Bearer ${TOKEN}`,
            },
          });
          const nowPlayingFilterd = nowPlaying.data.results.slice(10);
          const popularFilterd = popular.data.results.slice(10);
          const topRatedFilterd = topRated.data.results.slice(10);
          const upcomingFilterd = upcoming.data.results.slice(10);
  
          setData([
            nowPlayingFilterd,
            popularFilterd,
            topRatedFilterd,
            upcomingFilterd,
          ]);
          setMovie(topRatedFilterd[0])
        } catch (error) {
          // console.log(error);
        }
      };
  
      fetchData();
    }, []);
    const [modalVisible, setModalVisible] = useState(false);
  
    const openModal = () => {
      setModalVisible(true);
    };
  
    const closeModal = () => {
      setModalVisible(false);
    };
  
    return (
      <>
        <ParallaxScrollView
          headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
        >
          <ThemedView style={styles.stepContainer}>
            <OptionsMenu />
            <Banner movie={movie} />
            {data.map((movieList: any, index: number) => (
              <View style={styles.container}>
                <SlideMovies data={movieList} title={lists[index]}/>
              </View>
            ))}
          </ThemedView>
  
        </ParallaxScrollView>
      </>
    );
  }
  
  const styles = StyleSheet.create({
    titleContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
    },
    stepContainer: {
      gap: 8,
      marginBottom: 8,
    },
    reactLogo: {
      height: 150,
      width: 150,
      left: 10,
      top: 10,
    },
    container: {
      flex: 1,
      height: 200,
    },
    page: {
      justifyContent: "center",
      alignItems: "center",
    },
    modalContainer: {
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
      backgroundColor: "white",
      width: "100%",
      height: Dimensions.get("window").height * 0.25,
      padding: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
  });
  