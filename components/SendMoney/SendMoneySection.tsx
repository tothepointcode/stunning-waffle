import React from "react";
import styled from "styled-components/native";

// components
import { colors } from "../colors";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import SendMoneyItem from "./SendMoneyItem";
import Portrait1 from "./../../assets/portraits/1.jpg";
import Portrait2 from "./../../assets/portraits/2.jpg";
import Portrait3 from "./../../assets/portraits/3.jpg";

const TransactionSectionBackground = styled.View`
  display: flex;
  width: 100%;
  padding: 25px;
  background-color: ${colors.white};
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
`;

const TransactionRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const TransactionList = styled.FlatList`
  width: 100%;
  height: 265px;
`;

const TextButton = styled.TouchableOpacity``;

const SendMoneySection = () => {
  return (
    <TransactionSectionBackground>
      <TransactionRow style={{ marginBottom: 25 }}>
        <RegularText textStyles={{ fontSize: 25, color: colors.secondary }}>
          Send money to
        </RegularText>
        <TextButton onPress={() => alert("Add")}>
          <SmallText
            textStyles={{ fontWeight: "bold", color: colors.tertiary }}
          >
            +Add
          </SmallText>
        </TextButton>
      </TransactionRow>

      <TransactionList
        data={[
          {
            id: 1,
            amount: "2450.56",
            name: "Coby Andoh",
            background: colors.tertiary,
            img: Portrait1,
          },
          {
            id: 2,
            amount: "4450.56",
            name: "Harleen Scot",
            background: colors.primary,
            img: Portrait2,
          },
          {
            id: 3,
            amount: "6250.56",
            name: "James Corbyn",
            background: colors.accent,
            img: Portrait3,
          },
        ]}
        contentContainerStyle={{
          paddingRight: 25,
        }}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }: any) => (
          <SendMoneyItem
            amount={item.amount}
            name={item.name}
            img={item.img}
            background={item.background}
          />
        )}
      />
    </TransactionSectionBackground>
  );
};

export default SendMoneySection;
