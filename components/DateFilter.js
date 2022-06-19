import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import DatePicker from 'react-native-date-picker';
import styled from 'styled-components/native';

import {setDateFilter} from '../redux/actions/history';
import {Button} from './ui';

const DateFilter = () => {
  const dateFilter = useSelector(({history}) => history.dateFilter);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  // redux-persist transform Date object in string,
  // we must recieve an Date object
  let dateFilterValue;
  if (dateFilter) {
    dateFilterValue = new Date(dateFilter);
  } else {
    //if dateFilter is null, start value will be 1 jan 1970
    // need to set date picker start value to something useful start date value of picker like today
    dateFilterValue = new Date();
  }

  const resetFilter = () => {
    dispatch(setDateFilter(null));
  }

  return (
    <Root>
      <Button title="Select date" onPress={() => setOpen(true)}  />
      <Button title="Reset filter" onPress={resetFilter} transparent/>
      <DatePicker
        modal
        open={open}
        date={dateFilterValue}
        mode="date"
        onConfirm={date => {
          setOpen(false);
          dispatch(setDateFilter(date));
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </Root>
  );
};

export default DateFilter;

const Root = styled.View`
  margin-top: 15px;
  padding: 0 15px 15px 15px;
  justify-content: space-between;
  height: 115px;
`;
 