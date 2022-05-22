import React from 'react';
import styled from 'styled-components/native';
import {useSelector} from 'react-redux';

const CartImage = ({onPress}) => {
  const isFetching = useSelector(({products}) => products.isFetching);

  return (
    <Root
      disabled={isFetching}
      onPress={onPress}
      activeOpacity={0.9}
      underlayColor="#cccccc">
      <Img source={require('./../assets/cart.png')} />
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

const Img = styled.Image`
  width: 25px;
  height: 25px;
`;
