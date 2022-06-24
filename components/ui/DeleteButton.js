import React, {useState} from 'react';
import styled from 'styled-components';

const DeleteButton = ({onPress}) => {
  const [isPressed, setPressed] = useState(false);

  const onPressIn = () => {
    setPressed(true);
  };

  const onPressOut = () => {
    setPressed(false);
  };
  return (
    <Root
      isPressed={isPressed}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      activeOpacity={0.6}
      onPress={onPress}>
      <BinImg source={require('./../../assets/bin.png')} />
    </Root>
  );
};

export default DeleteButton;

const Root = styled.Pressable`
  flex: 0.3;
  height: 100%;
  align-items: center;
  justify-content: center;
  transform: ${p => (p.isPressed ? 'scale(0.8)' : 'scale(1)')};
  background-color: rgba(230, 230, 230, 0.5);
  border-radius: 8px;
`;

const BinImg = styled.Image`
  width: 27px;
  height: 27px;
`;
