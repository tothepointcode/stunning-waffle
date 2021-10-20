import React from "react";
import { View, Image } from "react-native";
import styled from "styled-components/native";

//colors
import { colors } from "../colors";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import TransactionAvi from "../Transactions/TransactionAvi";

const TransactionSectionBackground = styled.View`
    display: flex;
    height: 250px
    width: 100%;
    padding: 25px;
`;

const TransactionRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const LeftView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 35%;
  height: 100%;
  align-items: center;
`;

const RightView = styled.View``;

const TransactionSection = () => {
  return (
    <TransactionSectionBackground>
      <TransactionRow style={{ marginBottom: 25 }}>
        <RegularText textStyles={{ fontSize: 25, color: colors.secondary }}>
          Transaction
        </RegularText>
        <SmallText textStyles={{ fontWeight: "bold", color: colors.secondary }}>
          Recent
        </SmallText>
      </TransactionRow>

      <TransactionRow>
        <LeftView>
          <TransactionAvi background={colors.primary} icon="car" />
          <View>
            <RegularText textStyles={{ fontSize: 25, color: colors.secondary }}>
              Taxi
            </RegularText>
            <SmallText
              textStyles={{
                textAlign: "right",
                color: colors.graydark,
              }}
            >
              Uber car
            </SmallText>
          </View>
        </LeftView>

        <RightView>
          <RegularText textStyles={{ fontSize: 25, color: colors.secondary }}>
            -$86.00
          </RegularText>
          <SmallText
            textStyles={{
              textAlign: "right",
              color: colors.graydark,
            }}
          >
            14 Jun 2020
          </SmallText>
        </RightView>
      </TransactionRow>
    </TransactionSectionBackground>
  );
};

export default TransactionSection;
