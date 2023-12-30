import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// Define the parameters for each screen
export type RootStackParamList = {
  Register: {};
  Login: { userId: string };
};

// Define the navigation prop types for each screen
export type RegisterScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Register"
>;
export type RegisterScreenRouteProp = RouteProp<RootStackParamList, "Register">;
