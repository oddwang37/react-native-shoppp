import React from 'react';
import styled from 'styled-components/native';
import {useDispatch, useSelector} from 'react-redux';
import {BackHandler, Keyboard, StyleSheet} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

import {setFilterText} from '../redux/actions/filter';
import {setAutocompleteMode} from '../redux/actions/filter';
import {Input, Button} from './ui';
import LinkImage from '../components/LinkImage';

const Search = ({navigation}) => {
  const dispatch = useDispatch();
  const filterSearch = useSelector(({filter}) => filter.filterSearch);
  const isAutocompleteEnabled = useSelector(
    ({filter}) => filter.isAutocompleteEnabled,
  );

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if (isAutocompleteEnabled) {
          dispatch(setAutocompleteMode(false));
          Keyboard.dismiss();
          return true;
        } else {
          return false;
        }
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }),
  );
  return (
    <Root>
      <Input
        onFocus={() => dispatch(setAutocompleteMode(true))}
        onBlur={() => dispatch(setAutocompleteMode(false))}
        placeholder="Find an item..."
        onChangeText={text => dispatch(setFilterText(text))}
        value={filterSearch}
      />
     <FilterButton
        onPress={() => navigation.navigate('Filters')}
        activeOpacity={0.9}
        underlayColor="#cccccc"
        >
        <Img source={require('../assets/filter.png')} />
      </FilterButton>
    </Root>
  );
};

export default Search;

const Root = styled.View`
  height: 60px;
  padding-top: 5px;
  padding-bottom: 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const FilterButton = styled.TouchableHighlight`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  border-radius: 10px;
  position: relative;
`;

const Img = styled.Image`
  width: 40px;
  height: 40px;
`;