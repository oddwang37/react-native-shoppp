import React from 'react';
import { Text, View, TouchableHighlight, Image } from 'react-native';
import styled from 'styled-components/native';

const CartImage = ({ onPress }) => {
  return (
    <Root onPress={onPress} activeOpacity={0.9} underlayColor="#cccccc">
      <Image style={{ width: 25, height: 25 }} source={require('./../assets/cart.png')} />
    </Root>
  );
};

export default CartImage;

const Root = styled.TouchableHighlight`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
`;
