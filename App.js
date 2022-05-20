/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import styled from 'styled-components';
import { Provider } from 'react-redux';

import ProductCard from './components/ProductCard';


const App: () => Node = () => {
  const [items, setItems] = useState([]);

   useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const result = await axios.get(
        'http://jsonplaceholder.typicode.com/photos?_start=0&_limit=10',
      );
      setItems(result.data);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <ScrollView>
      <Wrapper>
        {items.map((item) => {
          return <ProductCard title={item.title} img={item.url} key={item.id} id={item.id} />;
        })}
      </Wrapper>
    </ScrollView>
  );
};

export default App;

const Viw = styled.View`
  width: 200px;
  height: 30px;
  background-color: red;
`

const Root = styled.View`
  background-color: red;  
`

const Wrapper = styled.View`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
`;
