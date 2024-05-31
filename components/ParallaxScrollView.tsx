import type { PropsWithChildren, ReactElement } from "react";
import { StyleSheet, useColorScheme, Image, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";

import { ThemedView } from "@/components/ThemedView";

const HEADER_HEIGHT = 100;

type Props = PropsWithChildren<{
  headerBackgroundColor: { dark: string; light: string };
}>;

export default function ParallaxScrollView({
  children,
  headerBackgroundColor,
}: Props) {
  const colorScheme = useColorScheme() ?? "light";
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [2, 1, 1]
          ),
        },
      ],
    };
  });

  return (
    <ThemedView style={styles.container}>
      <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
        <Animated.View style={[styles.header, headerAnimatedStyle]}>
          <View style={styles.imagesContainer}>
            <Image
              source={require("@/assets/images/netflix_icon.png")}
              style={styles.reactLogo}
            />
          </View>
        </Animated.View>
        <ThemedView style={styles.content}>{children}</ThemedView>
      </Animated.ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imagesContainer:{
    flexDirection: "row",
    alignContent: "space-between",
  },
  header: {
    height: 50,
    overflow: "hidden",
    flexDirection: "row",
    paddingVertical: 40,
    alignContent: "space-between",
  },
  content: {
    flex: 1,
    gap: 16,
    overflow: "hidden",
  },
  reactLogo: {
    height: 40,
    width: 40,  },
});
