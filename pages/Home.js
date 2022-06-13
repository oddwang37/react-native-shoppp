import React from 'react';
import styled from 'styled-components/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Catalog from './Catalog';
import Cart from './Cart';
import LinkImage from '../components/LinkImage';

const Home = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
        name="Catalog"
        component={Catalog}
        options={({navigation}) => ({
        headerRight: () => (
          <LinkImage onPress={() => navigation.navigate('Cart')} imgPath="./assets/cart.png" />
        ),
        })}
        />
        <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
};

export default Home;

