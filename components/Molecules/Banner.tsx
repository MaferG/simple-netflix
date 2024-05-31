import { Image, StyleSheet } from "react-native";

export default function Banner({ movie }: any) {
  return (
    <>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
        }}
        style={styles.reactLogo}
      />
    </>
  );
}

const styles = StyleSheet.create({
  reactLogo: {
    height: 400,
    width: 410, 
    left: 0,
    top: 0, 
  },
});
