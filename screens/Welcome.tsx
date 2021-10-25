import React from "react";
import { Text, Image, View } from "react-native";
import styled from "styled-components/native";

// custom components
import { colors } from "../components/colors";
import { Container } from "../components/shared";
import CardSection from "../components/Cards/CardSection";
import TransactionSection from "../components/Transactions/TransactionSection";
import MoneyBottomSheet from "../components/SendMoney/MoneyBottomSheet";

import { StackScreenProps } from "@react-navigation/stack";

const WelcomeContainer = styled(Container)`
  background-color: ${colors.graylight};
  width: 100%;
  flex: 1;
`;

const Welcome = ({ navigation }: StackScreenProps) => {
  return (
    <WelcomeContainer>
      <CardSection navigation={navigation} />
      <TransactionSection />
      <MoneyBottomSheet />
    </WelcomeContainer>
  );
};

export default Welcome;
