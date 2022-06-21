import React from 'react';
import {View} from 'react-native';
import {useEffect} from 'react';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import styled from 'styled-components';

import {setProducts} from '../redux/actions/products';
import Search from '../components/Search';
import ItemsBlock from '../components/ItemsBlock';
import AutocompleteList from '../components/AutoCompleteList';

const Catalog = ({navigation}) => {
  const dispatch = useDispatch();
  const products = useSelector(({products}) => products.items);
  const filterSearch = useSelector(({filter}) => filter.filterSearch);
  const isAutocompleteEnabled = useSelector(
    ({filter}) => filter.isAutocompleteEnabled,
  );

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const { data } = await axios.get(
        'https://example-data.draftbit.com/sneakers?_sort=retailPrice&_order=descr',
      );
      dispatch(setProducts(data));
    } catch (error) {
      alert(error);
    }
  };

  const filteredProducts = products.filter(item =>
    item.title.includes(filterSearch),
  );

  return (
    <Root>
      <Search navigation={navigation} />
      {isAutocompleteEnabled ? (
        <AutocompleteList items={filteredProducts} />
      ) : (
        <ItemsBlock products={filteredProducts} />
      )}
    </Root>
  );
};

export default Catalog;

const Root = styled.View`
  padding: 10px 15px 10px 15px;
`
