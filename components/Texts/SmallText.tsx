import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

//colors
import { colors } from "../colors";

const StyledText = styled.Text`
  font-size: 14px;
  color: ${colors.graylight};
  text-align: left;
  font-family: Lato-Light;
`;

const SmallText = (props: { textStyles?: any; children: React.ReactNode }) => {
  return (
    <StyledText style={{ ...props.textStyles }}>{props.children}</StyledText>
  );
};

export default SmallText;
