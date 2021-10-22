import React from "react";
import styled from "styled-components/native";

//colors
import { colors } from "../colors";
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
  setActiveFilter: React.Dispatch<React.SetStateAction<number>>;
  activeFilter: number;
}) => {
  const data = [
    { id: 0, category: "Day" },
    { id: 1, category: "Week" },
    { id: 2, category: "Month" },
    { id: 3, category: "Year" },
  ];
  return (
    <FilterView>
      {data.map((item, index) => (
        <TextButton key={index} onPress={() => props.setActiveFilter(item.id)}>
          <SmallText
            textStyles={{
              color:
                props.activeFilter !== item.id
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
