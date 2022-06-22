import React from 'react';
import styled from 'styled-components';
import {useSelector} from 'react-redux';

import ProductCard from './ProductCard';

const ItemsBlock = () => {
  const isFetching = useSelector(({products}) => products.isFetching);
  const products = useSelector(({products}) => products.items);

  const renderItem = ({item, index}) => {
    return (
      <ProductCard
        title={item.title}
        img={item.media.smallImageUrl}
        id={item.id}
        price={item.retailPrice}
        colorway={item.colorway}
      />
    );
  };

  return (
    <>
      {isFetching ? (
        <LoadingSpinner size="large" color="#131313" />
      ) : (
        <Wrapper
          data={products}
          renderItem={renderItem}
          numColumns={2}
          contentContainerStyle={{paddingBottom: 120}}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          keyExtractor={item => item.id}
        />
      )}
    </>
  );
};

export default ItemsBlock;

const Wrapper = styled.FlatList`
  display: flex;
`;

const LoadingSpinner = styled.ActivityIndicator`
  margin-top: 250px;
`;
