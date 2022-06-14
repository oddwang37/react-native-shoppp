import React from 'react';
import styled from 'styled-components/native';

const ListItem = ({title, img, price, date, colorway}) => {
  return (
    <Root>
      <Img resizeMode="contain" source={{uri: `${img}`}} />
      <Inner>
        <Title>{title}</Title>
        <SecondText>
          {colorway.length > 43 ? colorway.slice(0, 43) + '...' : colorway}
        </SecondText>
        <Price>{price ? '$' + price : 'N/A'}</Price>
        <SecondText>{date}</SecondText>
      </Inner>
    </Root>
  );
};

export default ListItem;

const Root = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 10px;
  background-color: #fff;
  align-items: center;
  padding: 5px 10px;
  border-radius: 8px;
  height: 105px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 4px;
  elevation: 5;
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
`;

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
`;

const SecondText = styled.Text`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
`;
