import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Catalog from './Catalog';
import Cart from './Cart';
import FiltersModal from './FiltersModal';
import LinkImage from '../components/LinkImage';

const HomeStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Group>
          <Stack.Screen
          name="Catalog"
          component={Catalog}
          options={({navigation}) => ({
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
        />
      </Stack.Group>
      <Stack.Group screenOptions={{presentation: 'modal'}}>
        <Stack.Screen name="Filters" component={FiltersModal} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default HomeStack;
