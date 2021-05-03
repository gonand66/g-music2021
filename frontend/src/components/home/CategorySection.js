import React, { useContext, useState } from "react";
import styled, { css } from "styled-components";
import { AlbumListContext } from "../../models";

function CategorySection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { getAlbums } = useContext(AlbumListContext);

  const handleOnClick = (text) => {
    setActiveCategory(text);
    getAlbums(text);
  };

  const renderButton = (text) => {
    return (
      <CategoryButton
        onClick={() => handleOnClick(text)}
        active={activeCategory === text}
      >
        {text}
      </CategoryButton>
    );
  };

  return (
    <CategoryContainer>
      {renderButton("All")}
      {renderButton("Pop")}
      {renderButton("Hiphop")}
      {renderButton("Kpop")}
      {renderButton("Rock")}
    </CategoryContainer>
  );
}

export default CategorySection;

const CategoryButton = styled.button`
  border-radius: 50%;
  font-size: 15px;
  margin: 3%;
  color: white;
  ${(props) =>
    props.active
      ? css`
          height: 85px;
          width: 85px;
          border: 7px solid greenyellow;
          background: linear-gradient(to right, #add100, #7b920a);
        `
      : css`
          height: 80px;
          width: 80px;
          border: none;
          background: linear-gradient(to right, #be93c5, #7bc6cc);
        `}
  &:hover {
    border: 5px solid greenyellow;
  }
`;
const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
