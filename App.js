/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {store, persistor} from './redux/configureStore';
import LinkImage from './components/LinkImage';
import {Cart, Catalog} from './pages';
import Home from './pages/Home';
import History from './pages/History';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen
            name="Home"
            component={Home}
            options={({navigation}) => ({
              headerRight: () => (
                <LinkImage onPress={() => navigation.navigate('Cart')} imgPath={require('./assets/cart.png')} />
              ),
            })}
          />
          <Drawer.Screen name="History" component={History} />
        </Drawer.Navigator>
      </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
