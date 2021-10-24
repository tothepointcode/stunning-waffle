import React from "react";
import { Text, Image, View } from "react-native";
import styled from "styled-components/native";

// custom components
import { colors } from "../components/colors";
import { Container } from "../components/shared";
import RegularButton from "../components/Buttons/RegularButton";
import BigText from "../components/Texts/BigText";
import SmallText from "../components/Texts/SmallText";
import Greetings from "../components/Headers/Greetings";
import Profile from "../components/Headers/Profile";
import CardSection from "../components/Cards/CardSection";
import Avi from "./../assets/avi/avatar.png";
import TransactionSection from "../components/Transactions/TransactionSection";
import SendMoneySection from "../components/SendMoney/SendMoneySection";

const WelcomeContainer = styled(Container)`
  background-color: ${colors.graylight};
  width: 100%;
  height: 100%;
`;

const Welcome = () => {
  return (
    <WelcomeContainer>
      <CardSection />
      <TransactionSection />
      <SendMoneySection />
    </WelcomeContainer>
  );
};

export default Welcome;
