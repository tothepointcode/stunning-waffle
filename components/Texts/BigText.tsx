import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

//colors
import { colors } from "../colors";

const StyledText = styled.Text`
  font-size: 37px;
  color: ${colors.white};
  text-align: left;
  font-family: Lato-Bold;
`;

const BigText = (props: { textStyles?: any; children: React.ReactNode }) => {
  return (
    <StyledText style={{ ...props.textStyles }}>{props.children}</StyledText>
  );
};

export default BigText;
