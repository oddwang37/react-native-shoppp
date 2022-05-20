import React from 'react';
import { Text, View, Button, ScrollView } from 'react-native';
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
          <CartItem title={item.title} img={item.img} key={item.id} id={item.id} />
        ))}
        <CatalogLink onPress={() => navigation.navigate('Catalog')}>Back to catalog</CatalogLink>
      </Wrapper>
    </Root>
  );
};

export default Cart;

const Root = styled.ScrollView`
  padding: 15px;
`;

const Wrapper = styled.View`
  flex: 1;
`;
const CatalogLink = styled.Text`
  text-decoration: underline;
  text-align: center;
  margin-top: 20px;
`;
