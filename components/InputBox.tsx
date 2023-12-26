import React, { FC } from "react";
import { KeyboardType, Text, TextInput, View } from "react-native";

interface InputProps {
  title: string;
  keyboardType?: KeyboardType;
  autoComplete?: string;
  secureTextEntry?: boolean;
  name: string;
  OnChangeText: (name: string, value: string) => void;
}

const InputBox: FC<InputProps> = ({
  title,
  keyboardType,
  autoComplete = true,
  OnChangeText,
  name,
  secureTextEntry = false,
}) => {
  return (
    <View className="space-y-2 !mb-2 ">
      <Text className="text-sm">{title}</Text>
      <TextInput
        autoCorrect={false}
        keyboardType={keyboardType}
        onChangeText={(value) => OnChangeText(name, value)}
        secureTextEntry={secureTextEntry}
        className="border-[1px] rounded-md w-full p-2 !py-0 border-gray-300"
      />
    </View>
  );
};

export default InputBox;
