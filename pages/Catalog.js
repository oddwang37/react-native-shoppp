import React from 'react';
import {View} from 'react-native';
import {useEffect} from 'react';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import styled from 'styled-components';

import {fetchProducts} from '../redux/asyncActions/products';
import Search from '../components/Search';
import ItemsBlock from '../components/ItemsBlock';
import AutocompleteList from '../components/AutoCompleteList';

const Catalog = ({navigation}) => {
  const dispatch = useDispatch();
  const products = useSelector(({products}) => products.items);
  const {searchValue, isAutocompleteEnabled, filterType, sortBy, orderBy} =
    useSelector(({filter}) => filter);

  useEffect(() => {
    dispatch(fetchProducts(filterType, sortBy, orderBy));
    //alert(JSON.stringify(store));
  }, [filterType, sortBy, orderBy]);

  const searchedProducts = products.filter(item =>
    item.title.toLowerCase().includes(searchValue.toLowerCase()),
  );

  const first10Products = searchedProducts.slice(0, 10);

  return (
    <Root>
      <Search navigation={navigation} />
      {isAutocompleteEnabled ? (
        <AutocompleteList items={first10Products} />
      ) : (
        <ItemsBlock products={searchedProducts} />
      )}
    </Root>
  );
};

export default Catalog;

const Root = styled.View`
  padding: 10px 15px 10px 15px;
`;
