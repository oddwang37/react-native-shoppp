import React from 'react';
import styled from 'styled-components/native';
import {useSelector, useDispatch} from 'react-redux';
import { Dropdown} from 'react-native-material-dropdown';

const FiltersModal = ({navigation}) => {

  const filters = {
    
  }


  return (
    <Root>
      <Title>Filters</Title>
    </Root>
  );
};

export default FiltersModal;

const Root = styled.View`
  flex: 1;
`;

const Title = styled.Text`
  color: rgba(0, 0, 0, 0.8);
  font-weight: 700;
  margin: 10px 15px 5px 20px;
  font-size: 18px;
  text-transform: uppercase;
`;

const Footer = styled.View`
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0);
  padding-bottom: 10px;
`;
