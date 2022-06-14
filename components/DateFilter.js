import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import styled from 'styled-components/native';

import {setDateFilter} from '../redux/actions/history';
import { Button } from './ui';

const DateFilter = () => {
  const dateFilter = useSelector(({history}) => history.dateFilter);
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch();

  return (
    <Root>
      <Button title="Select date" onPress={() => setOpen(true)} style={{borderRadius: 0}}/>
      <DatePicker
        modal
        open={open}
        date={dateFilter}
        mode="date"
        onConfirm={(date) => {
          setOpen(false)
          dispatch(setDateFilter(date))
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
    </Root>
  )
}

export default DateFilter;

const Root = styled.View`
  height: 70px;
`