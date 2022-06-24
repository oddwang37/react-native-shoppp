import React, {useCallback} from 'react';
import {Image} from 'react-native';
import styled from 'styled-components/native';
import {useSelector, useDispatch} from 'react-redux';
import debounce from 'lodash.debounce';

import {addProductCart, deleteProductCart} from '../redux/actions/cart';
import {addProductToHistory} from '../redux/actions/history';

const ProductCard = ({title, img, id, price, colorway}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(({cart}) => cart.products);

  let isItemInCart = false;

  cartItems.forEach(item => {
    if (item.id === id) {
      isItemInCart = true;
    }
  });

  const handleProductClick = useCallback(
    debounce(() => {
      if (isItemInCart) {
        dispatch(deleteProductCart(id));
      } else {
        const itemObj = {
          title,
          img,
          id,
          price,
          colorway,
        };
        dispatch(addProductCart(itemObj));
        dispatch(addProductToHistory({...itemObj, date: Date.now()}));
      }
    }, 150),
    [isItemInCart],
  );

  const icon = isItemInCart
    ? require('./../assets/star.png')
    : require('./../assets/unactive-star.png');
  <Image source={icon} />;

  return (
    <Root onPress={handleProductClick} activeOpacity={0.6}>
      <Img resizeMode="contain" source={{uri: `${img}`}} />
      <Info>
        <Title>{title}</Title>
        <Colorway>{colorway}</Colorway>
        <Price>{price ? '$' + price : 'Out of stock'}</Price>
      </Info>
      <FavIcon source={icon} />
    </Root>
  );
};

export default React.memo(ProductCard);

const Root = styled.TouchableOpacity`
  width: 47%;
  margin-bottom: 15px;
  padding-bottom: 10px;
`;

const Img = styled.Image`
  width: 100%;
  aspect-ratio: 0.8;
  border-radius: 6px;
`;

const Info = styled.View`
  padding: 0 5px;
`;

const Title = styled.Text`
  font-weight: 500;
  font-size: 14px;
  width: 100%;
  margin-top: 5px;
  text-transform: capitalize;
  color: #000;
`;

const Colorway = styled.Text`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.6);
  align-self: flex-start;
`;

const Price = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: #000;
  align-self: flex-start;
`;
const FavIcon = styled.Image`
  margin-top: 10px;
  width: 20px;
  height: 20px;
  align-self: flex-end;
  position: absolute;
  right: 5px;
  bottom: 5px;
`;
