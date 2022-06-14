import React from 'react';
import type {Node} from 'react';
import {View, FlatList, BackHandler } from 'react-native';
import {useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';

import ProductCard from '../components/ProductCard';
import {setProducts} from '../redux/actions/products';
import {setSearchFocus} from '../redux/actions/filter';
import Search from '../components/Search';
import ItemsBlock from '../components/ItemsBlock';
import AutocompleteList from '../components/AutoCompleteList';


const Catalog = () => {
  const dispatch = useDispatch();
  const products = useSelector(({products}) => products.items);
  const filterSearch = useSelector(({filter}) => filter.filterSearch);
  const isFetching = useSelector(({products}) => products.isFetching);
  const searchIsFocused = useSelector(({filter}) => filter.isFocused);

  useEffect(() => {
    getProducts();
    const backAction = () => {
      if (searchIsFocused) {
        dispatch(setSearchFocus(false));
        
      }
    }
  const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
  return () => backHandler.remove('hardwareBackPress', backAction);
  }, []);

  const getProducts = async () => {
    try {
      const result = await axios.get(
        'https://example-data.draftbit.com/sneakers?_limit=1000',
        //?_start=0&_limit=10  http://jsonplaceholder.typicode.com/photos?_start=0&_limit=10
      );
      const data = result.data.slice();
      data.forEach(item => (item.inCart = false));
      dispatch(setProducts(data));
    } catch (error) {
      alert(error);
    }
  };

  const filteredProducts = products.filter((item) => item.title.includes(filterSearch));

  return (
    <View>
      <Search />
      { searchIsFocused
        ? <AutocompleteList items={filteredProducts}/>
        : <ItemsBlock products={filteredProducts} />
      }
    </View>
  );
};

export default Catalog;

const LoadingSpinner = styled.ActivityIndicator`
  margin-top: 250px;
`;

