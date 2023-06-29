import { RouteProp } from "@react-navigation/native";

export type RootStackParamList = {
  HomeScreen: undefined;
  MovieScreen: { id: number };
};

export type PlaceDetailsRouteProps = RouteProp<RootStackParamList, "MovieScreen">;
