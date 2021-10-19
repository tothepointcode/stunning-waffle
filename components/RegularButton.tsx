import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styled from "styled-components/native";

//colors
import { colors } from "./colors";

const ButtonView = styled.TouchableOpacity`
  align-items: center;
  background-color: ${colors.primary};
  width: 100%;
  padding: 15px;
  border-radius: 15px;
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
  children: React.ReactNode;
}) => {
  return (
    <ButtonView style={{ ...props.btnStyles }}>
      <ButtonText style={{ ...props.btnStyles }}>{props.children}</ButtonText>
    </ButtonView>
  );
};

export default RegularButton;
