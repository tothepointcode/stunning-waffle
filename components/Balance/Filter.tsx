import React from "react";
import styled from "styled-components/native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

//colors
import { colors } from "../colors";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";

const FilterView = styled.View`
  align-items: center;
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-around;
  width: 75%;
`;

const TextButton = styled.TouchableOpacity``;

const Filter = (props: {
  setActiveFilter: React.Dispatch<React.SetStateAction<string>>;
  activeFilter: string;
}) => {
  const data = [
    { category: "Day" },
    { category: "Week" },
    { category: "Month" },
    { category: "Year" },
  ];
  return (
    <FilterView>
      {data.map((item, index) => (
        <TextButton
          key={index}
          onPress={() => props.setActiveFilter(item.category)}
        >
          <SmallText
            textStyles={{
              color:
                props.activeFilter !== item.category
                  ? colors.graydark
                  : colors.primary,
            }}
          >
            {item.category}
          </SmallText>
        </TextButton>
      ))}
    </FilterView>
  );
};

export default Filter;
