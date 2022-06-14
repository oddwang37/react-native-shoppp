import React from 'react';
import { View} from 'react-native';
import styled from 'styled-components/native';

const ListItem = ({title, img, price, date, colorway}) => {

  return (
    <Root>
      <Img resizeMode="contain" source={{uri: `${img}`}} />
      <Inner>
        <Title>{title}</Title>
        <SecondText>
        {(colorway.length > 43) ? 
                  (colorway.slice(0, 43) + '...') :
                  colorway}
        </SecondText>
        <Price>${price}</Price>
        <SecondText>{date}</SecondText>
      </Inner>
    </Root>
  );
};

export default ListItem;

const Root = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 20px;
`;

const Img = styled.Image`
  width: 65px;
  height: 65px;
  border-radius: 5px;
`;

const Inner = styled.View`
  padding-left: 20px;
  width: 0;
  flex-grow: 1;
  flex: 1;
`

const Title = styled.Text`
  font-weight: 500;
  font-size: 14px;
  color: #000;
  text-transform: capitalize;
`;


const Price = styled.Text`
  font-weight: 700;
  font-size: 18px;
  color: #000;
`

const SecondText = styled.Text`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
`

