import React from 'react';
import styled from 'styled-components/native';

const Button = props => {
  const {title, onPress} = props;

  return (
    <Root onPress={onPress} {...props}>
      <ButtonText>{title}</ButtonText>
    </Root>
  );
};

export default Button;

const Root = styled.TouchableHighlight`
  background-color: #131313;
  border-radius: 10px;
  padding: 5px;
`;

const ButtonText = styled.Text`
  text-transform: uppercase;
  padding: 5px 0;
  text-align: center;
  border-radius: 10px;
  color: #000;
  font-weight: 700;
  font-size: 16px;
  color: #fff;
`;
