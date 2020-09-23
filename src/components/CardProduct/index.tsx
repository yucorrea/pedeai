import React, { useMemo } from 'react';

import { TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Colors } from '../../constraints';
import { useCart } from '../../hooks/cart';

import {
  Container,
  Content,
  Image,
  Detail,
  Title,
  Ingredient,
  Total,
  Quantity,
  Menu,
  Footer,
  FooterTitle,
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
  const { addToCart, removeToCart, amount } = useCart();

  return (
    <Container>
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

        <Menu>
          <TouchableWithoutFeedback
            onPress={() => addToCart({ id: product.id, amount: 1 })}
          >
            <Icon name="plus-circle" size={24} color={Colors.primary} />
          </TouchableWithoutFeedback>
          <Total>
            <Quantity>{amount[product.id] || 0}</Quantity>
          </Total>
          <TouchableWithoutFeedback
            onPress={() => removeToCart({ id: product.id, amount: 1 })}
          >
            <Icon name="minus-circle" size={24} color={Colors.primary} />
          </TouchableWithoutFeedback>
        </Menu>
      </Content>
      <Footer>
        <FooterTitle>Preço</FooterTitle>
        <Price>
          R$
          {product.price}
        </Price>
      </Footer>
    </Container>
  );
};

export default CardProduct;
