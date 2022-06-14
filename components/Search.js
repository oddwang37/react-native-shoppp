import React from 'react';
import styled from 'styled-components/native';
import {useDispatch, useSelector} from 'react-redux';
import {BackHandler, Keyboard} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

import {setFilterText} from '../redux/actions/filter';
import {setAutocompleteMode} from '../redux/actions/filter';
import {Input} from './ui';

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
    </Root>
  );
};

export default Search;

const Root = styled.View`
  height: 70px;
  flex-direction: row;
  padding: 15px 15px 10px 15px;
`;
