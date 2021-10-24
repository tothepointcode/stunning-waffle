import React from "react";
import styled from "styled-components/native";

//colors
import { colors } from "../colors";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import Profile from "../Headers/Profile";
import { ScreenWidth } from "../shared";

const SendMoneyContainer = styled.TouchableHighlight`
  height: 150px;
  width: ${ScreenWidth * 0.273}px;
  padding: 10px;
  border-radius: 25px;
  justify-content: space-around;
  margin: 0px 15px 15px 0px;
`;

interface SendMoneyProps {
  img: any;
  name: string;
  amount: string;
  background: any;
}

const TransactionItem = (props: SendMoneyProps) => {
  return (
    <SendMoneyContainer
      underlayColor={colors.secondary}
      style={{ backgroundColor: props.background }}
      onPress={() => {
        alert("Send Money!");
      }}
    >
      <>
        <Profile
          img={props.img}
          imgContainerStyle={{ width: 60, height: 60, marginBottom: 10 }}
        />

        <SmallText
          textStyles={{
            textAlign: "left",
            color: colors.white,
            fontSize: 15,
          }}
        >
          {props.name}
        </SmallText>
        <RegularText
          textStyles={{
            color: colors.white,
            textAlign: "left",
          }}
        >
          {props.amount}
        </RegularText>
      </>
    </SendMoneyContainer>
  );
};

export default TransactionItem;
