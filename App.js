/* eslint-disable prettier/prettier */
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
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import styled from 'styled-components';
import {Provider} from 'react-redux';

import store from './redux/configureStore';
import ProductCard from './components/ProductCard';
import Catalog from './pages/Catalog';
import Cart from './pages/Cart';

const App: () => Node = () => {

  return (
    <NavigationContainer>
      <Provider store={store}>
        <Catalog />
        <Cart />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
