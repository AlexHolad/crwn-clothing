import React from "react";

import CollectionItem from '../collection-item/collection-item.component'

import { CollectionsPreviewContainer, TitleContainer, PreviewContainer } from "./collections-preview.styles";


const CollectionPreview = ({ title, items }) => {
  return (
    <CollectionsPreviewContainer>
      <TitleContainer>{title.toUpperCase()}</TitleContainer>
      <PreviewContainer>
        {items
          .filter((item, idx)=> idx < 4)
          .map((item) => (
          <CollectionItem key={item.id} item={item}/>
        ))}
      </PreviewContainer>
    </CollectionsPreviewContainer>
  );
};

export default CollectionPreview;
