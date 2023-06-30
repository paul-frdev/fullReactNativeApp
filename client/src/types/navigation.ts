import { RouteProp } from "@react-navigation/native";

export type RootStackParamList = {
  HomeScreen: undefined;
  MovieScreen: { id: number };
  PersonScreen: { person: number };
  SearchScreen: undefined;
};

export type PlaceDetailsRouteProps = RouteProp<RootStackParamList, "MovieScreen">;
