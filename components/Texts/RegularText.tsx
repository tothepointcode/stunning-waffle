import React from "react";
import styled from "styled-components/native";

//colors
import { colors } from "../colors";

const StyledText = styled.Text`
  font-size: 15px;
  font-family: Lato-Bold;
  color: ${colors.white};
  text-align: left;
`;

const RegularText = (props: {
  textStyles?: any;
  children: React.ReactNode;
}) => {
  return (
    <StyledText style={{ ...props.textStyles }}>{props.children}</StyledText>
  );
};

export default RegularText;
