import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { FC } from "react";
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@/types/navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface CastProps {
  authors: string[];
}
export const Cast: FC<CastProps> = ({ authors }) => {
  const { navigate } = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const personName = "Keanu Reevs";
  const characterName = "John Wick";


  const handleSelect = (item: number) => {
    console.log(item);

    navigate("PersonScreen", { person: item })
  }
  return (
    <View className="my-6">
      <Text className="text-white text-lg mx-4 mb-5">Top cast</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 15 }}>
        {authors &&
          authors.map((author, index) => (
            <TouchableOpacity key={author} className="mr-4 items-center" onPress={() => handleSelect(index + 1)}>
              <View className="overflow-hidden rounded-full h-20 w-20 items-center border border-neutral-500">
                <Image className="rounded-2xl h-24 w-20" source={require("../assets/moviePoster2.png")} />
              </View>
              <Text className="text-white text-left text-xs mt-1">
                {characterName.length > 10 ? characterName.slice(0, 14) + "..." : characterName}
              </Text>
              <Text className=" text-neutral-400 text-left text-xs mt-1">
                {personName.length > 10 ? personName.slice(0, 14) + "..." : characterName}
              </Text>
            </TouchableOpacity>
          ))}
      </ScrollView>
    </View>
  );
};
