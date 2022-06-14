import React from 'react';
import styled from 'styled-components/native';

import TextItem from './TextItem';

const AutocompleteList = ({items}) => {
  const renderItem = ({item}) => <TextItem title={item.title} />;

  return (
    <List
      data={items}
      renderItem={({item}) => <TextItem title={item.title} />}
      keyExtractor={item => item.id}
      keyboardShouldPersistTaps={'handled'}
    />
  );
};

export default AutocompleteList;

const List = styled.FlatList`
  padding: 0 15px 20px 15px;
`;
