import React from 'react';
import styled from 'styled-components/native';
import {useDispatch} from 'react-redux';
import {Picker} from '@react-native-picker/picker';

import {setFilterType, setSortBy, setOrderBy} from '../redux/actions/filter';
import Button from '../components/ui/Button';

const AdvancedSearch = ({navigation}) => {
  const [selectedFilter, setSelectedFilter] = React.useState();
  const [selectedSortingIndex, setSelectedSortingIndex] = React.useState(0);
  const genders = ['Men', 'Women', 'Child', 'Preschool', 'Toddler'];
  const brands = [
    'Nike',
    'Jordan',
    'Adidas',
    'Reebok',
    'Converse',
    'New Balance',
    'Vans',
  ];
  const colors = [
    'White',
    'Grey',
    'Black',
    'Red',
    'Blue',
    'Green',
    'Yellow',
    'Violet',
    'Gold',
    'Silver',
    'Fuchsia',
    'Orange',
  ];

  const sortTypes = [
    {title: 'Default', param: '', order: ''},
    {title: 'Alphabet', param: 'title', order: 'asc'},
    {title: 'Retail Price (asc)', param: 'retailPrice', order: 'asc'},
    {title: 'Retail Price (desc)', param: 'retailPrice', order: 'desc'},
    {title: 'Release Date (asc)', param: 'releaseDate', order: 'asc'},
    {title: 'Release Date (desc)', param: 'releaseDate', order: 'desc'},
  ];

  const dispatch = useDispatch();
  return (
    <Root>
      <Title>Filtering</Title>
      <SelectorTitle>Gender</SelectorTitle>
      <PickerBorder>
        <Picker
          selectedValue={selectedFilter}
          mode="dropdown"
          onValueChange={(itemValue, itemIndex) =>
            setSelectedFilter(itemValue)
          }>
          <Picker.Item label="Any" value={null} />
          {genders.map((item, index) => (
            <Picker.Item label={item} value={item} key={index} />
          ))}
        </Picker>
      </PickerBorder>
      <SelectorTitle>Brand</SelectorTitle>
      <PickerBorder>
        <Picker
          selectedValue={selectedFilter}
          mode="dropdown"
          onValueChange={(itemValue, itemIndex) =>
            setSelectedFilter(itemValue)
          }>
          <Picker.Item label="Any" value={null} />
          {brands.map((item, index) => (
            <Picker.Item label={item} value={item} key={index} />
          ))}
        </Picker>
      </PickerBorder>
      <SelectorTitle>Color</SelectorTitle>
      <PickerBorder>
        <Picker
          selectedValue={selectedFilter}
          mode="dropdown"
          onValueChange={(itemValue, itemIndex) =>
            setSelectedFilter(itemValue)
          }>
          <Picker.Item label="Any" value={null} />
          {colors.map((item, index) => (
            <Picker.Item label={item} value={item} key={index} />
          ))}
        </Picker>
      </PickerBorder>
      <Title>Sorting</Title>
      <Picker
        selectedValue={selectedSortingIndex}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedSortingIndex(itemIndex)
        }>
        {sortTypes.map((item, index) => {
          return (
            <Picker.Item
              label={sortTypes[index].title}
              value={index}
              key={index}
            />
          );
        })}
      </Picker>
      <Footer>
        <Button
          transparent
          title="Почему ставится только один фильтр?"
          onPress={() => {
            alert(
              'Из-за ограничений API искать можно только одно слово по всем полям, поэтому я сделал так, чтобы выбирать можно было либо фильтр по одной, либо по другой категории (но всё же можно поставить и фильтр и сортировку)',
            );
          }}
        />
        <Button
          title="Apply filters"
          onPress={() => {
            dispatch(setFilterType(selectedFilter));
            dispatch(setSortBy(sortTypes[selectedSortingIndex].param));
            dispatch(setOrderBy(sortTypes[selectedSortingIndex].order));
            navigation.goBack();
          }}
        />
      </Footer>
    </Root>
  );
};

export default AdvancedSearch;

const Root = styled.View`
  flex: 1;
`;

const SelectorTitle = styled.Text`
  color: #000;
  font-weight: 500;
  margin: 10px 0 10px 15px;
  font-size: 16px;
`;

const Title = styled(SelectorTitle)`
  font-size: 20px;
`;

const PickerBorder = styled.View`
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-bottom-width: 1px;
  border-top-color: rgba(0, 0, 0, 0.2);
  border-top-width: 1px;
`;

const Footer = styled.View`
  justify-self: flex-end;
  justify-content: flex-end;
  flex: 1;
  padding: 0 15px;
`;
