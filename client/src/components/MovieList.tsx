import { Colors } from "@/constants/colors";
import { RootStackParamList } from "@/types/navigation";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { FC } from "react";
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { Loading } from "./Loading";
import { image185 } from "@/helpers";
import { IMovie } from '@/types/movies';

interface MovieListProps {
  title: string;
  data: any;
  seeAllShow?: boolean;
  loading?: boolean;
}

const { height, width } = Dimensions.get("window");

export const MovieList: FC<MovieListProps> = ({ title, data, seeAllShow = true, loading }) => {
  const { push } = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

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
        {loading ? (
          <Loading />
        ) : (
          data.map((movie: IMovie) => {
            console.log('movie?.id', movie?.id);

            return (
              <TouchableWithoutFeedback key={movie?.id} onPress={() => push("MovieScreen", movie)}>
                <View className="space-y-1 mr-4">
                  <>
                    <Image
                      source={{ uri: image185(movie?.poster_path) as string | undefined }}
                      className="rounded-3xl"
                      style={{ width: width * 0.33, height: height * 0.22 }}
                    />
                    <Text className="text-neutral-300 ml-1">{movie?.original_title?.length >= 14 ? movie?.original_title.slice(0, 14) + "..." : movie?.original_title}</Text>
                  </>
                </View>
              </TouchableWithoutFeedback>
            )
          })
        )}
      </ScrollView>
    </View>
  );
};
