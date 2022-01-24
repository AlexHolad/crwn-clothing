import React from "react";
import { useNavigate } from "react-router";

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitleContainer,
  ContentSubtitleContainer,
} from "./menu-item.styles";

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate(`${linkUrl}`);
  };
  return (
    <MenuItemContainer onClick={handleClick}>
      <BackgroundImageContainer
        className="background-image"
        imageUrl={imageUrl}
      />
      <ContentContainer className='content'>
        <ContentTitleContainer>{title.toUpperCase()}</ContentTitleContainer>
        <ContentSubtitleContainer>SHOP NOW</ContentSubtitleContainer>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default MenuItem;
