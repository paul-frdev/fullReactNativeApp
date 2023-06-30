import { Colors } from "@/constants/colors";
import { RootStackParamList } from '@/types/navigation';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { FC } from "react";
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";

interface MovieListProps {
  title: string;
  data: number[] | string[];
  seeAllShow?: boolean;
}

const { height, width } = Dimensions.get("window");

export const MovieList: FC<MovieListProps> = ({ title, data, seeAllShow = true }) => {
  const { push } = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const movieName = "Ant-man and the Wasp";
  return (
    <View className="mb-8 space-y-4">
      <View className="mx-4 flex-row items-center justify-between">
        <Text className="text-white text-xl">{title}</Text>
        {seeAllShow && (
          <TouchableOpacity>
            <Text style={{ color: Colors.yellow }} className="text-lg">
              See all
            </Text>
          </TouchableOpacity>
        )}
      </View>
      {/* movie row */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 15 }}>
        {data.map((movie: any) => (
          <TouchableWithoutFeedback key={movie} onPress={() => push('MovieScreen', movie)}>
            <View className="space-y-1 mr-4">
              <Image source={require("../assets/moviePoster2.png")} className="rounded-3xl" style={{ width: width * 0.33, height: height * 0.22 }} />
              <Text className="text-neutral-300 ml-1">{movieName.length >= 14 ? movieName.slice(0, 14) + "..." : movieName}</Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>
    </View>
  );
};
