import React from 'react';
import styled from 'styled-components/native';

const Input = (props) => {

  return (
    <Root {...props} />
  );
};

export default Input;

const Root = styled.TextInput`
  height: 40px;
  align-self: stretch;
  border-radius: 5px;
  border: 1px solid #000;
  width: 100%;
  padding: 0 10px;
  background-color: #fff;
`;


