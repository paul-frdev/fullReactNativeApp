import { HomeScreen } from "@/screens/HomeScreen";
import { MovieScreen } from '@/screens/MovieScreen';
import { PersonScreen } from '@/screens/PersonScreen';
import { RootStackParamList } from '@/types/navigation';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const NativeNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MovieScreen"
          component={MovieScreen}
          options={{
            headerShown: false,
          }}
        />
         <Stack.Screen
          name="PersonScreen"
          component={PersonScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
