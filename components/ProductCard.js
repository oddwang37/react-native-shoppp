import React from 'react';
import { Text, View, Image, TouchableOpacity, useWindowDimensions } from 'react-native';
import styled from 'styled-components/native';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addProductCart, deleteProductCart} from '../redux/actions/cart';
import { changeProductInCart } from '../redux/actions/products';

const ProductCard = ({ title, img, id, inCart }) => {
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
    dispatch(changeProductInCart(id));
  };

  const icon = inCart 
  ? require('./../assets/star.png')
  : require('./../assets/unactive-star.png');
<Image source={icon} />;

  return (
    <Root width={imageWidth} onPress={handleProductClick} activeOpacity={0.6}>
      <Img width={imageWidth} height={imageHeight} source={{ uri: `${img}` }} />
      <Title>{title}</Title>
      <FavIcon source={icon} />
    </Root>
  );
};

export default ProductCard;

const Root = styled.TouchableOpacity`
  width: ${(p) => p.width}px;
  align-items: center;
  margin-bottom: 15px;
  padding-bottom: 10px;
`;

const Img = styled.Image`
  width: ${(p) => p.width - 2}px;
  height: ${(p) => p.height - 2}px;
`;

const Title = styled.Text`
  font-weight: 700;
  font-size: 16px;
  width: 100%;
  margin-top: 5px;
  margin-bottom: 10px;
  text-transform: capitalize;
  padding: 0 5px;
  color: #000;
`;
const FavIcon = styled.Image`
  margin-top: 10px;
  width: 20px;
  height: 20px;
  align-self: flex-end;
  position: absolute;
  right: 5px;
  bottom: 5px;
`