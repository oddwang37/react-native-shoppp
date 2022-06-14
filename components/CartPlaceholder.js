import React from 'react';
import styled from 'styled-components/native';

import Button from './ui/Button';

const CartPlaceholder = ({navigation}) => {
  return (
    <Root>
      <SText>You have not added items to your shopping cart yet :( </SText>
      <Button
        underlayColor="#050314"
        onPress={() => navigation.navigate('Catalog')}
        title="Back to catalog"
      />
    </Root>
  );
};

export default CartPlaceholder;

const Root = styled.View`
  flex: 0.55;
  padding: 0 15px;
  justify-content: space-between;
`;

const SText = styled.Text`
  text-align: center;
  color: #000;
  font-size: 22px;
  margin-top: 250px;
`;
