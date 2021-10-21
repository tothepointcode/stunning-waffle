import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styled from "styled-components/native";

//colors
import { colors } from "../colors";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";

const BalanceView = styled.View`
  align-items: center;
  background-color: ${colors.primary};
  width: 100px;
  height: 100px;
  padding: 20px;
  border-radius: 50px;
  border: 4px solid blue;
`;

const ButtonText = styled.Text`
  color: ${colors.white};
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0.5px;
`;

const RegularButton = (props: {
  btnStyles?: any;
  textStyles?: any;
}) => {
  return (
    <BalanceView style={{ ...props.btnStyles }}>
        <SmallText>Total Balance</SmallText>
        <RegularText>$20,000</RegularText>
    </BalanceView>
  );
};

export default RegularButton;
