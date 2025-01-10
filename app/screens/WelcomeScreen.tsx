import { FC } from "react"
import { Image, ImageStyle, TextStyle, View, ViewStyle } from "react-native"
import { Text, Screen } from "@/components"
import { isRTL } from "../i18n"
import { AppStackScreenProps } from "../navigators"
import { $styles, type ThemedStyle } from "@/theme"

import { UserInformation } from "@/components/ui/UserInformation"
import { GroupTotalAmount } from "@/components/ui/GroupTotalAmount"
import { Transaction } from "@/components/ui/Transaction"

interface WelcomeScreenProps extends AppStackScreenProps<"Welcome"> {}

export const WelcomeScreen: FC<WelcomeScreenProps> = () => {
  return (
    <Screen preset="scroll" contentContainerStyle={$styles.flex1}>
      <UserInformation />
      <GroupTotalAmount />
      <Transaction />
    </Screen>
  )
}
