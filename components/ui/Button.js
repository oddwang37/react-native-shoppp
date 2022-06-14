import React, {useState} from 'react';
import styled from 'styled-components/native';

const Button = props => {
  const {title, onPress} = props;
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Root
      onPress={() => {
        onPress();
      }}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      isPressed={isPressed}
      {...props}>
      <ButtonText>{title}</ButtonText>
    </Root>
  );
};

export default Button;

const Root = styled.Pressable`
  background-color: #131313;
  border-radius: 10px;
  padding: 5px;
  transform: ${p => (p.isPressed ? 'scale(0.9)' : 'scale(1.0)')};
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
