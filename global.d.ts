/// <reference types="nativewind/types" />
import { NavigationProp } from "@react-navigation/native"

export type ScreenNames = ["Login", "Register"] // type these manually
export type RootStackNavigatorParamList = Record<ScreenNames[number], undefined>

export type RootScreenNavigatorProps = NavigationProp<RootStackNavigatorParamList>