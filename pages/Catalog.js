import React from 'react';
import {View} from 'react-native';
import {useEffect} from 'react';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import styled from 'styled-components';

import {setProducts, fetchProducts} from '../redux/actions/products';
import Search from '../components/Search';
import ItemsBlock from '../components/ItemsBlock';
import AutocompleteList from '../components/AutoCompleteList';

const Catalog = ({navigation}) => {
  const dispatch = useDispatch();
  const products = useSelector(({products}) => products.items);
  const searchValue = useSelector(({filter}) => filter.searchValue);
  const isAutocompleteEnabled = useSelector(
    ({filter}) => filter.isAutocompleteEnabled,
  );

  useEffect(() => {
    dispatch(fetchProducts(searchValue));
  }, [searchValue]);

  const first10Items = products.slice(0, 10);

  return (
    <Root>
      <Search navigation={navigation} />
      {isAutocompleteEnabled ? (
        <AutocompleteList items={first10Items} />
      ) : (
        <ItemsBlock products={products} />
      )}
    </Root>
  );
};

export default Catalog;

const Root = styled.View`
  padding: 10px 15px 10px 15px;
`;
