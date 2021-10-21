import React from "react";
import styled from "styled-components/native";

//colors
import { colors } from "../colors";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import Profile from "../Headers/Profile";

const SendMoneyContainer = styled.TouchableHighlight`
  height: 150px;
  width: 135px;
  padding: 15px 5px 15px 15px;
  border-radius: 25px;
  flex: 1;
  justify-content: space-around;
  margin-right: 15px;
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
