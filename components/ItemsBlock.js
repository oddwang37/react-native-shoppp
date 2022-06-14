import React from 'react';
import styled from 'styled-components';
import {useSelector} from 'react-redux';

import ProductCard from './ProductCard';

const ItemsBlock = ({products}) => {
  const filterSearch = useSelector(({filter}) => filter.filterSearch);
  const isFetching = useSelector(({products}) => products.isFetching);

  const filteredProducts = products.filter(item =>
    item.title.includes(filterSearch),
  );

  const renderItem = ({item, index}) => {
    return (
      <ProductCard
        title={item.title}
        img={item.media.smallImageUrl}
        id={item.id}
        price={item.retailPrice}
        colorway={item.colorway}
        inCart={item.inCart}
      />
    );
  };

  return (
    <>
      {isFetching ? (
        <LoadingSpinner size="large" color="#7950f2" />
      ) : (
        <Wrapper
          data={filteredProducts}
          renderItem={renderItem}
          numColumns={2}
          contentContainerStyle={{paddingBottom: 100}}
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
  padding: 5px 15px;
`;

const LoadingSpinner = styled.ActivityIndicator`
  margin-top: 250px;
`;
