import React, {useEffect, useState, useCallback} from 'react';
import styled from 'styled-components/native';
import {useDispatch, useSelector} from 'react-redux';
import {BackHandler, Keyboard} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import debounce from 'lodash.debounce';

import {setSearchValue} from '../redux/actions/filter';
import {setAutocompleteMode} from '../redux/actions/filter';
import {Input, Button} from './ui';

const Search = ({navigation}) => {
  const dispatch = useDispatch();
  const [nonDebouncedValue, setNonDebouncedValue] = useState();
  const searchValue = useSelector(({filter}) => searchValue);
  const isAutocompleteEnabled = useSelector(
    ({filter}) => filter.isAutocompleteEnabled,
  );

  const updateSearchValue = useCallback(
    debounce(text => {
      dispatch(setSearchValue(text));
    }, 1000),
    [],
  );

  useEffect(() => {
    setNonDebouncedValue(searchValue);
  }, [searchValue]);

  const handleChangeText = text => {
    updateSearchValue(text);
    setNonDebouncedValue(text);
  };

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
        onChangeText={handleChangeText}
        value={nonDebouncedValue}
        onPressClear={() => setNonDebouncedValue('')}
      />
      <FilterButton
        onPress={() => navigation.navigate('Filters')}
        activeOpacity={0.9}
        underlayColor="#cccccc">
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
