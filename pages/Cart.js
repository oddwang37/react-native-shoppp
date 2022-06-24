import React from 'react';
import styled from 'styled-components/native';
import {useSelector, useDispatch} from 'react-redux';
import {FlatList} from 'react-native';

import {clearCart} from '../redux/actions/cart';
import ListItem from '../components/ListItem';
import CartPlaceholder from '../components/CartPlaceholder';
import Button from '../components/ui/Button';

const Cart = ({navigation}) => {
  const dispatch = useDispatch();
  const products = useSelector(({cart}) => cart.products);
  const cartLength = products.length;

  const renderItem = ({item}) => {
    return (
      <ListItem
        title={item.title}
        img={item.img}
        id={item.id}
        price={item.price}
        colorway={item.colorway}
        onPress={() => {}}
      />
    );
  };

  return (
    <Root>
      {products.length === 0 ? (
        <CartPlaceholder navigation={navigation} />
      ) : (
        <>
          <Title>
            You have {cartLength} item{'('}s{')'} in your cart
          </Title>
          <FlatList
            data={products}
            renderItem={renderItem}
            contentContainerStyle={{
              paddingRight: 4,
              paddingLeft: 4,
              paddingBottom: 80,
              paddingTop: 5,
            }}
          />
          <Footer>
            <Button title="Clear cart" onPress={() => dispatch(clearCart())} />
            <Button
              transparent
              onPress={() => alert('You are not have enough money :( ')}
              title="Purchase"></Button>
          </Footer>
        </>
      )}
    </Root>
  );
};

export default Cart;

const Root = styled.View`
  flex: 1;
  padding: 0 15px;
`;

const Title = styled.Text`
  color: rgba(0, 0, 0, 0.8);
  font-weight: 700;
  margin: 10px 15px 5px 20px;
  font-size: 18px;
`;

const Footer = styled.View`
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0);
  padding-bottom: 10px;
`;
