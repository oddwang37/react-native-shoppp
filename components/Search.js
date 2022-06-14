import React from 'react';
import styled from 'styled-components/native';
import {useDispatch, useSelector} from 'react-redux';

import {setFilterText} from '../redux/actions/filter';
import {setSearchFocus} from '../redux/actions/filter';
import {Input} from './ui';

const Search = ({navigation}) => {
  const dispatch = useDispatch();
  const filterSearch = useSelector(({filter}) => filter.filterSearch);

  return (
    <Root>
      <Input
        onFocus={() => dispatch(setSearchFocus(true))}
        onBlur={() => dispatch(setSearchFocus(false))}
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
