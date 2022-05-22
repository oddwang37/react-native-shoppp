import React from 'react';
import styled from 'styled-components/native';

const CartPlaceholder = ({navigation}) => {
  return (
    <Root>
      <SText>You have not added items to your shopping cart yet :( </SText>
      <SButton
        underlayColor="#5233ac"
        onPress={() => navigation.navigate('Catalog')}>
        <CatalogLink>Back to catalog</CatalogLink>
      </SButton>
    </Root>
  );
};

export default CartPlaceholder;

const Root = styled.View`
  padding-top: 120px;
  flex: 1;
  justify-content: space-between;
`;

const SText = styled.Text`
  text-align: center;
  color: #000;
  font-size: 22px;
`;

const SButton = styled.TouchableHighlight`
  flex: 1;
  background-color: #7950f2;
  border-radius: 10px;
  padding: 5px;
  margin-top: 50px;
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
