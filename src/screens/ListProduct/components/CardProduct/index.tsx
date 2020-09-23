import React, { useCallback } from 'react';

import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Content,
  Image,
  Detail,
  Title,
  Ingredient,
  Price,
} from './styles';

interface Product {
  id: number;
  title: string;
  ingredients: [];
  price: number;
  image?: string;
}

interface CardProductProps {
  product: Product;
}

const CardProduct: React.FC<CardProductProps> = ({ product }) => {
  const { navigate } = useNavigation();

  const handleDetail = useCallback(() => {
    navigate('DetailProduct', { product });
  }, [navigate, product]);

  return (
    <Container onPress={handleDetail}>
      <Content>
        <Image
          source={{
            uri: product.image,
          }}
        />

        <Detail>
          <Title>{product.title}</Title>
          <Ingredient>{product.ingredients.join(',')}</Ingredient>
        </Detail>
        <Price>
          R$
          {product.price}
        </Price>
      </Content>
    </Container>
  );
};

export default CardProduct;
