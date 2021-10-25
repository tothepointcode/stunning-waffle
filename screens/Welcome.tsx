import React from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

// custom components
import { colors } from "../components/colors";
import { Container } from "../components/shared";
import CardSection from "../components/Cards/CardSection";
import TransactionSection from "../components/Transactions/TransactionSection";
import MoneyBottomSheet from "../components/SendMoney/MoneyBottomSheet";

import { RootStackParamList } from "../navigators/RootStack";
import { StackScreenProps } from "@react-navigation/stack";

const WelcomeContainer = styled(Container)`
  background-color: ${colors.graylight};
  width: 100%;
  flex: 1;
`;

type Props = StackScreenProps<RootStackParamList, "Welcome">;

const Welcome = ({ navigation }: Props) => {
  return (
    <WelcomeContainer>
      <StatusBar style="dark" />
      <CardSection navigation={navigation} />
      <TransactionSection />
      <MoneyBottomSheet />
    </WelcomeContainer>
  );
};

export default Welcome;
