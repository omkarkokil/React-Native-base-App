import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import InputBox from "../../components/InputBox";
import Test from "../../components/Test";
import { RootScreenNavigatorProps } from "../../global";

const Register = () => {
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
      <Text className="text-3xl font-semibold">Register</Text>
      <Test />
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
            Register Account
          </Text>
        </Pressable>
        <Text>Aleady have an account ? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text>Login</Text>
        </TouchableOpacity>
        <Text>{`${inputs.name} ${inputs.email} ${inputs.password}`}</Text>
      </View>
    </View>
  );
};

export default Register;
