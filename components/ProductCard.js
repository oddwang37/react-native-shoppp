import React from 'react';
import {Image, useWindowDimensions, Text} from 'react-native';
import styled from 'styled-components/native';
import {useSelector, useDispatch} from 'react-redux';

import {addProductCart, deleteProductCart} from '../redux/actions/cart';
import {changeProductInCart} from '../redux/actions/products';
import {addProductToHistory} from '../redux/actions/history'

const ProductCard = ({title, img, id, price, colorway, inCart}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(({cart}) => cart.products);

  const {height, width} = useWindowDimensions();
  const imageHeight = Math.round((width * 9) / 16);
  const imageWidth = width / 2 - 25;

  const handleProductClick = () => {
    let isItemInCart = false;

    cartItems.forEach(item => {
      if (item.id === id) {
        isItemInCart = true;
      }
    });

    if (isItemInCart) {
      dispatch(deleteProductCart(id));
    } else {
      const itemObj = {
          title,
          img,
          id,
          price,
          colorway
      }
      dispatch(addProductCart(itemObj));
      dispatch(addProductToHistory({...itemObj, date: Date.now()}));
    }
    dispatch(changeProductInCart(id));
  };
 
  const icon = inCart
    ? require('./../assets/star.png') 
    : require('./../assets/unactive-star.png'); 
  <Image source={icon} />;

  return (
    <Root width={imageWidth} onPress={handleProductClick} activeOpacity={0.6}>
      <Img resizeMode="contain" source={{uri: `${img}`}} />
      <Info>
        <Title>{title}</Title>
        <Colorway>{colorway}</Colorway>
        <Price>{price ? ('$' + price) : 'N/A'}</Price>
      </Info>
      <FavIcon source={icon} />
    </Root>
  );
};

export default ProductCard;

const Root = styled.TouchableOpacity`
  width: ${p => p.width}px;
  margin-bottom: 15px;
  padding-bottom: 10px;
`;

const Img = styled.Image`
  width: 100%;
  height: undefined;
  aspect-ratio: 0.8;
  border-radius: 6px;
`;

const Info = styled.View`
  padding: 0 5px;
`

const Title = styled.Text`
  font-weight: 700;
  font-size: 16px;
  width: 100%;
  margin-top: 5px;
  text-transform: capitalize;
  color: #000;
`;

const Colorway = styled.Text`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.6);
  align-self: flex-start;
`

const Price = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: #000;
  align-self: flex-start;
`
const FavIcon = styled.Image`
  margin-top: 10px;
  width: 20px;
  height: 20px;
  align-self: flex-end;
  position: absolute;
  right: 5px;
  bottom: 5px;
`;