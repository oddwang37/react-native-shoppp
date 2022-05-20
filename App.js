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
import CartImage from './components/CartImage';
import Catalog from './pages/Catalog';
import Cart from './pages/Cart';


const Stack = createNativeStackNavigator();

const App: () => Node = () => {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
          name="Catalog" 
          component={Catalog} 
          options={({navigation}) => ({
          headerRight: () => <CartImage onPress={() => navigation.navigate('Cart')} />,
          })} 
          />
          <Stack.Screen name="Cart" component={Cart} /> 
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
