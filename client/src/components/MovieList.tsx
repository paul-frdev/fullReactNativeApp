import { Colors } from "@/constants/colors";
import React, { FC } from "react";
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";

interface MovieListProps {
  title: string;
  data: number[];
}

const { height, width } = Dimensions.get("window");

export const MovieList: FC<MovieListProps> = ({ title, data }) => {
  const movieName = "Ant-man and the Wasp";
  return (
    <View className="mb-8 space-y-4">
      <View className="mx-4 flex-row items-center justify-between">
        <Text className="text-white text-xl">{title}</Text>
        <TouchableOpacity>
          <Text style={{ color: Colors.yellow }} className="text-lg">
            See all
          </Text>
        </TouchableOpacity>
      </View>
      {/* movie row */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 15 }}>
        {data.map((movie: any) => (
          <TouchableWithoutFeedback key={movie}>
            <View className="space-y-1 mr-4">
              <Image source={require("../assets/moviePoster2.png")} className="rounded-3xl" style={{ width: width * .33, height: height * 0.22 }} />
            <Text className="text-neutral-300 ml-1">{movieName.length >= 14 ? movieName.slice(0, 14) + '...' : movieName}</Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>
    </View>
  );
};
