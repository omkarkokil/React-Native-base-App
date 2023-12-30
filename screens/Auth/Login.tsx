import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import InputBox from "../../components/InputBox";
import { RootScreenNavigatorProps } from "../../global";

const Login = () => {
  const navigation = useNavigation<RootScreenNavigatorProps>();

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const HandleInputs = (name: string, value: string) => {
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <View className="flex h-screen w-full items-center justify-center">
      <Text className="text-3xl font-semibold">Login </Text>
      <View className="my-4 space-y-2 w-[70%]">
        <InputBox
          name={"name"}
          OnChangeText={HandleInputs}
          title={"Enter your name"}
          autoComplete={"text"}
        />
        <InputBox
          title={"Enter your email"}
          keyboardType={"email-address"}
          autoComplete={"email"}
          name={"email"}
          OnChangeText={HandleInputs}
        />
        <InputBox
          secureTextEntry={true}
          name={"password"}
          title={"Enter your password"}
          OnChangeText={HandleInputs}
          autoComplete={"password"}
        />
        <Pressable className="bg-sky-400 p-2 max-w-[140] rounded-md !text-white ">
          <Text className="text-white text-center font-bold  w-max">
            Login Account
          </Text>
        </Pressable>

        <Text>Not have an acccount</Text>
        <TouchableOpacity
          onPress={() => {
            navigation?.navigate("Register");
          }}
        >
          <Text>Register</Text>
        </TouchableOpacity>

        {/* <Text>{` ${inputs.email} ${inputs.password}`}</Text> */}
      </View>
    </View>
  );
};

export default Login;
