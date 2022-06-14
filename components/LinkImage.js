import React from 'react';
import styled from 'styled-components/native';
import {View} from 'react-native';
import {useSelector} from 'react-redux';

const LinkImage = ({onPress, imgPath, badge}) => {
  const isFetching = useSelector(({products}) => products.isFetching);
  const cartLength = useSelector(({cart}) => cart.products.length);

  return (
    <View>
      <Link
        disabled={isFetching}
        onPress={onPress}
        activeOpacity={0.9}
        underlayColor="#cccccc">
        <Img source={imgPath} />
      </Link>
      {badge && cartLength > 0 ? (
        <Badge>
          <BadgeNumber>{cartLength}</BadgeNumber>
        </Badge>
      ) : null}
    </View>
  );
};

export default LinkImage;

const Link = styled.TouchableHighlight`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  border-radius: 10px;
  margin-right: 15px;
  position: relative;
`;

const Img = styled.Image`
  width: 25px;
  height: 25px;
`;

const Badge = styled.View`
  width: 14px;
  height: 14px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background-color: #ff471a;
  position: absolute;
  right: 22px;
  top: 9px;
`;

const BadgeNumber = styled.Text`
  color: #fff;
  font-size: 10px;
  line-height: 12px;
  font-weight: 700;
`;
