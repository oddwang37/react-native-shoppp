import React from 'react';
import {useWindowDimensions} from 'react-native';
import styled from 'styled-components/native';

const CartItem = ({title, img}) => {
  const {height, width} = useWindowDimensions();
  const imageWidth = width / 3.5 - 20;
  const imageHeight = Math.round((imageWidth * 9) / 16);

  return (
    <Root>
      <Img width={imageWidth} height={imageHeight} source={{uri: `${img}`}} />
      <Title>{title}</Title>
    </Root>
  );
};

export default CartItem;

const Root = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Img = styled.Image`
  width: 60px;
  height: 110px;
`;

const Title = styled.Text`
  font-weight: 500;
  font-size: 16px;
  flex: 1;
  padding-left: 20px;
`;
