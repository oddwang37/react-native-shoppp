import React from 'react';
import { Text, View, Image, TouchableOpacity, useWindowDimensions } from 'react-native';
import styled from 'styled-components/native';
import { useEffect } from 'react';

const ProductCard = ({ title, img, id }) => {
  const { height, width } = useWindowDimensions();
  const imageHeight = Math.round((width * 9) / 16);
  const imageWidth = width / 2 - 20;

  const handleProductClick = () => {
    alert('pressed');
  };

  return (
    <Root width={imageWidth} onPress={handleProductClick} activeOpacity={0.6}>
      <Img width={imageWidth} height={imageHeight} source={{ uri: `${img}` }} />
      <Title>{title}</Title>
    </Root>
  );
};

export default ProductCard;

const Root = styled.TouchableOpacity`
  display: flex;
  width: ${(p) => p.width}px;
  align-items: center;
`;

const Img = styled.Image`
  width: ${(p) => p.width}px;
  height: ${(p) => p.height}px;
`;

const Title = styled.Text`
  font-weight: 700;
  font-size: 16px;
  width: 100%;
  margin-top: 5px;
  margin-bottom: 10px;
  text-transform: capitalize;
`;