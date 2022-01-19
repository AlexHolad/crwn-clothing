import React from "react";
import {useParams } from "react-router-dom";

import CollectionPage from "../collection/collection.component";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";

const ShopPage = () => {
  const params = useParams();
  return (
    <div className="shop-page">
      {params.collectionId ? <CollectionPage params={params}/> : <CollectionsOverview />}
    </div>
  );
};

export default ShopPage;
