import React from 'react';
import { FlatList } from 'react-native';
import { Container } from './styles';

import { products } from '../../../../mock';
import CardProduct from '../../components/CardProduct';

const Drink: React.FC = () => (
  <Container>
    <FlatList
      data={products.drinks}
      keyExtractor={item => String(item.id)}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <CardProduct product={item} />}
    />
  </Container>
);

export default Drink;
