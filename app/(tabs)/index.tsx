import React from "react";
import { Image, StyleSheet, Platform } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ScrollView,
  GestureHandlerRootView,
  RefreshControl,
} from "react-native-gesture-handler";
import Lottie from "lottie-react-native";

export default function HomeScreen() {
  const animationRef = React.useRef<Lottie>(null);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView>
        <ScrollView
          contentContainerStyle={{
            paddingHorizontal: 10,
            paddingTop: Platform.select({ android: 10 }),
          }}
          refreshControl={
            <RefreshControl
              refreshing={false}
              tintColor={"transparent"}
              onRefresh={() => {animationRef.current?.play()}}
            />
          }
        >
          <Lottie
            ref={animationRef}
            source={require("../../lottie-animations/threads.json")}
            autoPlay
            style={{
              width: 90,
              height: 90,
              alignSelf: "center",
            }}
            loop={false}
            // onAnimationFinish={() => {
            //   alert("finished")
            // }}
          />
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
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
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
