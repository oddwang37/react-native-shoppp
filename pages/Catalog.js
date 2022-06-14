import React from 'react';
import {View, BackHandler} from 'react-native';
import {useEffect} from 'react';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';

import {setProducts} from '../redux/actions/products';
import {setSearchFocus} from '../redux/actions/filter';
import Search from '../components/Search';
import ItemsBlock from '../components/ItemsBlock';
import AutocompleteList from '../components/AutoCompleteList';

const Catalog = () => {
  const dispatch = useDispatch();
  const products = useSelector(({products}) => products.items);
  const filterSearch = useSelector(({filter}) => filter.filterSearch);
  const searchIsFocused = useSelector(({filter}) => filter.isFocused);

  useEffect(() => {
    getProducts();
    const backAction = () => {
      if (searchIsFocused) {
        dispatch(setSearchFocus(false));
      }
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove('hardwareBackPress', backAction);
  }, []);

  const getProducts = async () => {
    try {
      const result = await axios.get(
        'https://example-data.draftbit.com/sneakers?_limit=200',
      );
      const data = result.data.slice();
      data.forEach(item => (item.inCart = false));
      dispatch(setProducts(data));
    } catch (error) {
      alert(error);
    }
  };

  const filteredProducts = products.filter(item =>
    item.title.includes(filterSearch),
  );

  return (
    <View>
      <Search />
      {searchIsFocused ? (
        <AutocompleteList items={filteredProducts} />
      ) : (
        <ItemsBlock products={filteredProducts} />
      )}
    </View>
  );
};

export default Catalog;
