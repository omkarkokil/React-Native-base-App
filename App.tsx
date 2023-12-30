import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackNavigatorParamList } from "./global";
import Login from "./screens/Auth/Login";
import Register from "./screens/Auth/Register";
export default function App() {
  const Stack = createNativeStackNavigator<RootStackNavigatorParamList>();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
