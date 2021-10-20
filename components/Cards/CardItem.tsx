import React from "react";
import { View, Image } from "react-native";
import styled from "styled-components/native";

//colors
import { colors } from "../colors";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";

const CardBackground = styled.ImageBackground`
  height: 250px;
  width: 350px;
  resize-mode: cover;
  background-color: ${colors.accent};
  border-radius: 25px;
  overflow: hidden;
  align-self: center;
  margin-right: 25px;
`;

const CardTouchable = styled.TouchableHighlight`
  height: 250px;
  border-radius: 25px;
`;

const TouchableView = styled.View`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  padding: 30px;
`;

const CardRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.Image`
  width: 80px;
  height: 25px;
  resize-mode: contain;
`;

interface CardItemProps {
  accountNo: string;
  balance: number;
  logo: any;
}

const CardItem = (props: CardItemProps) => {
  return (
    <CardBackground
      source={require("./../../assets/bgs/background_transparent.png")}
    >
      <CardTouchable
        underlayColor={colors.secondary}
        onPress={() => alert("Pressed!")}
      >
        <TouchableView>
          <CardRow>
            <RegularText>{props.accountNo}</RegularText>
          </CardRow>
          <CardRow>
            <View>
              <SmallText textStyles={{ marginBottom: 5, color: colors.white }}>
                Total balance
              </SmallText>
              <RegularText textStyles={{ fontSize: 25 }}>
                ${props.balance}
              </RegularText>
            </View>
            <Logo source={props.logo} />
          </CardRow>
        </TouchableView>
      </CardTouchable>
    </CardBackground>
  );
};

export default CardItem;
