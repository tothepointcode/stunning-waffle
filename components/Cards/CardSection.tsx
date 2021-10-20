import React from "react";
import styled from "styled-components/native";

// components
import { colors } from "../colors";
import CardItem from "./CardItem";
import logo1 from "./../../assets/cards/visa_white.png";

const CardsList = styled.FlatList`
  background-color: ${colors.primary};
  width: 100%;
  padding-left: 25px;
  flex: 1;
`;

const CardSection = (props: { data?: object[] }) => {
  return (
    <CardsList
      data={[
        { account: "384575774483", balance: 20000.5, logo: logo1 },
        { account: "384573774483", balance: 20000.5, logo: logo1 },
        { account: "384525774483", balance: 20000.5, logo: logo1 },
      ]}
      contentContainerStyle={{
        paddingRight: 25,
      }}
      horizontal={true}
      keyExtractor={(item: any) => item.account}
      renderItem={({ item }: any) => (
        <CardItem
          logo={item.logo}
          balance={item.balance}
          accountNo={item.account}
        />
      )}
    />
  );
};

export default CardSection;
