import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { useDispatch, useSelector } from 'react-redux';

import DateFilter from '../components/DateFilter';
import ListItem from '../components/ListItem';

const History = () => {
  const items = useSelector(({history}) => history.items);
  const dateFilter = useSelector(({history}) => history.dateFilter);
  const dispatch = useDispatch();
  const history = useSelector(({history}) => history);


  const getStringDate = (date) => {
    // redux-persist transform Date object in string,
    // we must recieve an Date object
    const trueDate = new Date(date);
    const day = trueDate.getDate();
    const month = trueDate.getMonth() + 1;
    const year = trueDate.getFullYear();

    return `${month}/${day}/${year}`; 
  }
// if no filter, all items shown
  let filteredItems;
  if (dateFilter) {
    filteredItems = items.filter((item) => getStringDate(item.date) === getStringDate(dateFilter));
  } else {
    filteredItems = items;
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
      { filteredItems
        ? <HistoryItems 
        data={filteredItems}
        renderItem={renderItem}
        contentContainerStyle={{paddingBottom: 80}}
      />
       : <PlaceholderText>
        Items that you selected will be here
      </PlaceholderText>}
    </Root>
  );
};

export default History;

const Root = styled.View`
`

const HistoryItems = styled.FlatList`
  padding: 0 15px;
`
const PlaceholderText = styled.Text`
  font-size: 22px;
  color: #fff;
`