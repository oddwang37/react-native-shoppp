import React from 'react';
import type {Node} from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import {useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {Provider, useSelector, useDispatch} from 'react-redux';

import ProductCard from '../components/ProductCard';
import { setProducts } from '../redux/actions/products';

const Catalog = () => {
  const dispatch = useDispatch();
  const products = useSelector(({products}) => products.items);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const result = await axios.get(
        'http://jsonplaceholder.typicode.com/photos?_start=0&_limit=10',
      );
      dispatch(setProducts(result.data));
    } catch (error) {
      alert(error);
    }
  };

  return (
      <ScrollView>
      <Wrapper>
        {products.map(item => {
          return (
            <ProductCard
              title={item.title}
              img={item.url}
              key={item.id + ''}
              id={item.id}
            />
          );
        })}
      </Wrapper>
    </ScrollView>
  );
};

export default Catalog;

const Viw = styled.View`
  width: 200px;
  height: 30px;
  background-color: red;
`;

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