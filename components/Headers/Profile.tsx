import React from "react";
import styled from "styled-components/native";

const StyledView = styled.View`
  display: flex;
  flex-direction: column;
  height: 45px;
  width: 45px;
  border-radius: 15px;
`;

const StyledImage = styled.Image`
  resize-mode: cover;
  width: 100%;
  height: 100%;
  border-radius: 15px;
`;

const Profile = (props: {
  img: any;
  imgContainerStyle?: any;
  imgStyle?: any;
}) => {
  return (
    <StyledView style={{ ...props.imgContainerStyle }}>
      <StyledImage style={{ ...props.imgStyle }} source={props.img} />
    </StyledView>
  );
};

export default Profile;
