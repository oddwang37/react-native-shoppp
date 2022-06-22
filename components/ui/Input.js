import React, {useRef} from 'react';
import styled from 'styled-components/native';
import {useDispatch, useSelector} from 'react-redux';

import {setSearchValue} from '../../redux/actions/filter';

const Input = props => {
  const dispatch = useDispatch();

  return (
    <Root>
      <TextInput {...props} />
      <Clear
        onPress={() => {
          props.onPressClear();
          dispatch(setSearchValue(''));
        }}>
        <ClearText>Clear</ClearText>
      </Clear>
    </Root>
  );
};

export default Input;

const Root = styled.View`
  position: relative;
  flex: 0.97;
`;
const TextInput = styled.TextInput`
  height: 40px;
  align-self: stretch;
  border-radius: 5px;
  border: 1px solid #000;
  width: 100%;
  padding: 0 50px 0 10px;
  background-color: #fff;
`;

const Clear = styled.TouchableOpacity`
  width: 40px;
  position: absolute;
  top: 2px;
  right: 10px;
  justify-content: center;
  align-items: center;
  padding-top: 8px;
`;

const ClearText = styled.Text`
  color: #000;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.6);
  text-transform: uppercase;
`;
