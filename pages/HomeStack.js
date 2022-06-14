import React from 'react';
import styled from 'styled-components/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Catalog from './Catalog';
import Cart from './Cart';
import LinkImage from '../components/LinkImage';

const HomeStack = () => {
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
        <Stack.Screen 
          name="My Cart" 
          component={Cart}
          options={{
            headerTitle: 'My Cart',
          }
          } 
        />
    </Stack.Navigator>
  );
};

export default HomeStack;

