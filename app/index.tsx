import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import images from "@/constants/images";

export default function Index() {
  const router = useRouter();

  const handleLogin = async () => {
    try {
      router.push("/explore");
    } catch (error) {
      Alert.alert("Login Failed, Something went wrong!");
    }
  };

  return (
    <SafeAreaView className="bg-black h-full">
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        {/* Background Splash Image */}
        <Image
          source={images.splash_cafe}
          className="w-full h-full absolute"
          style={{
            opacity: 0.85,

          }}
          resizeMode="cover"
        />
          <View
  style={{
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    opacity: 0.4,
    bottom: 0,
  }}
 />
        <View className="flex-1 justify-end px-10 pb-[60px] ">
          {/* Title */}
          <Text className="text-8xl font-extrabold text-white mb-2 border-gray-100">
            Café Cup
          </Text>
          <Text className="text-2xl font-rubik-extrabold mb-10 border-gray-100" style={{ color: "#fff" }}>
            Your favorite coffee shop in one place
          </Text>

          {/* Explore Button */}
          <TouchableOpacity
            onPress={handleLogin}
            className="rounded-full w-full"
            style={{
              backgroundColor: "#af8064",
              paddingVertical: 15,
              shadowColor: "#fff",
              shadowOpacity: 0.2,
              shadowRadius: 5,
              shadowOffset: { width: 0, height: 3 },
              elevation: 5, // For Android shadow
            }}
          >
            <Text className="text-lg font-bold text-center text-white">Explore {'>'}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
