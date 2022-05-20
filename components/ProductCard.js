import React from 'react';
import { Text, View, Image, TouchableOpacity, useWindowDimensions } from 'react-native';
import styled from 'styled-components/native';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addProductCart, deleteProductCart} from '../redux/actions/cart';

const ProductCard = ({ title, img, id }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(({cart}) => cart.products);

  const { height, width } = useWindowDimensions();
  const imageHeight = Math.round((width * 9) / 16);
  const imageWidth = width / 2 - 20;

   const handleProductClick = () => {
    let action = addProductCart({
      title,
      img,
      id,
    });
    cartItems.forEach((item) => {
      if (item.id === id) {
        action = deleteProductCart(id);
      }
    });
    dispatch(action);
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