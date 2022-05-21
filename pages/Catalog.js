import React from 'react';
import type {Node} from 'react';
import {Text, View, Image, ScrollView, ActivityIndicator } from 'react-native';
import {useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {Provider, useSelector, useDispatch} from 'react-redux';

import ProductCard from '../components/ProductCard';
import { setProducts } from '../redux/actions/products';

const Catalog = () => {
  const dispatch = useDispatch();
  const products = useSelector(({products}) => products.items);
  const isFetching = useSelector(({products}) => products.isFetching);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const result = await axios.get(
        'http://jsonplaceholder.typicode.com/photos?_start=0&_limit=10',
      );
      const data = result.data.slice();
      data.forEach(item => item.inCart = false);
      dispatch(setProducts(data));
    } catch (error) {
      alert(error);
    }
  };

  return (
      <ScrollView>
      
      { isFetching
        ? <LoadingSpinner size="large" color="#7950f2" />
        :<Wrapper>
          {products.map(item => {
          return (
            <ProductCard
              title={item.title}
              img={item.url}
              key={item.id + ''}
              id={item.id}
              inCart={item.inCart}
              />
            );
          })}
        </Wrapper>
    }
    </ScrollView>
  );
};

export default Catalog;

const Root = styled.View`
  background-color: red;
`;

const Wrapper = styled.View`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
`;

const LoadingSpinner = styled.ActivityIndicator`
  margin-top: 250px;
`
