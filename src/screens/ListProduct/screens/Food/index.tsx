import React from 'react';
import { FlatList } from 'react-native';
import { Container } from './styles';

import { products } from '../../../../mock';
import CardProduct from '../../components/CardProduct';

const Food: React.FC = () => (
  <Container>
    <FlatList
      data={products.foods}
      keyExtractor={item => String(item.id)}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <CardProduct product={item} />}
    />
  </Container>
);

export default Food;
