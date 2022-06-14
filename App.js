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
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

import {store, persistor} from './redux/configureStore';
import LinkImage from './components/LinkImage';
import HomeStack from './pages/HomeStack';
import History from './pages/History';

const Drawer = createDrawerNavigator();

const getHeaderImageLink = route => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Catalog';

  switch (routeName) {
    case 'Catalog':
      return ['My Cart', require('./assets/cart.png')];
    case 'My Cart':
      return ['Catalog', require('./assets/home.png')];
  }
};

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Drawer.Navigator>
            <Drawer.Screen
              name="Home"
              component={HomeStack}
              options={({navigation, route}) => ({
                headerRight: () => (
                  <LinkImage
                    onPress={() =>
                      navigation.navigate(getHeaderImageLink(route)[0])
                    }
                    imgPath={getHeaderImageLink(route)[1]}
                  />
                ),
                headerTitle: getFocusedRouteNameFromRoute(route),
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
