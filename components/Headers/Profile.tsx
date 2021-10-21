import React from "react";
import styled from "styled-components/native";

// custom components
import { colors } from "../colors";

const StyledView = styled.View`
  display: flex;
  flex-direction: column;
  height: 65px;
  width: 65px;
  border-radius: 25px;
  background-color: ${colors.tertiary};
  margin-bottom: 35px;
`;

const StyledImage = styled.Image`
  resize-mode: cover;
  width: 100%;
  height: 100%;
  border-radius: 25px;
`;

const Profile = (props: { img: any; imgStyle?: any }) => {
  return (
    <StyledView style={{ ...props.imgStyle }}>
      <StyledImage source={props.img} />
    </StyledView>
  );
};

export default Profile;
