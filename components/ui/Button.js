import React, { useState } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { useDispatch, useSelector } from 'react-redux';

import { setFilterText } from '../redux/actions/filter';
import { setSearchFocus } from '../redux/actions/filter';

const Button = (props) => {
  const { title, onPress} = props;
  
  return (
    <Root onPress={onPress} {...props}>
    	<ButtonText>{title}</ButtonText>
    </Root> 
  );
};

export default Button;
 
const Root = styled.TouchableHighlight`
  flex: 1;
  background-color: #131313;
  border-radius: 10px;
  padding: 5px;
  margin-bottom: 25px;
`;

const ButtonText = styled.Text`
  text-transform: uppercase;
  padding: 5px 0;
  text-align: center;
  border-radius: 10px;
  color: #000;
  font-weight: 700;
  font-size: 16px;
  color: #fff;
`