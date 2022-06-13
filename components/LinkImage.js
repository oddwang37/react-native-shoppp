import React from 'react';
import styled from 'styled-components/native';
import {useSelector} from 'react-redux';

const LinkImage = ({onPress, imgPath}) => {
  const isFetching = useSelector(({products}) => products.isFetching);
  
  return (
    <Root
      disabled={isFetching}
      onPress={onPress}
      activeOpacity={0.9}
      underlayColor="#cccccc">
      <Img source={imgPath} />
    </Root>
  );
};

export default LinkImage;

const Root = styled.TouchableHighlight`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
`;

const Img = styled.Image`
  width: 25px;
  height: 25px;
`;
