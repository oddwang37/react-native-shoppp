import React, {useState} from 'react';
import styled from 'styled-components/native';

const Button = props => {
  const {title, onPress, transparent} = props;
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Root
      onPress={() => {
        onPress();
      }}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      isPressed={isPressed}
      transparent={transparent}
      {...props}>
      <ButtonText transparent={transparent}>{title}</ButtonText>
    </Root>
  );
};

export default Button;

const Root = styled.Pressable`
  background-color: ${p => (p.transparent ? '#fff' : '#131313')};
  border-radius: 5px;
  padding: 5px;
  border: ${p => (p.transparent ? '1px solid #000' : 'none')};
  transform: ${p => (p.isPressed ? 'scale(0.9)' : 'scale(1.0)')};
  margin-bottom: 5px;
`;

const ButtonText = styled.Text`
  text-transform: uppercase;
  padding: 5px 0;
  text-align: center;
  border-radius: 10px;
  font-weight: 500;
  font-size: 16px;
  color: ${p => (p.transparent ? '#131313' : '#fff')};
`;
