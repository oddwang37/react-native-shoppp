import React from 'react';
import styled from 'styled-components/native';
import {useDispatch} from 'react-redux';

import {setAutocompleteMode, setSearchValue} from '../redux/actions/filter';

const TextItem = ({title}) => {
  const dispatch = useDispatch();

  const onItemPress = () => {
    dispatch(setAutocompleteMode(false));
    dispatch(setSearchValue(title));
  };
  return (
    <Root
      activeOpacity={0.6}
      underlayColor="#ddd"
      onPress={() => onItemPress()}>
      <ItemText>{title}</ItemText>
    </Root>
  );
};

export default TextItem;

const Root = styled.Pressable`
  padding: 10px;
  border-bottom-color: #000;
  border-bottom-width: 1px;
`;

const ItemText = styled.Text`
  color: #000;
  text-transform: capitalize;
`;
