import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { useDispatch, useSelector } from 'react-redux';

import DateFilter from '../components/DateFilter';
import ListItem from '../components/ListItem';

const History = () => {
  const items = useSelector(({history}) => history.items);
  const dispatch = useDispatch();

  const getStringDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear().toString().slice(2);

    return `${month}/${day}/${year}`; 
  }

  const renderItem = ({item}) => {
    return (
      <ListItem
        title={item.title}
        img={item.img}
        id={item.id} 
        price={item.price}
        colorway={item.colorway}
        date={getStringDate(item.date)}
      />
      )
  }

  return (
    <Root>
      <DateFilter />
      <HistoryItems 
        data={items}
        renderItem={renderItem}
        contentContainerStyle={{paddingBottom: 50}}
      />
    </Root>
  );
};

export default History;

const Root = styled.View`
`

const HistoryItems = styled.FlatList`
  padding: 15px;
`
