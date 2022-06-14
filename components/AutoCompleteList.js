import React from 'react';
import styled from 'styled-components/native';
import {useDispatch} from 'react-redux';

import {setSearchFocus, setFilterText} from '../redux/actions/filter';

const AutocompleteList = ({items}) => {
  const dispatch = useDispatch();

  const onItemPress = title => {
    dispatch(setSearchFocus(false));
    dispatch(setFilterText(title));
  };
  return (
    <Root>
      {items.map(item => (
        <Item
          activeOpacity={0.6}
          underlayColor="#ddd"
          onPress={() => onItemPress(item.title)}
          key={item.id}>
          <ItemText>{item.title}</ItemText>
        </Item>
      ))}
    </Root>
  );
};

export default AutocompleteList;

const Root = styled.ScrollView`
  padding: 0 15px 20px 15px;
`;

const ItemText = styled.Text`
  color: #000;
  text-transform: capitalize;
`;

const Item = styled.TouchableHighlight`
  padding: 10px;
  border-bottom-color: #000;
  border-bottom-width: 1px;
`;
