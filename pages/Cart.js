import React from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useEffect } from 'react';
import styled from 'styled-components/native';
import { useDispatch, useSelector } from 'react-redux';

import CartItem from '../components/CartItem';

const Cart = ({ navigation }) => {
  const dispatch = useDispatch();
  const products = useSelector(({ cart }) => cart.products);
  return (
    <Root>
      <Wrapper>
        {products.map((item) => (
          <CartItem title={item.title} img={item.img} key={item.id} id={item.id + ''} />
        ))}
      </Wrapper>
      <Footer>
        <LinkWrapper underlayColor="#5233ac" onPress={() => navigation.navigate('Catalog')}>
          <CatalogLink>Back to catalog</CatalogLink>
        </LinkWrapper>
      </Footer>
    </Root>
  );
};

export default Cart;

const Root = styled.ScrollView`
  padding: 15px;
`;

const Wrapper = styled.View`
  flex: 0.9;
`;
const Footer = styled.View`
  justify-content: flex-end;
  flex: 0.1;
  padding: 0
`;
const LinkWrapper = styled.TouchableHighlight`
  flex: 1;
  background-color: #7950f2;
  border-radius: 10px;
  padding: 5px;
`;
const CatalogLink = styled.Text`
  text-transform: uppercase;
  padding: 5px 0;
  text-align: center;
  border-radius: 10px;
  color: #000;
  font-weight: 700;
  font-size: 16px;
  color: #fff;
`;
