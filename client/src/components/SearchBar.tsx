import React from "react";
import { StatusBar } from "expo-status-bar";
import clsx from "clsx";
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { Platform, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "@/constants/colors";

const ios = Platform.OS === "ios";
export const SearchBar = () => {
  return (
    <>
      <SafeAreaView className={clsx(ios ? "-mb-2" : "mb-3")}>
        <StatusBar style="light" />
        <View className="flex-row items-center justify-between px-4">
          <Bars3CenterLeftIcon size={30} strokeWidth={2} color={Colors.white} />
          <Text className="text-white text-3xl font-bold">
            <Text style={{ color: Colors.yellow }}>M</Text>ovies
          </Text>
          <TouchableOpacity>
            <MagnifyingGlassIcon size={30} strokeWidth={2} color={Colors.white} scale={50} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};
