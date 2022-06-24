import React from 'react';
import {StyleSheet} from 'react-native';
import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';

import {setFilterType, setSortBy} from '../redux/actions/filter';
import ProductCard from './ProductCard';
import Button from './ui/Button';

const ItemsBlock = ({products}) => {
  const dispatch = useDispatch();
  const {filterType, sortBy, searchValue} = useSelector(({filter}) => filter);
  const isLoading = useSelector(({products}) => products.isLoading);
  const filteredProducts = products.filter(item =>
    item.title.includes(searchValue),
  );

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

  const keyExtractor = item => item.id;
  return (
    <Root>
      {isLoading ? (
        <LoadingSpinner size="large" color="#7950f2" />
      ) : (
        <>
          <Wrapper
            data={filteredProducts}
            renderItem={renderItem}
            numColumns={2}
            contentContainerStyle={{paddingBottom: 170}}
            columnWrapperStyle={{justifyContent: 'space-between'}}
            keyExtractor={keyExtractor}
            showsVerticalScrollIndicator={false}
          />
          {filterType || sortBy ? (
            <Button
              title="Clear filters"
              style={styles.clearFiltersBtn}
              onPress={() => {
                dispatch(setFilterType(null));
                dispatch(setSortBy(null));
              }}
            />
          ) : null}
        </>
      )}
    </Root>
  );
};

export default ItemsBlock;

const Root = styled.View`
  position: relative;
`;
const Wrapper = styled.FlatList`
  display: flex;
`;

const LoadingSpinner = styled.ActivityIndicator`
  margin-top: 250px;
`;

const styles = StyleSheet.create({
  clearFiltersBtn: {
    position: 'absolute',
    bottom: 130,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 8,
  },
});
