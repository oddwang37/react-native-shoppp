import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Catalog from './Catalog';
import Cart from './Cart';
import LinkImage from '../components/LinkImage';
import AdvancedSearch from './AdvancedSearch';

const HomeStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="Catalog"
          component={Catalog}
          options={({navigation}) => ({
            headerShown: false,
            headerRight: () => (
              <LinkImage
                onPress={() => navigation.navigate('Cart')}
                imgPath="./assets/cart.png"
              />
            ),
          })}
        />
        <Stack.Screen
          name="My Cart"
          component={Cart}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Group>
      <Stack.Group screenOptions={{presentation: 'modal'}}>
        <Stack.Screen
          name="AdvancedSearch"
          options={{headerTitle: 'ADVANCED SEARCH'}}
          component={AdvancedSearch}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default HomeStack;
