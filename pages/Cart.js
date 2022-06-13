import React from 'react';
import styled from 'styled-components/native';
import {useSelector} from 'react-redux';

import CartItem from '../components/CartItem';
import CartPlaceholder from '../components/CartPlaceholder';

const Cart = ({navigation}) => {
  const products = useSelector(({cart}) => cart.products);
  const store = useSelector((store) => store);;
  return (
    <Root>
      {products.length === 0 ? (
        <CartPlaceholder navigation={navigation} />
      ) : (
        <>
          <Wrapper>
            {products.map(item => (
              <CartItem
                title={item.title}
                img={item.img}
                key={item.id}
                id={item.id + ''}
              />
            ))}
          </Wrapper>
          <Footer>
            <SButton onPress={() => alert('You are not have enough money :( ')}>
              <CatalogLink>Purchase</CatalogLink>
            </SButton>
          </Footer>
        </>
      )}
    </Root>
  );
};

export default Cart;

const Root = styled.ScrollView`
  padding: 15px;
  flex: 1;
`;

const Wrapper = styled.View`
  flex: 0.8;
`;
const Footer = styled.View`
  justify-content: flex-end;
  flex: 1;
  padding: 0;
`;
const SButton = styled.TouchableHighlight`
  flex: 1;
  background-color: #7950f2;
  border-radius: 10px;
  padding: 5px;
  margin-bottom: 25px;
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
